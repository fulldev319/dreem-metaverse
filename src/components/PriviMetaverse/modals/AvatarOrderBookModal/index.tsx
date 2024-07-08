import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery, useTheme } from "@material-ui/core";

import { Modal, PrimaryButton, Variant } from "shared/ui-kit";
import Box from "shared/ui-kit/Box";
import cls from "classnames";
import { useModalStyles } from "./index.styles";
import { CustomTable, CustomTableHeaderInfo } from "shared/ui-kit/Table";

const OFFERS_TABLE_HEADER: Array<CustomTableHeaderInfo> = [
  { headerName: "Account" },
  { headerName: "Price", headerAlign: "center" },
  { headerName: "Collateral %", headerAlign: "center" },
  { headerName: "Duration", headerAlign: "center" },
  { headerName: "Expiring in", headerAlign: "center" },
  { headerName: "Polygonscan", headerAlign: "center" },
];

const HISTORY_TABLE_HEADER: Array<CustomTableHeaderInfo> = [
  { headerName: "Account" },
  { headerName: "Price", headerAlign: "center" },
  { headerName: "Period", headerAlign: "center" },
  { headerName: "Collateral %", headerAlign: "center" },
  { headerName: "Polygonscan", headerAlign: "center" },
];

const AvatarOrderBookModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const FILTERS = ["buying", "renting", "blocking"];
  const [selFilter, setSelFilter] = useState("blocking");
  const [isOfferExpanded, setIsOfferExpanded] = React.useState<boolean>(true);
  const [isHistoryExpanded, setIsHistoryExpanded] = React.useState<boolean>(true);

  const classes = useModalStyles({});

  const offersTableData = React.useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(row => [
        {
          cell: (
            <p className={classes.tdAccount}>0xeec9...82f8</p>
          ),
        },
        { cell: <p className={classes.tdPrice}>2450 USDT</p> },
        { cell: <p className={classes.tdCollateral}>20%</p> },
        { cell: <p className={classes.tdDuration}>3 Days</p> },
        { cell: <p className={classes.tdExpire}>2 days 20h 21min</p> },
        { cell: <div className={classes.tdPolygonscan}><PolygonIcon/></div> },
      ]),
    []
  );

  const historyTableData = React.useMemo(
    () =>
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(row => [
        {
          cell: (
            <p className={classes.tdAccount}>0xeec9...82f8</p>
          ),
        },
        { cell: <p className={classes.tdPrice}>2450 USDT</p> },
        { cell: <p className={classes.tdPeriod}>20 DAYS</p> },
        { cell: <p className={classes.tdCollateral}>20%</p> },
        { cell: <div className={classes.tdPolygonscan}><PolygonIcon/></div> },
      ]),
    []
  );

  return (
    <Modal size="medium" isOpen={open} onClose={onClose} showCloseIcon className={classes.root}>
      <Box className={classes.container} height={1}>
        <Box className={classes.fitContent}>
          <Box className={classes.titleContainer} mt={4}>
            <TitleIcon /> Orderbook
          </Box>
          <Box display={"flex"} alignItems={"center"} mt={4}>
            {FILTERS.map(item => (
              <Box
                className={cls({ [classes.selectedFilterItem]: item === selFilter }, classes.filterItem)}
                onClick={() => setSelFilter(item)}
              >
                {item}
              </Box>
            ))}
          </Box>
          <Accordion expanded={isOfferExpanded} onChange={(e, expanded) => setIsOfferExpanded(expanded)}>
            <AccordionSummary
              expandIcon={
                <Box display="flex" alignItems="center" fontSize={14} width={56}>
                  <Box color="white" mr={1} >
                    Hide
                  </Box>
                  {isOfferExpanded ? <ShowIcon /> : <HideIcon />}
                </Box>
              }
              aria-controls="panel-content"
            >
              <Box className={classes.tableTitle}>
                <Box>
                  <OfferIcon /> Blocking offers
                </Box>
                <PrimaryButton onClick={() => { }} size="medium" className={classes.btnOffer} >
                  new blocking offer
                </PrimaryButton>
              </Box>
            </AccordionSummary>
            <AccordionDetails style={{ display: "block" }}>
              <Box className={classes.tableContainer}>
                <CustomTable
                  variant={Variant.Transparent}
                  headers={OFFERS_TABLE_HEADER}
                  rows={offersTableData}
                  placeholderText="No data"
                  sorted={{}}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={isHistoryExpanded} onChange={(e, expanded) => setIsHistoryExpanded(expanded)}>
            <AccordionSummary
              expandIcon={
                <Box display="flex" alignItems="center" fontSize={14} width={56}>
                  <Box color="white" mr={1} >
                    Hide
                  </Box>
                  {isHistoryExpanded ? <ShowIcon /> : <HideIcon />}
                </Box>
              }
              aria-controls="panel-content"
            >
              <Box className={classes.tableTitle}>
                <Box>
                  <HistoryIcon /> Blocking History
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails style={{ display: "block" }}>
              <Box className={classes.tableContainer}>
                <CustomTable
                  variant={Variant.Transparent}
                  headers={HISTORY_TABLE_HEADER}
                  rows={historyTableData}
                  placeholderText="No data"
                  sorted={{}}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Modal>
  );
};

