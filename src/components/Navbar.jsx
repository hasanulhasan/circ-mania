
const Navbar = () => {
  return (
    <section className="font-poppins bg-gray-800">
    <div className="max-w-6xl px-4 mx-auto">
        <nav className="flex items-center justify-between py-4">
            <a href="" className="text-3xl font-semibold leading-none text-gray-100">CricMania</a>
            <div className="flex lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border border-blue-400 rounded text-gray-400 hover:text-blue-800 hover:border-blue-300 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-list" viewBox="0 0 16 16">
                        <path
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

            </div>

            <ul className="hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex ">
                {/* <li><a href="" className="text-md  hover:text-blue-700 text-gray-400">Home</a>
                </li> */}
            </ul>
            <div className="hidden lg:flex">
                <a href=""
                    className="inline-block px-4 py-3 mr-2 text-sm font-semibold leading-none border  rounded hover:border-blue-400 hover:bg-blue-400 border-blue-300 bg-blue-300 text-gray-700">
                    Login
                </a>

            </div>
        </nav>
    </div>
    </section>
  );
};

export default Navbar;