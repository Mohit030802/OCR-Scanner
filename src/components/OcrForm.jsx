import react, { useState } from 'react'
import axios from 'axios'

import { useSpring, animated } from '@react-spring/web'
const OcrForm = () => {
    const springs = useSpring({
        from: { x: 0 },
        to: { x: 100 },
    })
    const [file, setFile] = useState(null);
    // const [language,setLanguage]=useState('');
    // const [isOverlayRequired,setIsOverlayRequired]=useState('');
    const [result, setResult] = useState(null)
    const apiKey = 'K83319820488957'
    const upload = async () => {
        console.log(file)
        const formData = new FormData();
        // formData.append('language',language)
        // formData.append('isOverlayRequired',isOverlayRequired)
        if (file) {
            formData.append('file', file)
        }
        try {
            const response = await axios.post('https://api.ocr.space/parse/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    apikey: apiKey
                }
            })
            setResult(response.data.ParsedResults[0].ParsedText)
            // console.log(response.data.ParsedResults[0].ParsedText)
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }
    function formSubmit(e) {
        e.preventDefault();
        upload();
    }

    return (
        <>
            <animated.div
                style={{
                   
                    
                    borderRadius: 8,
                    ...springs,
                }} className='max-w-md mx-auto bg-[#F3F7F9] p-2 m-2 rounded-md'>
                <div className="text-center">
                    <h2 className="mt-5 text-3xl font-bold text-gray-900">
                        File Upload!
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">Few steps to extract get your text.</p>
                </div>
                <form className="mt-8 space-y-3" method="POST" onSubmit={formSubmit}>

                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div className="h-full w-full text-center flex flex-col items-center justify-center  ">

                                    <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                        <img className="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                    </div>
                                    <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" className="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                </div>
                                <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
                            </label>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
                    {/* <div className="grid grid-cols-1 space-y-3">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Language</label>
                        <select name="" id="" className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' value={language} onChange={(e)=>setLanguage(e.target.value)}>
                        
                            <option value="ara">Arabic</option>
                            <option value="bul">Bulgarian</option>
                            <option value="chs">ChineseSimplified</option>
                            <option value="cht">ChineseTraditional</option>
                            <option value="hrv">Croatian</option>
                            <option value="cze">Czech</option>
                            <option value="dan">Danish</option>
                            <option value="fut">Dutch</option>
                            <option value="eng">English</option>
                            <option value="fin">Finnish</option>
                            <option value="fre">French</option>
                            <option value="ger">German</option>
                            <option value="gre">Greek</option>
                            <option value="hun">Hungarian</option>
                            <option value="kor">Italian</option>
                            <option value="ita">Japanese</option>
                            <option value="jpn">Korean</option>
                            <option value="pol">Polish</option>
                            <option value="por">Portuguese</option>
                            <option value="rus">Russian</option>
                            

                        </select>
                    </div>
                    <div className="grid grid-cols-1 space-y-3">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Is overlayer Required</label>
                        <select name="" id="" className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500' value={isOverlayRequired} onChange={(e)=>setIsOverlayRequired(e.target.options[e.target.selectedIndex].text)}>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </select>
                    </div> */}
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300" onClick={upload}>
                            Upload
                        </button>
                    </div>
                </form>
            </animated.div>
            <div className='max-w-md mx-auto bg-[#F3F7F9] p-2 m-2 rounded-md'>
                <p>{result}</p>
            </div>
        </>
    )
}

export default OcrForm