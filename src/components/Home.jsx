import React, { useState } from "react";
import img from "../assets/header.gif"
import among from "../assets/among.gif"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
    const [url, setUrl] = useState("")
    const [responseAnswer, setResponseAnswer] = useState(null)
    const handleButtonClick = async () => {
        try {
            const data = {
                file_url: 'https://veryfi-testing-public.s3.us-west-2.amazonaws.com/receipt.jpg',
            };

            const response = await axios.post('https://api.veryfi.com/api/v8/partner/documents', data, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'CLIENT-ID': 'vrfubf7FH3PYXcGxA9RMKbVj6tuFUrvJoZ4IBRh',
                    'AUTHORIZATION': 'apikey mohit.dubey2020:482e409d6f3f4101e5f0139f4ec6d645',
                },
            });


            console.log(response.data); // Handle the response data as needed
        } catch (error) {
            console.error(error); // Handle errors
        }
    };
    return (
        <>
            <div className="flex flex-col space-y-4 min-h-screen  justify-center  items-center ">
                <div className=" justify-center items-center text-center gap-4">
                    <img src={among} alt="image not found" className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" />
                    <h1 className="text-4xl text-center  font-bold text-black" >Welcome to <span className="text-[#00BD37]">OCR Scanner</span></h1>

                </div>
                <div className="flex justify-center items-center gap-4">
                    <input type="url" placeholder="Enter you link here" className="flex p-2 ml-4 w-[50vw] rounded-lg outline-2 outline-offset-2 border-2 border-solid" onChange={(e) => setUrl(e.target.value)} />
                    <div className="flex">

                        <button className=" mr-4 rounded-md" onClick={handleButtonClick}> <img src={img} className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" height={80} width={80} alt="image not found" /></button>

                    </div>
                </div>
                <div>
                    <Link to={"/generateLink"}>Generate Link</Link>
                </div>
            </div>
        </>
    )
}

export default Home