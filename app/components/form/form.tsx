"use client";

import style from "./form.module.css";
import { useState } from "react";
import { storage } from "../../firebase/firebase";
import {
  ref,
  uploadBytes,
  getStorage,
  getDownloadURL,
  StorageReference,
} from "firebase/storage";
import { handlePutRequestAddMeme } from "../../../lib/addMeme";

export default function Form() {
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [isMemeSent, setMemeSent] = useState(false);

  const uploadImage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (imageUpload === null) {
      console.log("No image selected");
      return;
    }

    const imageRef = ref(storage, imageUpload.name);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      setImageUpload(imageUpload);
      console.log("Uploaded a blob or file!");

      getURL(imageRef);

      async function getURL(imageRef: StorageReference) {
        if (imageUpload === null) {
          return;
        }
        const title = imageUpload.name;
        try {
          const url = await getDownloadURL(imageRef);
          handleUpdateDB(url, title);
        } catch (error) {
          console.log(error);
        }
      }

      async function handleUpdateDB(url: string, title: string) {
        try {
          await handlePutRequestAddMeme({ title, url });
        } catch (error) {
          console.error(error);
        }
      }
      setMemeSent(true); // Move the setMemeSent inside the promise callback
    });
  };

  return (
    <div>
      <form onSubmit={uploadImage} className={style.form_container}>
        <div>
          <label htmlFor="file">Upload</label>
          <input
            type="file"
            id="memeFile"
            name="memeFile"
            onChange={(event) => {
              setImageUpload(event.target.files![0]);
            }}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {isMemeSent && <div>Your meme was sent! Check All Memes section!</div>}
    </div>
  );
}
