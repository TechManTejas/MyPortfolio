import { Link } from 'react-router-dom'
import "../../CSS/LinkUnderline.css";
import "../../CSS/BottomBoxShadow.css"

function Navbar({ scrolled }) {

    return (
        <>
            <div className="w-screen fixed">
                <nav className={`flex justify-end pr-32  text-xl font-semibold
                    ${scrolled ? "bg-gray-900 text-sky-500 bottomBoxShadow" : "bg-transparent text-slate-50"}
                `} style={{ transition: "background-color 0.25s ease-in-out" }}>

                    <Link to={"/"} className="m-2 p-2 
                    link-underline">
                        HOME
                    </Link>


                    <Link to={"/Store"} className="m-2 p-2
                    link-underline" >
                        STORE
                    </Link>

                    <Link to={"/Blogs"} className="m-2 p-2
                    link-underline" >
                        BLOGS
                    </Link>

                    <Link to={"/Portfolio"} className="m-2 p-2
                    link-underline" >
                        PORTFOLIO
                    </Link>

                    <Link to={"/Contact"} className="m-2 p-2
                    link-underline" >
                        CONTACT
                    </Link>

                </nav>
            </div>
        </>

    );
}

export default Navbar;
