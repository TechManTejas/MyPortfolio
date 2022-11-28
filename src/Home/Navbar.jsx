function Navbar() {
    return (
        <>
            <div className="flex bg-slate-900 mx-auto">
                <div className="text-2xl font-semibold m-4 p-2" >
                    <span className="text-slate-50 text-4xl font-semibold">Tejas</span>
                    <span className="text-slate-300 text-4xl font-semibold"> Vaij</span>
                </div>

                <div className="text-2xl font-semibold m-4 p-2" >
                    <span className="text-slate-50 text-2xl font-semibold">Projects</span>
                </div>

                <div className="text-2xl font-semibold m-4 p-2" >
                    <span className="text-slate-50 text-2xl font-semibold">Services</span>
                </div>
            </div>
        </>
    );
}

export default Navbar;
