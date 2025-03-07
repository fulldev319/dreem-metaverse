import React from "react";
import cls from "classnames";
import { Modal } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import { useAuth } from "shared/contexts/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useStyles } from "./index.styles";
import PhantomIcon from "assets/icons/phantom_connect.png";
import SolflareIcon from "assets/icons/solflare_connect.png";

const ConnectWalletModal = ({
  open,
  onClose,
  handleWalletConnect,
}: {
  open: any;
  onClose: () => void;
  handleWalletConnect: (type: any) => void;
}) => {
  const classes = useStyles({});

  const { isOnSigning } = useAuth();
  const [page, setPage] = React.useState<number>(0);
  const [type, setType] = React.useState<string>("");
  const handleConnect = selectedType => {
    setType(selectedType);
    handleWalletConnect(selectedType);
  };

  return (
    <Modal size="small" isOpen={open} onClose={onClose} showCloseIcon className={classes.root}>
      {page === 0 ? (
        <>
          <Box className={classes.title} mb={2.5}>
            Connect Wallet
          </Box>
          <Box className={classes.description} mb={3}>
            Select wallet you would like to connect
          </Box>
          <Box
            className={cls({ [classes.disabled]: isOnSigning && type == "metamask" }, classes.button)}
            width={1}
            mb={2}
            onClick={() => isOnSigning || handleConnect("metamask")}
          >
            <Box className="icon">
              {isOnSigning && type == "metamask" ? (
                <img className={classes.circleProgress} src={require("assets/icons/loader.png")} />
              ) : (
                <MetamaskIcon />
              )}
            </Box>
            Metamask
          </Box>
          <Box
            className={cls(classes.button)}
            width={1}
            mb={2}
            onClick={() => handleConnect("walletconnect")}
          >
            <Box className="icon">
              {isOnSigning && type == "walletconnect" ? (
                <img className={classes.circleProgress} src={require("assets/icons/loader.png")} />
              ) : (
                <WalletConnectIcon />
              )}
            </Box>
            Wallet Connnect
          </Box>
          <Box className={cls(classes.button, classes.disabled)} width={1} mb={2}>
            <Box className="icon">
              <img src={PhantomIcon} />
            </Box>
            Phantom
          </Box>
          <Box className={cls(classes.button, classes.disabled)} width={1}>
            <Box className="icon">
              <img src={SolflareIcon} />
            </Box>
            Solflare
          </Box>
          {/* <Box className={classes.alert} mt={4}>
            I don’t have a wallet
          </Box> */}
        </>
      ) : page === 1 ? (
        <>
          <Box className={classes.back} onClick={() => setPage(0)}>
            <BackIcon />
          </Box>
          <Box display="flex" justifyContent="center" mb={5}>
            <WalletConnectLogoIcon />
          </Box>
          <Box className={classes.description} mb={5}>
            Scan QR code with WalletConnect-compatible wallet.
          </Box>
          <Box className={classes.qrcodeBox}></Box>
          <Box className={classes.alert} mt={2}>
            Copy to clipboard
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.back} onClick={() => setPage(0)}>
            <BackIcon />
          </Box>
          <Box className={classes.title} mb={2.5}>
            Recommended Wallets
          </Box>
          <Box className={classes.description}>
            Dreem is compatible with any Ethereum wallet. We recommend Metamask on desktop and Android, and
            Wallet Connect on iOS.
          </Box>
          <Box className={classes.divider} />
          <Box className={classes.button} width={1} mb={2}>
            <Box className="icon">
              <MetamaskIcon />
            </Box>
            Download Metamask
          </Box>
          <Box className={classes.button} width={1} onClick={() => setPage(1)}>
            <Box className="icon">
              <WalletConnectIcon />
            </Box>
            Download Wallet Connnect
          </Box>
        </>
      )}
    </Modal>
  );
};

export default ConnectWalletModal;

