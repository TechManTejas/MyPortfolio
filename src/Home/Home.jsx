import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "../CSS/LinkUnderline.css"

function Home() {
    return (
        <>  
            <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className="flex flex-col justify-center items-center h-full">
                    <div>
                        <div>
                            <div>
                                <span className="text-slate-300 text-3xl font-semibold">HI, IAM</span>
                            </div>
                            <div className="my-3">
                                <span className="text-slate-50 text-8xl font-black tracking-wider">TEJAS VAIJ</span>
                            </div>
                            <div>
                                <span className="text-slate-300 text-3xl font-semibold tracking">DEVELOPER</span>
                            </div>
                        </div>
                        <div className="my-16"></div>
                        <div className="flex justify-evenly">
                            <button className="rounded-sm p-3 px-8 bg-blue-700
                                hover:bg-blue-800
                            "
                                style={{ boxShadow:"rgba(0, 0, 0, 0.75) 0px 5px 15px"}}
                            >
                                <span className="text-slate-50 text-md font-bold">MY WORK</span>
                            </button>
                            <button className="rounded-sm p-3 px-8 bg-slate-50
                                hover:bg-slate-300
                            "
                                style={{ boxShadow: "rgba(0, 0, 0, 0.75) 0px 5px 15px" }}
                            >
                                <span className=" text-md font-bold">CONTACT ME</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center -mt-16 overflow-x-hidden">
                <button className="flex items-center justify-center bg-transparent w-32 h-16 pb-4 absolute
                    hover:bg-slate-800 hover:bg-opacity-50"
                    style={{ transition: "background-color 0.25s ease-in-out" }}>
                    <FontAwesomeIcon icon={faAngleDown} size="2x" color={"white"}/>
                </button>

                <div className="w-1/2 bg-slate-600 h-16"
                    style={{transform:"skew(45deg)", transformOrigin:"bottom right"}}></div>
                
                <div className="w-1/2 bg-slate-600 h-16"
                    style={{ transform: "skew(-45deg)", transformOrigin: "bottom left"}}></div>
            </div>

            <div className="h-max bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-500 via-slate-600 to-slate-600">
                
                <div className='flex p-16'>
                    <div className="flex justify-center items-center bg-white" style={{ width: "500px", height: "500px" }}>
                        Image
                    </div>
                    <div className="m-16">
                        <div className="text-3xl font-bold text-white">
                            HELLO,
                        </div>
                        <div className="text-2xl font-thin text-slate-300">
                            lorem ipsum dolor sit amet, consect lorem ipsum dolor sit amet, consectlorem ipsum dolor sit amet, consect 
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className="flex flex-col justify-center items-center h-full">
                    <div>
                        <div>
                            <div>
                                <span className="text-slate-300 text-3xl font-semibold">HI, IAM</span>
                            </div>
                            <div className="my-3">
                                <span className="text-slate-50 text-8xl font-black tracking-wider">TEJAS VAIJ</span>
                            </div>
                            <div>
                                <span className="text-slate-300 text-3xl font-semibold tracking">DEVELOPER</span>
                            </div>
                        </div>
                        <div className="my-16"></div>
                        <div className="flex justify-evenly">
                            <button className="rounded-sm p-3 px-8 bg-blue-700
                                hover:bg-blue-800
                            "
                                style={{ boxShadow: "rgba(0, 0, 0, 0.75) 0px 5px 15px" }}
                            >
                                <span className="text-slate-50 text-md font-bold">MY WORK</span>
                            </button>
                            <button className="rounded-sm p-3 px-8 bg-slate-50
                                hover:bg-slate-300
                            "
                                style={{ boxShadow: "rgba(0, 0, 0, 0.75) 0px 5px 15px" }}
                            >
                                <span className=" text-md font-bold">CONTACT ME</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
