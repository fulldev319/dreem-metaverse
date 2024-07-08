import React, { useState } from "react";
import cls from "classnames";

import Box from "shared/ui-kit/Box";
import { getDefaultBGImage } from "shared/services/user/getUserAvatar";
import { PrimaryButton } from "shared/ui-kit";
import ExtensionVotingModal from "components/PriviMetaverse/modals/ExtensionVotingModal";
import ExecuteVoteModal from "components/PriviMetaverse/modals/ExecuteVoteModal";
import ClaimFundsModal from "components/PriviMetaverse/modals/ClaimFundsModal";
import { useStyles } from "./index.styles";
import { VOTING_STATES } from "../../index";
import { Skeleton } from "@material-ui/lab";

export default function VotingItem(props) {
  const classes = useStyles(props);
  const { item, isLoading } = props;

  const [openExtensionDraftVoteModal, setOpenExtensionDraftVoteModal] = useState(false);
  const [openExecuteVoteModal, setOpenExecuteVoteModal] = useState(false);
  const [openClaimFundsModal, setOpenClaimFundsModal] = useState(false);

  const handleOpenExtensionDraftVoteModal = () => {
    if (item.state === VOTING_STATES.ACTIVE) {
      setOpenExtensionDraftVoteModal(true);
    }
  }

  return (
    <>
      {props.isLoading ? (
        <Box className={classes.skeleton}>
          <Skeleton variant="rect" width="100%" height={226} />
          <Box my={2}>
            <Skeleton variant="rect" width={"100%"} height={24} />
          </Box>
          <Skeleton variant="rect" width={"80%"} height={24} />
        </Box>
      ) : (
        <Box
          className={classes.root}
          onClick={handleOpenExtensionDraftVoteModal}
        >
          <img src={item.worldImage ? item.worldImage : getDefaultBGImage()} alt="voting item image" width={200} height={200} />
          <Box display={"flex"} flexDirection="column" mx={2}>
            <Box
              className={cls(classes.tag,
                { [classes.activeVotingTag]: item.state === VOTING_STATES.ACTIVE },
                { [classes.validatedVotingTag]: item.state === VOTING_STATES.VALIDATED },
                { [classes.rejectedVotingTag]: item.state === VOTING_STATES.REJECTED }
              )}
            >
              {item.state}
            </Box>
            <Box className={classes.typo1} mt={3}>
              {item.name}
            </Box>
            <Box height={"1px"} bgcolor={"rgba(131, 131, 131, 0.26)"} my={2.5} />
            <Box display={"flex"} alignItems={"center"}>
              <TimerIcon />
              <Box className={classes.typo2} ml={1} mr={0.5} color={"#ffffff77"}>
                Time left
              </Box>
              <Box className={classes.typo2}>2 days 18h 34m</Box>
            </Box>
            <Box display={"flex"} alignItems={"center"} mt={3}>
              <Box display={"flex"} alignItems={"center"}>
                <Box bgcolor={"rgba(255, 255, 255, 0.3)"} height={4} width={147} borderRadius={"1px"} />
                <Box className={classes.typo3} ml={2}>
                  2455 TKN
                </Box>
              </Box>
              <Box height={"34px"} width={"1px"} bgcolor={"rgba(131, 131, 131, 0.26)"} mx={2.5} />
              <Box display={"flex"} alignItems={"center"}>
                <Box bgcolor={"rgba(255, 255, 255, 0.3)"} height={4} width={147} borderRadius={"1px"} />
                <Box className={classes.typo3} ml={2}>
                  456 TKN
                </Box>
              </Box>
            </Box>
          </Box>
          {[VOTING_STATES.VALIDATED, VOTING_STATES.REJECTED].includes(item.state) && (
            <PrimaryButton
              onClick={() => {
                if (item.state === VOTING_STATES.VALIDATED) {
                  setOpenExecuteVoteModal(true);
                } else if (item.state === VOTING_STATES.REJECTED) {
                  setOpenClaimFundsModal(true);
                }
              }}
              size="medium"
              style={{
                background: item.state === VOTING_STATES.VALIDATED ? "#00B4F7" : "#FF6868",
                borderRadius: "100px",
                color: "#fff",
                width: "157px",
                height: "48px",
                paddingTop: "4px",
              }}
            >
              {item.state === VOTING_STATES.VALIDATED ? `Execute` : `Claim`}
            </PrimaryButton>
          )}

          {openExtensionDraftVoteModal && (
            <ExtensionVotingModal
              open={openExtensionDraftVoteModal}
              onClose={() => setOpenExtensionDraftVoteModal(false)}
            />
          )}
          {openExecuteVoteModal && (
            <ExecuteVoteModal
              open={openExecuteVoteModal}
              onClose={() => setOpenExecuteVoteModal(false)}
            />
          )}
          {openClaimFundsModal && (
            <ClaimFundsModal
              open={openClaimFundsModal}
              onClose={() => setOpenClaimFundsModal(false)}
            />
          )}
        </Box>)
      }
    </>
  );
}

const TimerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.1835 7.09173C14.1835 11.0084 11.0084 14.1835 7.09173 14.1835C3.17508 14.1835 0 11.0084 0 7.09173C0 3.17508 3.17508 0 7.09173 0C11.0084 0 14.1835 3.17508 14.1835 7.09173Z"
      fill="#00B4F7"
    />
    <path
      d="M6.6748 3.33594V6.98609L9.17777 9.17619"
      stroke="#151515"
      stroke-width="2.06786"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
  </svg>
);