const MetamaskIcon = () => (
  <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0132 28.596L14.5989 29.807V28.2234L14.9732 27.8509H17.5936V29.7138V31.0178H14.7861L11.3234 29.5275L10.0132 28.596Z"
      fill="#CDBDB2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.9866 28.596L20.4946 29.807V28.2234L20.1203 27.8508H17.5V29.7137V31.0178H20.3075L23.77 29.5274L24.9866 28.596Z"
      fill="#CDBDB2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9735 25.1497L14.5992 28.2234L15.067 27.8509H19.9333L20.4948 28.2234L20.1205 25.1497L19.3718 24.6839L15.6285 24.7771L14.9735 25.1497Z"
      fill="#393939"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.9866 28.5956L20.1203 25.1493L20.4946 28.13V29.8066L23.8636 29.1545L24.9866 28.5956Z"
      fill="#DFCEC3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.62033 15.8352L0 23.38L6.55083 23.0074H10.762V19.7474L10.5748 13.0408L9.639 13.786L2.62033 15.8352Z"
      fill="#F89D35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4464 4.37753L14.6923 9.59375L15.7219 24.7767H19.3715L20.4945 9.59375L22.5533 4.37753H12.4464Z"
      fill="#F89C35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.58014 16.6732L15.254 16.8595L14.4118 20.7717L10.762 19.8402L7.58014 16.6732Z"
      fill="#D87C30"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.58014 16.7664L10.762 19.7471V22.7278L7.58014 16.7664Z"
      fill="#EA8D3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.762 19.8402L14.5053 20.7716L15.722 24.777L14.8796 25.2427L10.762 22.8209V19.8402Z"
      fill="#F89D35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7619 22.8207L10.0132 28.5958L14.9732 25.1495L10.7619 22.8207Z"
      fill="#EB8F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.45679 22.9139L10.7616 22.8207L10.013 28.5958L6.45679 22.9139Z"
      fill="#D87C30"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.05883 31.1108L10.0133 28.5958L6.45717 22.9139L0 23.3796L2.05883 31.1108Z"
      fill="#EB8F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0132 28.5956L14.9732 25.1493L14.5989 28.13V29.8066L11.2299 29.1545L10.0132 28.5956Z"
      fill="#DFCEC3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1952 18.5363L14.2247 20.6787L10.5749 19.7473L13.1952 18.5363Z"
      fill="#393939"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2538 16.8597L15.7218 24.7772L14.318 20.7253L15.2538 16.8597Z"
      fill="#EA8E3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6925 9.59415L10.6685 12.9474L7.58014 16.6733L15.254 16.9528L14.6925 9.59415Z"
      fill="#E8821E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.3795 15.8352L34.9999 23.38L28.449 23.0074H24.2379V19.7474L24.425 13.0408L25.3609 13.786L32.3795 15.8352Z"
      fill="#F89D35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.941 31.1106L24.9865 28.5956L28.5427 22.9137L34.9999 23.3794L32.941 31.1106Z"
      fill="#EB8F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.4199 16.6739L19.7461 16.8602L20.5883 20.7724L24.2381 19.8409L27.4199 16.6739Z"
      fill="#D87C30"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.4199 16.7663L24.2381 19.747V22.7277L27.4199 16.7663Z"
      fill="#EA8D3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.238 19.8402L20.4946 20.7717L19.278 24.7771L20.1203 25.2427L24.238 22.8209V19.8402Z"
      fill="#F89D35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.238 22.8214L24.9866 28.5964L20.1203 25.2432L24.238 22.8214Z"
      fill="#EB8F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.543 22.9146L24.2381 22.8214L24.9868 28.5964L28.543 22.9146Z"
      fill="#D87C30"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7461 16.8595L19.278 24.7771L20.6819 20.7252L19.7461 16.8595Z"
      fill="#EA8E3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8047 18.5364L20.7752 20.6789L24.425 19.7474L21.8047 18.5364Z"
      fill="#393939"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3076 9.59415L24.3316 12.9474L27.4199 16.6733L19.7461 16.9528L20.3076 9.59415Z"
      fill="#E8821E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.0348 0L20.3075 9.59402L22.4598 4.37781L33.0348 0Z"
      fill="#E88F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.0349 0L34.7194 5.12307L33.7835 10.7119L34.4386 11.0845L33.5028 11.9228L34.2514 12.5748L33.222 13.5063L33.8771 14.0651L32.3798 15.9281L25.361 13.7857C21.9296 11.0534 20.2451 9.6562 20.3075 9.59411C20.3699 9.53201 24.6124 6.33397 33.0349 0Z"
      fill="#8E5A30"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.96515 0L14.6925 9.59402L12.5401 4.37781L1.96515 0Z"
      fill="#E88F35"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.96496 0L0.280457 5.12307L1.21629 10.7119L0.561206 11.0845L1.49704 11.9228L0.748373 12.5748L1.77779 13.5063L1.12271 14.0651L2.62004 15.9281L9.63879 13.7857C13.0702 11.0534 14.7547 9.6562 14.6923 9.59411C14.6299 9.53201 10.3875 6.33397 1.96496 0Z"
      fill="#8E5A30"
    />
  </svg>
);

