import Navbar from "../Components/Navbar/Navbar"

function Home() {
    return (
        <>  
            <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">

                <Navbar />

                <div className="flex flex-col justify-center items-center h-full">
                    <div className="">
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
                            <button className="rounded-sm p-2 px-4 bg-blue-700"
                                style={{ boxShadow:"rgba(0, 0, 0, 0.75) 0px 5px 15px"}}
                            >
                                <span className="text-slate-50 text-md font-bold">MY WORK</span>
                            </button>
                            <button className="rounded-sm p-2 px-4 bg-slate-50"
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
