import { useEffect } from "react";
import "../../CSS/LinkUnderline.css";

function Navbar({scrolled}) {

    return (
        <>
            <div className="w-screen fixed">
                <nav className={`flex justify-end pr-32  text-xl font-semibold
                    ${scrolled ? "bg-gray-900 text-sky-500" :"bg-transparent text-slate-50"}
                `} style={{ transition:"background 0.25s ease-in-out ; text 0.25s ease-in-out"}}>

                    <button className="m-2 p-2 
                    link-underline">
                        HOME
                    </button>

                    <button className="m-2 p-2
                    link-underline" >
                        STORE
                    </button>

                    <button className="m-2 p-2
                    link-underline" >
                        BLOGS
                    </button>

                    <button className="m-2 p-2
                    link-underline" >
                        PORTFOLIO
                    </button>

                    <button className="m-2 p-2
                    link-underline" >
                        CONTACT
                    </button>

                </nav>
            </div>
        </>
        
    );
}

export default Navbar;
