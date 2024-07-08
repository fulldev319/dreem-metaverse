import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  Notification,
  getNotifications,
  removeUserNotification,
  markUserNotificationsAsRead,
} from "shared/services/API/NotificationsAPI";
import { useTypedSelector } from "store/reducers/Reducer";

type NotificationsContextType = {
  unreadNotifications: number;
  notifications: Notification[];
  markAllNotificationsAsRead: () => void;
  dismissNotification: (notificationId: string) => void;
  removeNotification: (notificationId: string) => void;
};

const NotificationsContext = createContext<NotificationsContextType | null>(null);

type NotificationsContextProviderProps = {
  socket: SocketIOClient.Socket | null;
};

export const NotificationsContextProvider: React.FunctionComponent<NotificationsContextProviderProps> = ({
  socket,
  children,
}) => {
  const [unreadNotifications, setUnreadNotifications] = useState<number>(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // WARN Deps use `currentUser.id` because there is legacy code that updates user in redux store
  // Checking for user ID is hack to avoid unnecesary updates
  const currentUserId = useTypedSelector(state => state.user)?.id || null;

  useEffect(() => {
    if (currentUserId) {
      getNotifications().then(result => {
        if (result.success) {
          const followRequestNotifications = result.data.notifications.filter(
            n => n.type === 1 || n.type === 2 || n.podType === "Dreem" || n.podType === "METAVERSE"
          );

          // remove duplicated notifications
          const filteredNotifications = followRequestNotifications.reduce((acc: any[], current: any) => {
            const duplication = acc.find(
              item =>
                item.type === current.type &&
                item.itemId === current.itemId &&
                item.follower === current.follower
            );
            if (!duplication) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);

          setNotifications(sortNotifications(filteredNotifications));
          setUnreadNotifications(result.data.numberOfMissedNotifications ?? 0);
        }
      });
    }
  }, [currentUserId]);

  useEffect(() => {
    if (currentUserId && socket) {
      const incomingNotificationHandler = (incomingNotification: Notification) => {
        if (incomingNotification.type === 1 || incomingNotification.type === 2) {
          setNotifications(currentNotifications =>
            sortNotifications([...currentNotifications, incomingNotification])
          );
          setUnreadNotifications(value => value + 1);
        }
      };

      socket.on("sendNotification", incomingNotificationHandler);

      return () => {
        socket.removeListener("sendNotification", incomingNotificationHandler);
      };
    }
  }, [currentUserId, socket]);

  const context = useMemo<NotificationsContextType>(
    () => ({
      unreadNotifications,
      markAllNotificationsAsRead() {
        markUserNotificationsAsRead();
        setUnreadNotifications(0);
      },
      notifications,
      dismissNotification(id) {
        setNotifications(currentNotifications => currentNotifications.filter(n => n.id !== id));
      },
      removeNotification(notificationId) {
        removeUserNotification(notificationId);
        setNotifications(currentNotifications => currentNotifications.filter(n => n.id !== notificationId));
      },
    }),
    [notifications, unreadNotifications]
  );

  return <NotificationsContext.Provider value={context}>{children}</NotificationsContext.Provider>;
};

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error("useNotifications hook must be used inside NotificationsContextProvider");
  }

  return context;
};

const sortNotifications = (notifications: Notification[]) => notifications.sort((a, b) => b.date - a.date);
