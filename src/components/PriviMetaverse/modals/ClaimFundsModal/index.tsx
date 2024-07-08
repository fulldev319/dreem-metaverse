import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "@material-ui/core";
import Box from "shared/ui-kit/Box";
import { Modal } from "shared/ui-kit";
import { useAlertMessage } from "shared/hooks/useAlertMessage";
import { useModalStyles } from "./index.styles";

require("dotenv").config();
const isProd = process.env.REACT_APP_ENV === "prod";

export default function ClaimFundsModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const classes = useModalStyles();
  const { showAlertMessage } = useAlertMessage();

  return (
    <Modal showCloseIcon isOpen={open} onClose={onClose} className={classes.root} size="small">
      <Box className={classes.title} mt={4}>
        Claim Deposit
      </Box>
      <Box className={classes.header1} mt={0.5}>
        Confirm claiming your deposit to receive funds back to your wallet.
      </Box>
      <Box display={"flex"} justifyContent="center" alignItems={"center"} mt={6}>
        <PolygonIcon />
        <div className={classes.typo1} style={{marginLeft: 18}}> 6 MATIC </div>
      </Box>
      <Box display={"flex"} justifyContent="center" mt={6} mb={4}>
        <Button
          className={classes.activeButton}
          style={{marginRight: 16}}
          onClick={() => {}}
        >
          Approve
        </Button>
        <Button
          className={classes.disabledButton}
          onClick={() => {}}
        >
          Claim
        </Button>
      </Box>
    </Modal>
  );
}

const PolygonIcon = () => (
  <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.5001 13.4823C31.1063 13.2622 30.6627 13.1467 30.2116 13.1467C29.7605 13.1467 29.3169 13.2622 28.9232 13.4823L23.011 16.9114L18.994 19.1478L13.0822 22.5768C12.6884 22.7967 12.2449 22.9122 11.7938 22.9122C11.3427 22.9122 10.8992 22.7967 10.5053 22.5768L5.80593 19.8932C5.42357 19.6739 5.10421 19.3598 4.87866 18.9811C4.65312 18.6025 4.52901 18.172 4.51832 17.7314V12.4387C4.51303 11.9947 4.63047 11.5579 4.85767 11.1764C5.08488 10.7949 5.41303 10.4836 5.80593 10.2768L10.4294 7.66775C10.8233 7.44786 11.2668 7.33242 11.7179 7.33242C12.169 7.33242 12.6125 7.44786 13.0063 7.66775L17.6299 10.2768C18.0122 10.4961 18.3316 10.8102 18.5571 11.1889C18.7827 11.5676 18.9068 11.998 18.9175 12.4387V15.8678L22.9344 13.5568V10.1277C22.9397 9.68378 22.8223 9.24697 22.5951 8.8655C22.3679 8.48404 22.0397 8.17274 21.6468 7.96593L13.0822 3.04627C12.6884 2.82638 12.2449 2.71094 11.7938 2.71094C11.3427 2.71094 10.8992 2.82638 10.5053 3.04627L1.78793 7.96627C1.39508 8.17305 1.06696 8.4843 0.83976 8.8657C0.612558 9.2471 0.495095 9.68384 0.500324 10.1277V20.0423C0.495032 20.4863 0.612465 20.9231 0.839671 21.3045C1.06688 21.686 1.39503 21.9973 1.78793 22.2041L10.5043 27.1241C10.8982 27.344 11.3417 27.4594 11.7928 27.4594C12.2438 27.4594 12.6874 27.344 13.0812 27.1241L18.993 23.7696L23.01 21.4587L28.9221 18.1041C29.3159 17.884 29.7595 17.7685 30.2106 17.7685C30.6617 17.7685 31.1053 17.884 31.499 18.1041L36.1225 20.7132C36.5049 20.9325 36.8242 21.2466 37.0498 21.6253C37.2753 22.004 37.3994 22.4344 37.4102 22.875V28.1678C37.4154 28.6117 37.298 29.0485 37.0708 29.43C36.8436 29.8115 36.5154 30.1228 36.1225 30.3296L31.499 33.0132C31.1052 33.2331 30.6616 33.3485 30.2106 33.3485C29.7595 33.3485 29.316 33.2331 28.9221 33.0132L24.2986 30.4041C23.9163 30.1848 23.5969 29.8707 23.3714 29.492C23.1459 29.1133 23.0217 28.6829 23.011 28.2423V24.8129L18.994 27.1238V30.5529C18.9887 30.9968 19.1062 31.4336 19.3334 31.8151C19.5606 32.1966 19.8887 32.5079 20.2816 32.7147L28.998 37.6347C29.3919 37.8546 29.8354 37.97 30.2865 37.97C30.7375 37.97 31.1811 37.8546 31.5749 37.6347L40.2913 32.7147C40.6737 32.4954 40.993 32.1813 41.2186 31.8026C41.4441 31.4239 41.5682 30.9935 41.5789 30.5529V20.6387C41.5842 20.1947 41.4668 19.7579 41.2396 19.3764C41.0124 18.9949 40.6842 18.6836 40.2913 18.4768L31.5001 13.4823Z" fill="#8247E5"/>
  </svg>
);
