"use client";
import style from "./form.module.css";
import { useState } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";

export default function Form() {
  const [imageUpload, setImageUpload] = useState([]);
  const uploadImage = () => {
    event.preventDefault();
    if (imageUpload === null) {
      console.log("No image selected");
      return;
    }

    const imageRef = ref(storage, imageUpload.name);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <form onSubmit={uploadImage} className={style.form_container}>
      <div>
        <label htmlFor="file">Upload</label>
        <input
          type="file"
          id="memeFile"
          name="memeFile"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}