export default AvatarOrderBookModal;

const TitleIcon = () => (
  <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3.11719C12.0883 3.11719 11.214 3.47935 10.5693 4.12401C9.92466 4.76866 9.5625 5.64301 9.5625 6.55469V21.5547C9.5625 22.4664 9.92466 23.3407 10.5693 23.9854C11.214 24.63 12.0883 24.9922 13 24.9922C13.9117 24.9922 14.786 24.63 15.4307 23.9854C16.0753 23.3407 16.4375 22.4664 16.4375 21.5547V6.55469C16.4375 5.64301 16.0753 4.76866 15.4307 4.12401C14.786 3.47935 13.9117 3.11719 13 3.11719Z" fill="white" />
    <path opacity="0.7" d="M21.75 13.1172C20.8383 13.1172 19.964 13.4794 19.3193 14.124C18.6747 14.7687 18.3125 15.643 18.3125 16.5547V21.5547C18.3125 22.4664 18.6747 23.3407 19.3193 23.9854C19.964 24.63 20.8383 24.9922 21.75 24.9922C22.6617 24.9922 23.536 24.63 24.1807 23.9854C24.8253 23.3407 25.1875 22.4664 25.1875 21.5547V16.5547C25.1875 15.643 24.8253 14.7687 24.1807 14.124C23.536 13.4794 22.6617 13.1172 21.75 13.1172Z" fill="white" />
    <path d="M4.25 8.11719C3.33832 8.11719 2.46398 8.47935 1.81932 9.12401C1.17466 9.76866 0.8125 10.643 0.8125 11.5547V21.5547C0.8125 22.4664 1.17466 23.3407 1.81932 23.9854C2.46398 24.63 3.33832 24.9922 4.25 24.9922C5.16168 24.9922 6.03602 24.63 6.68068 23.9854C7.32534 23.3407 7.6875 22.4664 7.6875 21.5547V11.5547C7.6875 10.643 7.32534 9.76866 6.68068 9.12401C6.03602 8.47935 5.16168 8.11719 4.25 8.11719Z" fill="white" />
  </svg>
);

const OfferIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.44909 0.384836C8.89266 0.384836 8.35807 0.606319 7.96568 1.00143L1.45919 7.50373C0.746866 8.21465 0.347656 9.17855 0.347656 10.1848C0.347656 11.1911 0.746866 12.1549 1.45919 12.8659L8.16798 19.5747C8.8789 20.287 9.8428 20.6862 10.8491 20.6862C11.8553 20.6862 12.8192 20.287 13.5301 19.5747L20.0324 13.0682C20.4275 12.6758 20.649 12.1412 20.649 11.5848V3.18477C20.649 2.44238 20.3537 1.7301 19.8287 1.2051C19.3037 0.680095 18.5914 0.384766 17.849 0.384766L9.44909 0.384836ZM18.5491 3.18484V11.5848L12.0468 18.0871C11.3864 18.7475 10.3159 18.7475 9.65559 18.0871L2.94679 11.3825C2.28645 10.7222 2.28645 9.65168 2.94679 8.99134L9.44909 2.48484H17.8491C18.035 2.48484 18.2128 2.55866 18.344 2.68991C18.4753 2.82116 18.5491 2.9989 18.5491 3.18485L18.5491 3.18484Z" fill="#00B4F7" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.2949 0.449222C8.31565 0.449222 4.85232 2.71905 3.18705 6.03586L2.8254 5.38869C2.60651 4.98422 2.17942 4.73796 1.72141 4.75103C1.29075 4.76055 0.896999 4.9961 0.686434 5.37085C0.475866 5.74678 0.478248 6.20479 0.693572 6.57832L2.36859 9.5667C2.68623 10.1401 3.40119 10.359 3.9865 10.0616L6.96535 8.53885C7.26633 8.39966 7.49831 8.14507 7.60777 7.83221C7.71721 7.51816 7.69342 7.17432 7.54352 6.87812C7.39244 6.58309 7.12833 6.36063 6.81072 6.26546C6.49307 6.1691 6.15046 6.20598 5.86138 6.36896L5.76621 6.41654C7.1343 4.29899 9.53743 2.88561 12.2951 2.88561C16.5886 2.88561 20.0325 6.28924 20.0325 10.4993C20.0325 14.675 16.6432 18.0582 12.3999 18.113C12.0763 18.1178 11.7682 18.251 11.5433 18.483C11.3185 18.715 11.1948 19.0267 11.1995 19.3503C11.2055 19.6727 11.3387 19.9808 11.5707 20.2056C11.8027 20.4305 12.1144 20.5542 12.438 20.5494C17.9698 20.478 22.4692 15.9992 22.4692 10.4993C22.4692 4.9544 17.8879 0.449219 12.2955 0.449219L12.2949 0.449222ZM12.3996 4.38947C12.076 4.39423 11.7679 4.52747 11.543 4.75943C11.3182 4.99142 11.1945 5.30311 11.2004 5.6267V10.4995C11.1992 10.8694 11.3681 11.2192 11.6572 11.4512L14.7027 13.8876C15.2274 14.3075 15.9947 14.2219 16.4158 13.6972C16.8357 13.1714 16.7501 12.4041 16.2255 11.9841L13.6368 9.90941V5.62685C13.6416 5.29733 13.5131 4.9785 13.2799 4.74533C13.0467 4.51217 12.7291 4.38368 12.3996 4.38962V4.38947Z" fill="#00B4F7" />
  </svg>
);

export const HideIcon = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4L4 1L1 4" stroke="#77788E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ShowIcon = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L4 4L1 1" stroke="#77788E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PolygonIcon = () => (
  <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.6108 9.11997C24.0167 8.78052 23.2529 8.78052 22.574 9.11997L17.8216 11.9205L14.5967 13.7027L9.92917 16.5032C9.33512 16.8427 8.57134 16.8427 7.89242 16.5032L4.24324 14.2967C3.64918 13.9573 3.22486 13.2783 3.22486 12.5146V8.27133C3.22486 7.59241 3.56432 6.91349 4.24324 6.48917L7.89242 4.36755C8.48647 4.02809 9.25026 4.02809 9.92917 4.36755L13.5784 6.57403C14.1724 6.91349 14.5967 7.59241 14.5967 8.35619V11.1567L17.8216 9.2897V6.4043C17.8216 5.72538 17.4821 5.04647 16.8032 4.62214L10.014 0.6335C9.41999 0.294042 8.6562 0.294042 7.97728 0.6335L1.01838 4.70701C0.339459 5.04647 0 5.72538 0 6.4043V14.3816C0 15.0605 0.339459 15.7394 1.01838 16.1637L7.89242 20.1524C8.48647 20.4918 9.25026 20.4918 9.92917 20.1524L14.5967 17.4367L17.8216 15.5697L22.4892 12.854C23.0832 12.5146 23.847 12.5146 24.5259 12.854L28.1751 14.9756C28.7691 15.3151 29.1935 15.994 29.1935 16.7578V21.001C29.1935 21.68 28.854 22.3589 28.1751 22.7832L24.6108 24.9048C24.0167 25.2443 23.2529 25.2443 22.574 24.9048L18.9248 22.7832C18.3308 22.4437 17.9065 21.7648 17.9065 21.001V18.2854L14.6816 20.1524V22.9529C14.6816 23.6318 15.0211 24.3108 15.7 24.7351L22.574 28.7237C23.1681 29.0632 23.9319 29.0632 24.6108 28.7237L31.4848 24.7351C32.0789 24.3956 32.5032 23.7167 32.5032 22.9529V14.8908C32.5032 14.2119 32.1637 13.5329 31.4848 13.1086L24.6108 9.11997Z" fill="#8247E5" />
  </svg>
);