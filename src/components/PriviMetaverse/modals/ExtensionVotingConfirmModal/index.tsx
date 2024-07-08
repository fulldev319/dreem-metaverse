import React from "react";

import { Modal, PrimaryButton } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import { useModalStyles } from "./index.styles";

const ExtensionVotingConfirmModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const classes = useModalStyles();

  return (
    <>
      <Modal size="small" isOpen={open} onClose={onClose} className={classes.root}>
        <Box className={classes.close} onClick={onClose}>
          <CloseIcon />
        </Box>
        <Box className={classes.title}>Vote for Extension</Box>
        <Box className={classes.desc}>
          <div>Vote to add the Extension to </div>
          <Box className={classes.descRealName}>[realm name]</Box>
        </Box>
        <Box className={classes.quorumCtn}>
          <Box display="flex" alignItems="center" width="100%">
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
        </Box>
        <Box flex="1" display="flex" alignItems="center" style={{ marginTop: 40 }}>
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
        <Box display="flex" flexDirection="column" alignItems="center" style={{ marginTop: 58 }}>
          <PrimaryButton
            size="medium"
            className={classes.button}
            style={{
              minWidth: 250,
              paddingTop: 6,
              marginLeft: 8,
              marginBottom: 16,
            }}
            onClick={onClose}
          >
            save vote
          </PrimaryButton>
        </Box>
      </Modal>
    </>
  );
};

const CloseIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5414 2.4585L2.45801 20.5418M2.45803 2.4585L20.5414 20.5418"
      stroke="white"
      stroke-width="3"
      stroke-linecap="square"
    />
  </svg>
);

export default ExtensionVotingConfirmModal;
