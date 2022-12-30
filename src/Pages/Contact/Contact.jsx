import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faEnvelope, faPaperPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import "../../CSS/LinkUnderline.css"
import "../../CSS/BottomBoxShadow.css"

function Contact() {
    return (
        <>
            <div className="h-screen bg-slate-400">
                <div className="flex h-screen justify-between overflow-x-hidden">

                    <div className="absolute w-1/2 -translate-x-24">
                        <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black" style={{ transform: "skew(10deg)", width: "110%" }} />
                    </div>

                    <div className="z-10 w-1/2 flex flex-col justify-end items-start p-16">

                        <div>
                            <div className="flex my-3">
                                <div className='mx-2'>
                                    <FontAwesomeIcon icon={faEnvelope} color={"white"} className="ml-2" size="2x" />
                                </div>
                                <div className='text-2xl text-white font-light '>
                                    TECHMANTEJAS@GMAIL.COM
                                </div>
                            </div>
                            <div className="flex my-3">
                                <div className='mx-2'>
                                    <FontAwesomeIcon icon={faMobileScreen} color={"white"} className="ml-2" size="2x" />
                                </div>
                                <div className='text-2xl text-white font-light '>
                                    +91 7666674367
                                </div>
                            </div>
                            <div className="flex my-3">
                                <div className='mx-2'>
                                    <FontAwesomeIcon icon={faLocationDot} color={"white"} className="ml-2" size="2x" />
                                </div>
                                <div className='text-2xl text-white font-light '>
                                    MOSHI PRADHIKARAN, PUNE, MAHARASHTRA, INDIA
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-center'>
                                <span className="text-slate-50 text-3xl font-semibold m-2 p-2">SEND MESSAGE</span>
                            </div>

                            <div className="flex justify-center m-4 text-white">
                                <div>
                                    <div className='my-2'>
                                        <input className='bg-white bg-opacity-10 rounded-tl-2xl h-10 mr-1 w-96 px-3' placeholder='Subject'></input>
                                        <input className='bg-white bg-opacity-10 rounded-tr-2xl h-10 ml-1 w-96 px-3' placeholder='Your Full Name'></input>
                                    </div>
                                    <div className='my-2'>
                                        <input className='bg-white bg-opacity-10 h-10 mr-1 w-96 px-3' placeholder='E-mail' type="email"></input>
                                        <input className='bg-white bg-opacity-10 h-10 ml-1 w-96 px-3' placeholder='Phone (Optional)'></input>
                                    </div>
                                    <div className='my-2'>
                                        <textarea className='bg-white bg-opacity-10 h-32 w-full p-3' placeholder='Your Message...' style={{ maxHeight: "150px", minHeight: "200px" }}></textarea>
                                    </div>
                                    <div className='my-2'>
                                        <button className="bg-blue-600 h-10 w-full text-white font-bold tracking-wider rounded-b-2xl
                                                hover:bg-blue-600 hover:bg-opacity-80
                                            ">
                                            <span>
                                                SEND MESSAGE
                                                <FontAwesomeIcon icon={faPaperPlane} color={"white"} className="ml-2" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-center items-center">
                        {/* <div className="flex">
                            <div>
                                <div className='flex justify-center'>
                                    <span className="text-slate-50 text-3xl font-semibold m-2 p-2">SEND MESSAGE</span>
                                </div>

                                <div className="flex justify-center m-4 text-white">
                                    <div>
                                        <div className='my-2'>
                                            <input className='bg-white bg-opacity-10 rounded-tl-2xl h-10 mr-1 w-96 px-3' placeholder='Subject'></input>
                                            <input className='bg-white bg-opacity-10 rounded-tr-2xl h-10 ml-1 w-96 px-3' placeholder='Your Full Name'></input>
                                        </div>
                                        <div className='my-2'>
                                            <input className='bg-white bg-opacity-10 h-10 mr-1 w-96 px-3' placeholder='E-mail' type="email"></input>
                                            <input className='bg-white bg-opacity-10 h-10 ml-1 w-96 px-3' placeholder='Phone (Optional)'></input>
                                        </div>
                                        <div className='my-2'>
                                            <textarea className='bg-white bg-opacity-10 h-32 w-full p-3' placeholder='Your Message...'></textarea>
                                        </div>
                                        <div className='my-2'>
                                            <button className="bg-blue-600 h-10 w-full text-white font-bold tracking-wider rounded-b-2xl
                                                hover:bg-blue-600 hover:bg-opacity-80
                                            ">
                                                <span>
                                                    SEND MESSAGE
                                                    <FontAwesomeIcon icon={faPaperPlane} color={"white"} className="ml-2" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;

