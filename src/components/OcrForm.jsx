import react from 'react'

const OcrForm = () => {
    return (
        <>
            <div className='max-w-md mx-auto bg-[#F3F7F9] p-2 m-2 rounded-md'>
                <div class="text-center">
                    <h2 class="mt-5 text-3xl font-bold text-gray-900">
                        File Upload!
                    </h2>
                    <p class="mt-2 text-sm text-gray-400">Few steps to extract get your text.</p>
                </div>
                <form class="mt-8 space-y-3" method="POST">
                    <div class="grid grid-cols-1 space-y-2">
                        <label class="text-sm font-bold text-gray-500 tracking-wide">URL</label>
                        <input class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="" />
                    </div>
                    <p className='text-lg font-bold text-gray-500 tracking-wide'>OR</p>
                    <div class="grid grid-cols-1 space-y-2">
                        <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                        <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div class="h-full w-full text-center flex flex-col items-center justify-center  ">

                                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                        <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                    </div>
                                    <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                </div>
                                <input type="file" class="hidden" />
                            </label>
                        </div>
                    </div>
                    <p class="text-sm text-gray-300">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
                    <div class="grid grid-cols-1 space-y-3">
                        <label class="text-sm font-bold text-gray-500 tracking-wide">Language</label>
                        <select name="" id="" className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'>
                            <option value="">English</option>
                            <option value="">Arabic</option>
                            <option value="">Bulgarian</option>
                            <option value="">ChineseSimplified</option>
                            <option value="">ChineseTraditional</option>
                            <option value="">Croatian</option>
                            <option value="">Czech</option>
                            <option value="">Danish</option>
                            <option value="">Dutch</option>
                            <option value="">English</option>
                            <option value="">Finnish</option>
                            <option value="">French</option>
                            <option value="">German</option>
                            <option value="">Greek</option>
                            <option value="">Hungarian</option>
                            <option value="">Italian</option>
                            <option value="">Japanese</option>
                            <option value="">Korean</option>
                            <option value="">Polish</option>
                            <option value="">Portuguese</option>
                            <option value="">Russian</option>

                        </select>
                    </div>
                    <div class="grid grid-cols-1 space-y-3">
                        <label class="text-sm font-bold text-gray-500 tracking-wide">Language</label>
                        <select name="" id="" className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'>
                            <option value="">True</option>
                            <option value="">False</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                            Upload
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OcrForm