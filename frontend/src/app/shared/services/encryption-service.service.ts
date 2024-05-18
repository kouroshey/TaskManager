import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'; // Import CryptoJS library

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt(data: string, publicKey: string): string {
    const importedPublicKey = CryptoJS.enc.Base64.parse(publicKey);

    const encryptedData = CryptoJS.publicEncrypt(importedPublicKey, data);

    const base64EncryptedData = CryptoJS.enc.Base64.stringify(encryptedData.ciphertext);
    return base64EncryptedData;
  }
}
