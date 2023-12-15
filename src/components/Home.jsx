import React, { useState } from "react";
import img from "../assets/header.gif"
import among from "../assets/among.gif"
import axios from "axios"
import { Link } from "react-router-dom"
import OcrForm from "./OcrForm";
import Navbar from "./Navbar";

const Home = () => {

    return (
        <>
            <div className="container">
                <div>
                    <Navbar />
                </div>
                <div>
                    <OcrForm />
                </div>
               
            </div>
        </>
    )
}

export default Home