const WalletConnectIcon = () => (
  <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.22445 5.06799C14.5342 -1.1112 24.7622 -1.1112 31.0801 5.06799L31.8393 5.8108C32.1576 6.12098 32.1576 6.61891 31.8393 6.92909L29.2435 9.47587C29.0884 9.63096 28.8272 9.63096 28.6721 9.47587L27.6273 8.45553C23.2276 4.1456 16.0852 4.1456 11.6854 8.45553L10.5672 9.54933C10.4121 9.70442 10.1509 9.70442 9.99576 9.54933L7.39185 7.00256C7.0735 6.69237 7.0735 6.19445 7.39185 5.88426L8.22445 5.06799ZM36.4512 10.3248L38.7613 12.5859C39.0796 12.8961 39.0796 13.394 38.7613 13.7042L28.3374 23.9158C28.0191 24.2259 27.513 24.2259 27.1947 23.9158L19.7911 16.6672C19.7094 16.5938 19.587 16.5938 19.5054 16.6672L12.1099 23.9158C11.7916 24.2259 11.2855 24.2259 10.9671 23.9158L0.535147 13.7123C0.2168 13.4021 0.2168 12.9042 0.535147 12.594L2.8452 10.333C3.16355 10.0228 3.66964 10.0228 3.98799 10.333L11.3916 17.5815C11.4732 17.6549 11.5957 17.6549 11.6773 17.5815L19.0727 10.333C19.3911 10.0228 19.8972 10.0228 20.2155 10.333L27.6191 17.5815C27.7007 17.6549 27.8232 17.6549 27.9048 17.5815L35.3084 10.333C35.6186 10.0146 36.1329 10.0146 36.4512 10.3248Z"
      fill="#3A99FB"
    />
  </svg>
);

