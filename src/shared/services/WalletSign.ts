import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import Web3 from "web3";
import axios from "axios";
import React from "react";
import { METAVERSE_URL } from "shared/functions/getURL";

export async function signWithMetamask(address: string, web3: Web3, domain: string): Promise<any> {
  const res = await axios.post(`${METAVERSE_URL()}/auth/requestSignInUsingRandomNonce/`, {
    address,
  });
  const nonce = res.data.nonce;

  const msg = 'address: '+address + '\nnonce: ' + nonce;
  let params = [msg, address];
  let method = "personal_sign";
  const provider = web3.currentProvider;


  return new Promise<any>((resolve, reject) => {
    (provider as any).sendAsync(
      {
        method,
        params,
        from: address,
      },
      function (err, result) {
        console.log("err", err);
        if (err) reject("error occurred");
        if (result.error) reject("error occurred");
        resolve(result.result);
      }
    );
  });
}

export const useSolanaWalletSign = () => {
  const { publicKey, signMessage } = useWallet();

  const signLoginMessage = React.useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) throw new Error("Wallet not connected!");
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage) throw new Error("Wallet does not support message signing!");

      const res = await axios.post(`${METAVERSE_URL()}/auth/requestSignInUsingRandomNonce/`, {
        address: publicKey.toString(),
      });
      const nonce = res.data.nonce;

      // Encode anything as bytes
      const message = new TextEncoder().encode(`Welcome to the Dreem app. Please sign this message confirming that you're signing to the Dreem app. Nonce is ${nonce}`);
      // Sign the bytes using the wallet
      const signature = await signMessage(message);
      // Verify that the bytes were signed using the private key that matches the known public key
      // if (!sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');

      console.log(`Message signature: ${bs58.encode(signature)}`);

      return {
        signature: bs58.encode(signature),
        publicKey: publicKey.toString()
      };
    } catch (error: any) {
      throw new Error(`Signing failed: ${error?.message}`);
    }
  }, [publicKey, signMessage]);

  return signLoginMessage;
};
