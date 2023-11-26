import React, { useState } from "react";
import img from "../assets/header.gif"
import among from "../assets/among.gif"
import axios from "axios"

const Home = () => {
    const [url, setUrl] = useState("")
    const handleSubmit = () => {
        let data = JSON.stringify({
            "file_url": {url}
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.veryfi.com/api/v8/partner/documents',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'CLIENT-ID': 'vrfubf7FH3PYXcGxA9RMKbVj6tuFUrvJoZ4IBRh',
                'AUTHORIZATION': 'apikey mohit.dubey2020:482e409d6f3f4101e5f0139f4ec6d645',
               
            },
            data: data
        };

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="flex flex-col space-y-4 min-h-screen  justify-center  items-center bg-slate-700">
                <div className=" justify-center items-center text-center gap-4">
                    <img src={among} alt="image not found" />
                    <h1 className="text-4xl text-center text-white font-bold " >Welcome to <span className="text-[#00BD37]">OCR Scanner</span></h1>

                </div>
                <div className="flex justify-center items-center gap-4">
                    <input type="url" placeholder="Enter you link here" className="p-2 ml-4 w-full rounded-lg" onChange={(e) => setUrl(e.target.value)} />
                    <div className="flex">

                        <button className=" mr-4 rounded-md" onClick={handleSubmit}> <img src={img} height={80} width={80} alt="image not found" /></button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home