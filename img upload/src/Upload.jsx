import React, { useState } from "react";
// import axios from "axios";
import Dropzone, { useDropzone } from "react-dropzone";

function Upload() {
  //   const [inputImage, setInputImage] = useState(null);
  //   const { getRootProps, getInputProps, open } = useDropzone();
  //   const [outputImage, setOutputImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  const handleImageUpload = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };
  //   const handleImageUpload = (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     setInputImage(URL.createObjectURL(file));
  //   };

  // Preprocess the image if needed
  // const preprocessedImage = preprocessImage(file);

  // Send the image to your ML model's API
  //     axios
  //       .post("/api/process-image", file)
  //       .then((response) => {
  //         setOutputImage(response.data.outputImage);
  //       })
  //       .catch((error) => {
  //         console.error("Error processing image:", error);
  //       });
  //   };

  return (
    <div>
      <h1>Image Processing App</h1>
      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="uploadBtn">
              Drag and drop image(s) here, or click to select image(s)
            </p>
          </div>
        )}
      </Dropzone>
      <div className="allImgContainer">
        {files.map((file) => (
          <div key={file.name}>
            <img
              src={URL.createObjectURL(file)}
              alt=""
              // onClick={() => setIsOpened((prev) => !prev)}
              // className={isOpened ? "bigImg" : "smallImg"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upload;
