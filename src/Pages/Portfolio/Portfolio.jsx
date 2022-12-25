import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "../../CSS/LinkUnderline.css"
import "../../CSS/BottomBoxShadow.css"

function Portfolio() {
    return (
        <>  
            <div className="h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className="flex flex-col justify-center items-center h-full">
                    <div>
                        <div>
                            <div>
                                <span className="text-yellow-500 text-3xl font-semibold">HI, IAM</span>
                            </div>
                            <div className="my-3">
                                <span className="text-slate-50 text-8xl font-black tracking-wider">TEJAS VAIJ</span>
                            </div>
                            <div>
                                <span className="text-green-500 text-3xl font-semibold tracking pb-2">DEVELOPER</span>
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
                            <button className="rounded-sm p-3 px-8 bg-red-700
                                hover:bg-red-800
                            "
                                style={{ boxShadow: "rgba(0, 0, 0, 0.75) 0px 5px 15px" }}
                            >
                                <span className="text-slate-50 text-md font-bold">CONTACT ME</span>
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

            <div className="h-max bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-500 via-slate-600 to-slate-600 bottomBoxShadow">
                
                <div className='flex p-16'>
                    <div className="flex justify-center items-center bg-white" 
                        style={{ width: "500px", height: "500px"}}>
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

            <div className="h-96 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className='flex justify-center p-16'>
                    <span className="text-slate-50 text-3xl font-semibold m-2 p-2 link-underline">SERVICES & SKILLS</span>
                </div>
            </div>

            <div className="h-max bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-500 via-slate-600 to-slate-600 bottomBoxShadow">
                
                <div className='p-16'>
                    <div className='flex justify-center'>
                        <span className="text-slate-50 text-3xl font-semibold m-2 p-2 link-underline">WORK EXPERIENCE</span>

                    </div>

                    <div className='flex justify-center'>
                        <div className='w-1/2'>
                            <ol class="relative border-l border-gray-200 dark:border-gray-700">
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">October 2022 (Current)</time>
                                    <h3 class="text-2xl font-semibold text-white">Fittlyf</h3>
                                    <p class="text-xl font-normal text-gray-400">Full Stack Web Developer Intern</p>
                                    <div class="mb-4 text-lg font-thin text-white">About work</div>
                                    <a href="https://www.fittlyf.com/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">www.fittlyf.com<svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </li>
                                <li class="mb-10 ml-4">
                                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400">March 2022 (Current)</time>
                                    <h3 class="text-2xl font-semibold text-white">Blastoserve Scientific</h3>
                                    <p class="text-xl font-normal text-gray-400">Full Stack Web Developer Intern</p>
                                    <div class="mb-4 text-lg font-thin text-white">About work</div>
                                    <a href="https://www.blastoserve.com/" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">www.blastoserve.com<svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

            </div>

            <div className="h-96 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black">
                <div className='flex justify-center p-16'>
                    <span className="text-slate-50 text-3xl font-semibold m-2 p-2 link-underline">MY WORK</span>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