const WalletConnectLogoIcon = () => (
  <svg width="246" height="40" viewBox="0 0 246 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M88.6772 21.9085L85.304 34.0383H81.7931L77.0982 16.2773H80.9532L83.7482 29.1368H83.8446L87.1627 16.2773H90.3018L93.62 29.1368H93.7164L96.5251 16.2773H100.38L95.6714 34.0383H92.1605L88.7873 21.9085H88.6772ZM105.502 31.6426C107.058 31.6426 108.352 30.6238 108.352 29.1919V28.2281L105.571 28.3933C104.235 28.4897 103.464 29.0955 103.464 30.0318C103.464 31.0368 104.277 31.6426 105.502 31.6426ZM104.318 34.2448C101.812 34.2448 99.8983 32.6202 99.8983 30.252C99.8983 27.8564 101.743 26.4658 105.034 26.2593L108.352 26.0665V25.1991C108.352 23.9738 107.485 23.2578 106.135 23.2578C104.8 23.2578 103.946 23.9187 103.767 24.8962H100.477C100.614 22.3353 102.79 20.573 106.287 20.573C109.674 20.573 111.877 22.3216 111.877 24.9788V34.0521H108.407V32.0281H108.338C107.595 33.4187 105.97 34.2448 104.318 34.2448ZM114.286 16.2773H117.88V34.0383H114.286V16.2773ZM120.385 16.2773H123.979V34.0383H120.385V16.2773ZM132.322 23.2165C130.753 23.2165 129.61 24.4143 129.486 26.0528H135.09C135.021 24.373 133.919 23.2165 132.322 23.2165ZM135.145 30.0042H138.449C138.05 32.5926 135.696 34.3274 132.432 34.3274C128.371 34.3274 125.934 31.7252 125.934 27.5122C125.934 23.2991 128.398 20.573 132.295 20.573C136.136 20.573 138.559 23.1752 138.559 27.1817V28.2832H129.472V28.5035C129.472 30.3897 130.67 31.6839 132.501 31.6839C133.796 31.6564 134.801 31.0093 135.145 30.0042ZM141.354 17.8056H144.948V20.8484H147.385V23.5607H144.948V29.8665C144.948 30.8716 145.443 31.3535 146.504 31.3535C146.82 31.3535 147.151 31.326 147.371 31.2984V33.9419C146.999 34.0245 146.38 34.0934 145.664 34.0934C142.566 34.0934 141.354 33.0608 141.354 30.4861V23.5607H139.496V20.8484H141.354V17.8056ZM157.504 34.3412C152.341 34.3412 149.106 30.8854 149.106 25.1441C149.106 19.4165 152.369 15.9607 157.504 15.9607C161.772 15.9607 165.022 18.673 165.311 22.6382H161.69C161.346 20.4629 159.666 19.031 157.504 19.031C154.696 19.031 152.892 21.3853 152.892 25.1165C152.892 28.9028 154.682 31.2434 157.518 31.2434C159.721 31.2434 161.304 29.9491 161.704 27.8426H165.325C164.898 31.8354 161.869 34.3412 157.504 34.3412ZM173.351 34.3137C169.359 34.3137 166.812 31.7528 166.812 27.4296C166.812 23.1614 169.4 20.5592 173.351 20.5592C177.303 20.5592 179.891 23.1477 179.891 27.4296C179.891 31.7665 177.344 34.3137 173.351 34.3137ZM173.351 31.5738C175.114 31.5738 176.229 30.0868 176.229 27.4433C176.229 24.8274 175.1 23.3129 173.351 23.3129C171.603 23.3129 170.46 24.8274 170.46 27.4433C170.46 30.0868 171.589 31.5738 173.351 31.5738ZM181.736 34.0383V20.8484H185.206V23.2027H185.275C185.977 21.5643 187.368 20.6006 189.405 20.6006C192.338 20.6006 193.976 22.4455 193.976 25.5296V34.0383H190.383V26.2868C190.383 24.5658 189.57 23.5745 187.96 23.5745C186.349 23.5745 185.33 24.7585 185.33 26.4658V34.0383H181.736ZM196.248 34.0383V20.8484H199.718V23.2027H199.786C200.489 21.5643 201.879 20.6006 203.903 20.6006C206.836 20.6006 208.474 22.4455 208.474 25.5296V34.0383H204.881V26.2868C204.881 24.5658 204.068 23.5745 202.457 23.5745C200.847 23.5745 199.828 24.7585 199.828 26.4658V34.0383H196.248ZM216.694 23.2165C215.124 23.2165 213.981 24.4143 213.857 26.0528H219.461C219.392 24.373 218.291 23.2165 216.694 23.2165ZM219.502 30.0042H222.807C222.408 32.5926 220.053 34.3274 216.79 34.3274C212.728 34.3274 210.292 31.7252 210.292 27.5122C210.292 23.2991 212.756 20.573 216.652 20.573C220.494 20.573 222.917 23.1752 222.917 27.1817V28.2832H213.83V28.5035C213.83 30.3897 215.028 31.6839 216.859 31.6839C218.167 31.6564 219.172 31.0093 219.502 30.0042ZM236.74 25.7499H233.408C233.202 24.3593 232.279 23.3817 230.806 23.3817C229.03 23.3817 227.929 24.8825 227.929 27.4296C227.929 30.0318 229.03 31.505 230.82 31.505C232.266 31.505 233.188 30.6376 233.422 29.2057H236.768C236.589 32.3173 234.262 34.3274 230.792 34.3274C226.813 34.3274 224.294 31.739 224.294 27.4433C224.294 23.2165 226.813 20.573 230.765 20.573C234.317 20.5593 236.589 22.7622 236.74 25.7499ZM239.453 17.8056H243.046V20.8484H245.483V23.5607H243.046V29.8665C243.046 30.8716 243.542 31.3535 244.602 31.3535C244.918 31.3535 245.249 31.326 245.469 31.2984V33.9419C245.097 34.0245 244.492 34.0934 243.762 34.0934C240.664 34.0934 239.453 33.0608 239.453 30.4861V23.5607H237.594V20.8484H239.453V17.8056Z"
      fill="#3999FA"
    />
    <path
      d="M13.3722 7.81688C24.015 -2.60563 41.2666 -2.60563 51.9231 7.81688L53.2036 9.06979C53.7405 9.59298 53.7405 10.4328 53.2036 10.956L48.8253 15.2517C48.5637 15.5133 48.1231 15.5133 47.8615 15.2517L46.0992 13.5307C38.6781 6.26108 26.631 6.26108 19.2099 13.5307L17.3237 15.3756C17.0621 15.6372 16.6215 15.6372 16.3599 15.3756L11.9679 11.0799C11.4309 10.5568 11.4309 9.71689 11.9679 9.1937L13.3722 7.81688ZM60.9826 16.6836L64.879 20.4974C65.416 21.0206 65.416 21.8604 64.879 22.3836L47.297 39.6076C46.7601 40.1308 45.9064 40.1308 45.3695 39.6076L32.8817 27.3815C32.7441 27.2576 32.5375 27.2576 32.3999 27.3815L19.9259 39.6076C19.3889 40.1308 18.5353 40.1308 17.9983 39.6076L0.402612 22.3974C-0.134347 21.8742 -0.134347 21.0343 0.402612 20.5111L4.29901 16.6974C4.83597 16.1742 5.68959 16.1742 6.22655 16.6974L18.7143 28.9235C18.852 29.0474 19.0585 29.0474 19.1962 28.9235L31.6701 16.6974C32.2071 16.1742 33.0607 16.1742 33.5977 16.6974L46.0854 28.9235C46.2231 29.0474 46.4296 29.0474 46.5673 28.9235L59.055 16.6974C59.5782 16.1604 60.4456 16.1604 60.9826 16.6836Z"
      fill="#3A99FB"
    />
  </svg>
);

const BackIcon = () => (
  <svg width="37" height="19" viewBox="0 0 37 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.29892 0.85612L9.15537 0.717525L9.01644 0.860745L0.856445 9.27275L0.721362 9.412L0.856445 9.55126L9.01644 17.9633L9.15287 18.1039L9.29628 17.9704L10.1083 17.2144L10.2576 17.0754L10.1157 16.9289L3.5721 10.172H35.756H35.956V9.972V8.852V8.652H35.756H3.5734L10.1154 1.92342L10.2553 1.77952L10.1109 1.64012L9.29892 0.85612Z"
      fill="white"
      stroke="white"
      strokeWidth="0.4"
    />
  </svg>
);
