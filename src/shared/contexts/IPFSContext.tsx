import React, { createContext, useEffect, useContext, useMemo, useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { saveAs } from "file-saver";
import { encryptFile, decryptContent, getBlob } from "shared/utils-IPFS/crypto";
import TimeLogger from "shared/utils-IPFS/TimeLogger";
import { sizeToString } from "shared/utils-IPFS/functions";
import getIPFSURL from "shared/functions/getIPFSURL";
import FileUploadingModal from "components/PriviMetaverse/modals/FileUploadingModal";
import { promiseTimeout } from "shared/helpers";
import axios from "axios";

export type IPFSContextProps = {
  ipfs: any;
  setMultiAddr: (string) => void;
  isConnected: boolean;
  progress: number;
  getFiles: (fileCID: string) => void;
  uploadWithFileName: (file: any, showModal?: boolean) => void;
  upload: (file: any, showModal?: boolean) => void;
  uploadWithEncryption: (file: any) => void;
  uploadWithNonEncryption: (file: any, showModal?: boolean) => void;
  downloadWithDecryption: (
    fileCID: string,
    fileName: string,
    isEncrypted: boolean,
    keyData: any,
    download: boolean
  ) => void;
  downloadWithNonDecryption: (fileCID: string, fileName: string, download: boolean) => void;
};

export const IPFSContext = createContext<IPFSContextProps | null>(null);

export const IPFSContextProvider = ({ children }) => {
  const [ipfs, setIpfs] = useState<any>({});
  const [isConnected, setConnected] = useState(false);
  const [multiAddr, setMultiAddr] = useState<any>(getIPFSURL());

  const [showUploadingModal, setShowUploadingModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isUpload, setIsUpload] = useState(true);

  useEffect(() => {
    if (!multiAddr) return;
    if (multiAddr && ipfsHttpClient(multiAddr)) {
      setIpfs(ipfsHttpClient(multiAddr));
    }
    setConnected(true);
  }, [multiAddr]);

  const getFiles = async fileCID => {
    if (ipfs && ipfs.ls && Object.keys(ipfs).length !== 0) {
      const files: any[] = [];
      for await (let file of ipfs.ls(fileCID)) {
        files.push(file);
      }
      return files;
    } else {
      return [];
    }
  };

  const uploadWithFileName = async (file, showModal = true) => {
    console.log("------ file3", file, ipfs);
    if (file) {
      setIsUpload(true);
      setShowUploadingModal(showModal);

      if (file.creator_address || file.creatorId) {
        // It's an object, not a file.
        let objectString = JSON.stringify(file);

        try {
          // const token = localStorage.getItem("token");
          // const config = {
          //   headers: token ? { Authorization: `Bearer ${token}` } : {},
          // };
          const added = await ipfs.add(objectString);
          console.log("The File is Uploaded Successfully to IPFS");
          setProgress(100);
          await promiseTimeout(500);
          setShowUploadingModal(false);
          setProgress(0);

          return added;
        } catch (err) {
          setShowUploadingModal(false);
          setProgress(0);

          console.error(err);
        }
      } else {
        const fileDetails = {
          path: file && file.name ? file.name : "",
          content: file,
        };

        console.log("File size to Upload", sizeToString(file.size));
        const options = {
          wrapWithDirectory: true,
          progress: prog => {
            const value = ((100.0 * prog) / file.size).toFixed(0);
            setProgress(+value);
            console.log(`IPFS Upload: ${value}%`);
          },
        };

        try {
          const added = await ipfs.add(fileDetails, options);
          console.log("The File is Uploaded Successfully to IPFS");
          setShowUploadingModal(false);
          setProgress(0);
          return added;
        } catch (err) {
          setShowUploadingModal(false);
          setProgress(0);
          console.error(err);
        }
      }
    }
  };

  const uploadWithEncryption = async file => {
    TimeLogger.start("Encryption");
    const response = await encryptFile(file);
    if (!response) return {};
    const { resultBytes: encryptedBytes, keyData } = response;
    TimeLogger.end("Encryption");
    const newFile = new File([encryptedBytes], file.name + ".enc");
    let added = await uploadFile(newFile);
    return { added, newFile, keyData };
  };

  const uploadWithNonEncryption = async (file, showModal = true) => {
    let added = await uploadFile(file, showModal);
    return { added };
  };

  const uploadFile = async (file, showModal = true) => {
    return new Promise(async (resolve, reject) => {
      TimeLogger.start("Upload2IPFS");
      console.log("------ file2", file);
      const added = await uploadWithFileName(file, showModal);
      TimeLogger.end("Upload2IPFS");
      resolve(added);
    });
  };

  const downloadWithDecryption = async (fileCID, fileName, isEncrypted = false, keyData, download) => {
    const file = `https://elb.ipfsprivi.com:8080/ipfs/${fileCID}/${fileName}.enc`;

    const response = await axios.get(file, {
      responseType: "arraybuffer",
      transformRequest: (data, headers) => {
        delete headers.common["Authorization"];
        return data;
      },
    });
    const buffer = Buffer.from(response.data, "utf-8");

    let content = buffer;

    if (isEncrypted) {
      TimeLogger.start("Decryption");
      content = await decryptContent(content, keyData);
      TimeLogger.end("Decryption");
      fileName = fileName?.replace(".enc", "");
    }
    const blob = getBlob(content);

    if (download) {
      saveAs(blob, fileName);
    } else {
      return { blob, content };
    }

    /*const files = await getFiles(fileCID);
    for await (const file of files) {
      TimeLogger.start("DownloadFromIPFS");
      const ipfsPath = `/ipfs/${file.path}`;
      const chunks = [];
      for await (const chunk of ipfs.cat(ipfsPath)) {
        chunks.push(Buffer.from(chunk));
      }
      let content = Buffer.concat(chunks);
      let fileName = file.name;
      TimeLogger.end("DownloadFromIPFS");

      if (isEncrypted) {
        TimeLogger.start("Decryption");
        content = await decryptContent(content, keyData);

        TimeLogger.end("Decryption");
        fileName = fileName.replace(".enc", "");
      }
      const blob = getBlob(content);
      if (download) {
        saveAs(blob, fileName);
      } else {
        return { blob, content };
      }
    }*/
  };

  const downloadWithNonDecryption = async (fileCID, fileName, download) => {
    const file = `https://elb.ipfsprivi.com:8080/ipfs/${fileCID}/${fileName}`;

    const response = await axios.get(file, {
      responseType: "arraybuffer",
      transformRequest: (data, headers) => {
        delete headers.common["Authorization"];

        return data;
      },
    });
    const buffer = Buffer.from(response.data, "utf-8");

    const blob = getBlob(buffer);

    if (download) {
      saveAs(blob, fileName);
    } else {
      return { blob, buffer };
    }

    /*const files = await getFiles(fileCID);
    for await (const file of files) {
      TimeLogger.start("DownloadFromIPFS");
      const ipfsPath = `/ipfs/${file.path}`;
      const chunks = [];
      for await (const chunk of ipfs.cat(ipfsPath)) {
        chunks.push(Buffer.from(chunk));
      }
      let content = Buffer.concat(chunks);
      let fileName = file.name;
      TimeLogger.end("DownloadFromIPFS");
      const blob = getBlob(content);

      if (download) {
        saveAs(blob, fileName);
        return { blob, fileName, content };
      } else {
        return { blob, fileName, content };
      }
    }*/
  };

  const upload = async (file, showModal = true) => {
    try {
      setIsUpload(true);
      setShowUploadingModal(showModal);
      const added = await ipfs.add(file, {
        progress: prog => {
          const value = ((100.0 * prog) / file.size).toFixed(0);
          setProgress(+value);
          console.log(`IPFS Upload: ${value}%`);
        },
        pin: false,
      });
      console.log("IPFS Upload: 100%");
      setShowUploadingModal(false);
      setProgress(0);
      return added;
    } catch (err) {
      console.error(err);
      setShowUploadingModal(false);
      setProgress(0);
    }
  };

  const context = {
    ipfs,
    setMultiAddr,
    isConnected,
    progress,
    getFiles,
    uploadWithFileName,
    upload,
    uploadWithEncryption,
    uploadWithNonEncryption,
    downloadWithDecryption,
    downloadWithNonDecryption,
  };

  return (
    <IPFSContext.Provider value={context}>
      {children}
      {showUploadingModal && (
        <FileUploadingModal open={showUploadingModal} progress={progress} isUpload={isUpload} />
      )}
    </IPFSContext.Provider>
  );
};

export const useContextIPFS = () => {
  const context = useContext(IPFSContext);
  if (!context) {
    throw new Error("useContextIPFS hook must be used inside IPFSContextProvider");
  }

  return context;
};
