import React, { useState } from "react";
import link from "../assets/link.gif";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const GenerateLink = () => {
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const uploadImage = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);


        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(uploadedFile);
    };

    const handleCloudIconClick = () => {
        document.getElementById("uploadInput").click();
    };
    const copyClick = () => {
        navigator.clipboard.writeText(imageUrl)
        toast.success("Copied to Clipboard !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }

    return (
        <>
            <div className="flex flex-col w-full min-h-screen justify-center items-center">
                <div className="flex flex-col justify-center w-[25%] p-4 items-center text-center">
                    <div className="flex justify-center items-center">
                        <div>
                            <img src={link} alt="Image" />
                        </div>
                        <CloudUploadIcon
                            style={{ width: "100px", height: "100px", cursor: "pointer" }}
                            onClick={handleCloudIconClick}
                        />
                    </div>
                    <p className="text-[#ccc]">Upload Your Image to generate URL!</p>
                    {file ? (
                        <p className="text-[f8f8f8] m-2">File Name: {file.name}</p>
                    ) : (
                        <div style={{ display: "none" }}>
                            <input
                                type="file"
                                className="p-4 w-full"
                                onChange={uploadImage}
                                id="uploadInput"
                            />
                        </div>
                    )}
                </div>
                <div className="flex justify-center items-center">
                    <textarea
                        className="flex justify-center items-center text-center border-2 w-[50%]"
                        cols="200"
                        rows="2"
                        value={imageUrl}
                    ></textarea>
                    <div className="flex justify-end items-center text-center">
                        <ContentCopyIcon className="absolute" onClick={copyClick} />
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GenerateLink;
