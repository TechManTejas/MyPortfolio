import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "../../CSS/LinkUnderline.css"
import "../../CSS/BottomBoxShadow.css"

function Contact() {
    return (
        <>
            <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className="flex h-screen justify-center items-center">

                    <div>

                        <div className="flex">
                            <div className=''>

                                <div className='flex justify-center'>
                                    <span className="text-slate-50 text-3xl font-semibold m-2 p-2">CONTACT ME</span>
                                </div>

                                <div className="flex justify-center">

                                    <div className="flex mx-4">
                                        <FontAwesomeIcon icon={faMobileScreen} size="2x" color={"white"} />
                                        <div className="text-slate-200 text-3xl font-semibold ml-3">+91 7666674367</div>
                                    </div>

                                    <div className="flex mx-4">
                                        <FontAwesomeIcon icon={faEnvelope} size="2x" color={"white"} />
                                        <div className="text-slate-200 text-3xl font-semibold ml-3">techmantejas@gmail.com</div>
                                    </div>

                                </div>

                                <div className="flex justify-center m-4">
                                    <div>
                                        <div className='my-1'>
                                            <input className='bg-white bg-opacity-10 rounded-tl-2xl h-10 mr-0.5 w-96'></input>
                                            <input className='bg-white bg-opacity-10 rounded-tr-2xl h-10 ml-0.5 w-96'></input>
                                        </div>
                                        <div className='my-1'>
                                            <input className='bg-white bg-opacity-10 h-10 mr-0.5 w-96'></input>
                                            <input className='bg-white bg-opacity-10 h-10 ml-0.5 w-96'></input>
                                        </div>
                                        <div className='my-1'>
                                            <input className='bg-white bg-opacity-10 h-32 w-full'></input>
                                        </div>
                                        <div className='my-1'>
                                            <input type={"submit"} className='bg-white bg-opacity-10 h-10 w-full'></input>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;
