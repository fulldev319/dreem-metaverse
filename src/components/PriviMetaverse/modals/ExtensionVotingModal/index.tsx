import React from "react";
import ReactPlayer from "react-player";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { getDefaultAvatar } from "shared/services/user/getUserAvatar";
import { Modal, PrimaryButton } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import Avatar from "shared/ui-kit/Avatar";
import AddressView from "shared/ui-kit/AddressView";
import { CloseIcon, ShareIcon } from "shared/ui-kit/Icons";
import ExtensionVotingConfirmModal from "components/PriviMetaverse/modals/ExtensionVotingConfirmModal";
import { useModalStyles } from "./index.styles";

const ExtensionVotingModal = ({ open, onClose }: { open: boolean; onClose: (e) => void }) => {
  const theme = useTheme();

  const classes = useModalStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [openExtensionDraftVoteConfirmModal, setOpenExtensionDraftVoteConfirmModal] =
    React.useState<boolean>(false);
  const [onProgressVideoItem, setOnProgressVideoItem] = React.useState<any>({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  });
  const [onDurationVideoItem, setOnDurationVideoItem] = React.useState<number>(1);

  const playerVideoItem: any = React.useRef();

  const handleShareDraft = () => {};

  return (
    <>
      <Modal size="medium" isOpen={open} onClose={onClose} className={classes.root}>
        <Box className={classes.close} onClick={onClose}>
          <CloseIcon />
        </Box>
        <Box display="flex" height={1}>
          <div className={classes.nftInfoSection}>
            <Box display="flex" flexDirection="column">
              <div className={classes.viewLabel}>draft of EXTENSION - VOTING</div>
              <Box className={classes.nftContent}>
                <Box className={classes.creatorinfoSection} justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Avatar size={42} rounded image={getDefaultAvatar()} />
                    <Box display="flex" flexDirection="column" ml={1}>
                      <Box className={classes.typo1}>PROPOSER</Box>
                      <AddressView className={classes.typo4} address={"0xcsdw20x...0xcsdw2"} />
                    </Box>
                  </Box>
                  <Box
                    className={classes.shareButton}
                    display="flex"
                    alignItems="center"
                    style={{ cursor: "pointer" }}
                    onClick={handleShareDraft}
                    ml={4}
                  >
                    <ShareIcon />
                  </Box>
                </Box>
                {isMobile && (
                  <Box className={classes.nftPreviewSection}>
                    <ReactPlayer
                      url={
                        "https://elb.ipfsprivi.com:8080/ipfs/QmfVYqwQnByKN67u2vQaACHjcQHnAm2xM6RMSPnCt5X327"
                      }
                      ref={playerVideoItem}
                      controls
                      progressInterval={200}
                      loop={true}
                      playing={isPlaying}
                      onProgress={progress => {
                        setOnProgressVideoItem(progress);
                      }}
                      onDuration={duration => {
                        setOnDurationVideoItem(duration);
                      }}
                      onEnded={() => {
                        setIsPlaying(false);
                      }}
                    />
                  </Box>
                )}
                <Box className={classes.typo2} mt={5.625}>
                  Sexy name thats longerthan one line
                </Box>
                <Box className={classes.typo5} mt={5.625}>
                  Description
                </Box>
                <Box className={classes.typo3} mt={1.25} mb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo pellentesque
                  porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </Box>
                <Box display="flex" alignItems="center" pb={3}>
                  <Box flex="0.45" borderRight="2px solid rgba(255,255,255,0.5)">
                    <div className={classes.quorumName}>Quorum Required</div>
                    <div className={classes.quorumValue}>60%</div>
                  </Box>
                  <Box flex="0.1" />
                  <Box flex="0.45">
                    <div className={classes.quorumName}>Quorum Reached</div>
                    <div className={classes.quorumValue}>44%</div>
                  </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="center">
                  <div className={classes.progressBox}>
                    <Box className={classes.doneBar} style={{ background: "#E9FF26" }} width={0.4} />
                    <div className={classes.barLabel}>Accept</div>
                  </div>
                  <Box className={classes.barValue} ml={2}>
                    40%
                  </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="center" style={{ marginTop: 12 }}>
                  <div className={classes.progressBox}>
                    <Box className={classes.doneBar} style={{ background: "#F64484" }} width={0.15} />
                    <div className={classes.barLabel} style={{ color: "#FFFFFF" }}>
                      Reject
                    </div>
                  </div>
                  <Box className={classes.barValue} ml={2}>
                    15%
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <PrimaryButton
                size="medium"
                className={classes.button}
                style={{
                  minWidth: 250,
                  paddingTop: 6,
                  marginLeft: 8,
                  marginBottom: 16,
                }}
                onClick={() => setOpenExtensionDraftVoteConfirmModal(true)}
              >
                vote
              </PrimaryButton>
            </Box>
          </div>

          {!isMobile && (
            <Box className={classes.nftPreviewSection}>
              <ReactPlayer
                url={"https://elb.ipfsprivi.com:8080/ipfs/QmfVYqwQnByKN67u2vQaACHjcQHnAm2xM6RMSPnCt5X327"}
                ref={playerVideoItem}
                controls
                progressInterval={200}
                loop={true}
                playing={isPlaying}
                onProgress={progress => {
                  setOnProgressVideoItem(progress);
                }}
                onDuration={duration => {
                  setOnDurationVideoItem(duration);
                }}
                onEnded={() => {
                  setIsPlaying(false);
                }}
              />
            </Box>
          )}
          {openExtensionDraftVoteConfirmModal && (
            <ExtensionVotingConfirmModal
              open={openExtensionDraftVoteConfirmModal}
              onClose={() => setOpenExtensionDraftVoteConfirmModal(false)}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ExtensionVotingModal;
