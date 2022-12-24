import "../../CSS/LinkUnderline.css";

function Navbar() {
    return (
        <>
            <div className="w-screen absolute">
                <nav className="flex justify-end mr-32">

                    <button className="text-2xl font-semibold m-2 p-2 
                    link-underline">
                        <span className="text-slate-50 text-xl font-semibold">HOME</span>
                    </button>

                    <button className="text-2xl font-semibold m-2 p-2
                    link-underline" >
                        <span className="text-slate-50 text-xl font-semibold">ABOUT ME</span>
                    </button>

                    <button className="text-2xl font-semibold m-2 p-2
                    link-underline" >
                        <span className="text-slate-50 text-xl font-semibold">HISTORY</span>
                    </button>

                    <button className="text-2xl font-semibold m-2 p-2
                    link-underline" >
                        <span className="text-slate-50 text-xl font-semibold">PORTFOLIO</span>
                    </button>

                    <button className="text-2xl font-semibold m-2 p-2
                    link-underline" >
                        <span className="text-slate-50 text-xl font-semibold">BLOG</span>
                    </button>

                    <button className="text-2xl font-semibold m-2 p-2
                    link-underline" >
                        <span className="text-slate-50 text-xl font-semibold">CONTACT</span>
                    </button>

                </nav>
            </div>
        </>
        
    );
}

export default Navbar;
