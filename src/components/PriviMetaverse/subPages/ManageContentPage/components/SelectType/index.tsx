import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import * as MetaverseAPI from "shared/services/API/MetaverseAPI";
import { useAlertMessage } from "shared/hooks/useAlertMessage";
import Box from "shared/ui-kit/Box";
import { useModalStyles } from "./index.styles";
import CreateAssetModel from "shared/model/CreateAssetModel";

const SelectType = ({ handleNext }: { handleNext: (asset: CreateAssetModel) => void }) => {
  const classes = useModalStyles({});
  const { showAlertMessage } = useAlertMessage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [assetTypes, setAssetTypes] = useState<CreateAssetModel[]>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    getAssetTypes();
  }, []);

  const getAssetTypes = async () => {
    const res = await MetaverseAPI.getAssetTypes();
    if (res && res.success) {
      // TODO - iterate over this
      let assets: CreateAssetModel[] = CreateAssetModel.constructArray(res.data.assets);
      setAssetTypes(assets);
      setTitle(res.data.title?.value);
    } else {
      showAlertMessage(`Server is down. Please wait...`, { variant: "error" });
    }
  };

  return (
    <Box className={classes.container}>
      <h3 className={classes.title}>{title ? `${title} (log on desktop launcher)` : ""}</h3>
      <div className={classes.content}>
        <Grid container spacing={2}>
          {assetTypes?.map((el, index) => (
            // el.interactable &&
            <Grid md={4} sm={6} xs={12}>
              <Box
                className={`maskWrapper ${el.interactable === true ? "" : "disabled"}`}
                key={`trending-pod-${index}`}
                onClick={() => {
                  el.interactable && handleNext(el);
                }}
              >
                <div className={classes.mask}>
                  <div className={classes.cardTitle}>{el.name?.value}</div>
                  <div className={classes.imageBox}>
                    <img src={el.icon} alt="" />
                  </div>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default SelectType;
