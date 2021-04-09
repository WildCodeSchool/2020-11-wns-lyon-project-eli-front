import { Calendar } from "../components/Calendar";
import logo from "../assets/images/Logo-eli-1.png";


export const Dashboard = (): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-nowrap bg-gray-50">
            <div className="bg-gray-600 w-48 flex-initial flex flex-col pt-3">
                <div className="text-white my-4 h-1/4 flex items-center justify-center">
                    <img src={logo} alt="" />
                </div>
                <div className="h-2/4">
                    <ul className="flex flex-col h-full justify-around text-xl font-medium text-center">
                        <li className="text-white font-semibold cursor-pointer">Lien 1</li>
                        <li className="text-white font-semibold text-opacity-50 cursor-pointer">Lien 2</li>
                        <li className="text-white font-semibold text-opacity-50 cursor-pointer">Lien 3</li>
                        <li className="text-white font-semibold text-opacity-50 cursor-pointer">Lien 4</li>
                        <li className="text-white font-semibold text-opacity-50 cursor-pointer">Lien 5</li>
                        <li className="text-white font-semibold text-opacity-50 cursor-pointer">Lien 6</li>
                    </ul>
                </div>
            </div>
            <div className="flex-auto flex flex-col">
                <div className="bg-white flex flex-1 my-3 mx-3 rounded-2xl shadow items-center max-h-60 max-w-6xl border">
                    <div className="flex flex-col flex-1 pl-5">
                        <h3 className="text-3xl pb-3 mb-5">Welcome back, <strong>Eric !</strong></h3>
                        <p className="z-40">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p className="z-40">Lorem, ipsum dolor.</p>
                    </div>
                    <div className="flex-1 flex justify-center h-full items-center ">
                        <p>image</p>
                    </div>
                </div>
                <div className="flex justify-between flex-1 my-3 mx-3">
                    <div className="flex flex-col flex-1 mr-4 bg-white rounded-2xl shadow px-5 py-5 border">
                        <div className="flex justify-between py-2">
                            <h2 className="text-lg font-bold text-gray-600">My classes</h2>
                            <button className="py-1 px-2 text-gray-400 font-bold text-sm duration-300 ease-in-out hover:text-gray-600">View all</button>
                        </div>
                        <ul>
                            <li className="py-2 flex items-baseline justify-between">
                                <div className="h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                                    <span>i</span>
                                </div>
                                <p className="px-3 font-bold text-gray-600">class name</p>
                                <div className="w-24 rounded-full h-2 bg-gray-200">
                                    <div className="h-2 w-4/5 bg-blue-600 rounded-full"></div>
                                </div>
                                <p className="font-bold text-gray-600">80 %</p>
                            </li>
                            <li className="py-2 flex items-baseline justify-between">
                                <div className="h-10 w-10 bg-blue-500 rounded-full flex justify-center items-center">
                                    <span>i</span>
                                </div>
                                <p className="px-3 font-bold text-gray-600">class name</p>
                                <div className="w-24 rounded-full h-2 bg-gray-200">
                                    <div className="h-2 w-3/5 bg-green-600 rounded-full"></div>
                                </div>
                                <p className="font-bold text-gray-600">60 %</p>
                            </li>
                            <li className="py-2 flex items-baseline justify-between">
                                <div className="h-10 w-10 bg-yellow-500 rounded-full flex justify-center items-center">
                                    <span>i</span>
                                </div>
                                <p className="px-3 font-bold text-gray-600">class name</p>
                                <div className="w-24 rounded-full h-2 bg-gray-200">
                                    <div className="h-2 w-5/5 bg-red-600 rounded-full"></div>
                                </div>
                                <p className="font-bold text-gray-600">100 %</p>
                            </li>
                            <li className="py-2 flex items-baseline justify-between">
                                <div className="h-10 w-10 bg-green-500 rounded-full flex justify-center items-center">
                                    <span>i</span>
                                </div>
                                <p className="px-3 font-bold text-gray-600">class name</p>
                                <div className="w-24 rounded-full h-2 bg-gray-200">
                                    <div className="h-2 w-2/5 bg-yellow-500 rounded-full"></div>
                                </div>
                                <p className="font-bold text-gray-600">40 %</p>
                            </li>
                        </ul>
                    </div>
                    <div className=" flex flex-col items-center flex-1 bg-white rounded-2xl shadow px-5 py-5 border">
                        <div className="flex justify-between w-full items-baseline">
                            <h2 className="text-lg font-bold text-gray-600">Working hours</h2>
                            <button className="px-3 py-2 w-24 bg-yellow-300 rounded bg-opacity-50 shadow text-yellow-500 duration-200 ease-in-out hover:bg-yellow-500 hover:text-white">
                                <div className="flex justify-between items-baseline font-bold">
                                    <p>Today</p>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </button>
                        </div>
                        <div className="w-full flex justify-center relative">
                            <svg className="progress-ring mt-5" height="140" width="140">
                                <circle
                                    className="progress-ring__circle"
                                    strokeWidth="4"
                                    stroke="#3b82f6"
                                    fill="transparent"
                                    r="62"
                                    cx="67"
                                    cy="67"
                                />
                            </svg>
                            <p className="absolute top-2/4 font-bold text-gray-600">100 %</p>
                        </div>
                        <div className="flex w-full justify-around mt-5">
                            <div className="flex items-center justify-center w-1/2">
                                <div className="h-3 w-3 mr-3 bg-yellow-500 rounded-full"></div>
                                <p className="font-bold text-gray-600">Progress</p>
                            </div>
                            <div className="flex items-center justify-center w-1/2">
                                <div className="h-3 w-3 mr-3 bg-blue-500 rounded-full"></div>
                                <p className="font-bold text-gray-600">Done</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 my-3 mx-3">
                    <div className="flex justify-between pl-5 mb-3">
                        <h2 className="text-lg font-bold text-gray-600">My media for lessons</h2>
                        <button className="py-1 px-2 text-gray-400 font-bold text-sm duration-300 ease-in-out hover:text-gray-600">View all</button>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded shadow w-full pl-5 py-3 mb-3 border">
                        <span className="inline-block py-2 px-2 bg-red-200 rounded font-bold text-red-500">A1</span>
                        <div className="w-1/6 flex">
                            <p className="font-bold text-gray-600">Common French</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">Conjugaison.pdf</p>
                        </div>
                        <div className="flex items-center w-1/6 flex">
                            <span className="h-2 w-2 bg-gray-600 block rounded-full mr-1"></span>
                            <p className="font-bold text-gray-600">Only view</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">48 members</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-bold text-gray-600">43MB</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded shadow w-full pl-5 py-3 mb-3 border">
                        <span className="inline-block py-2 px-2 bg-green-200 rounded font-bold text-green-500">B4</span>
                        <div className="w-1/6 flex">
                            <p className="font-bold text-gray-600">Math 101</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">Exercice.docs</p>
                        </div>
                        <div className="flex items-center w-1/6 flex">
                            <span className="h-2 w-2 bg-yellow-500 block rounded-full mr-1"></span>
                            <p className="font-bold text-yellow-500">Edit available</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">48 members</p>
                        </div>
                        <div className="w-1/6 flex ">
                            <p className="font-bold text-gray-600">43MB</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded shadow w-full pl-5 py-3 mb-3 border">
                        <span className="inline-block py-2 px-2 bg-yellow-200 rounded font-bold text-yellow-500">C2</span>
                        <div className="w-1/6 flex">
                            <p className="font-bold text-gray-600">History 101</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">frenchRevolution.pdf</p>
                        </div>
                        <div className="flex items-center w-1/6 flex">
                            <span className="h-2 w-2 bg-gray-600 block rounded-full mr-1"></span>
                            <p className="font-bold text-gray-600">Only view</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">98 members</p>
                        </div>
                        <div className="w-1/6 flex ">
                            <p className="font-bold text-gray-600">20MB</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded shadow w-full pl-5 py-3 mb-3 border">
                        <span className="inline-block py-2 px-2 bg-blue-200 rounded font-bold text-blue-500">C3</span>
                        <div className="w-1/6 flex">
                            <p className="font-bold text-gray-600">Biology 101</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">DNA.pdf</p>
                        </div>
                        <div className="flex items-center w-1/6 flex">
                            <span className="h-2 w-2 bg-gray-600 block rounded-full mr-1"></span>
                            <p className="font-bold text-gray-600">Only view</p>
                        </div>
                        <div className="w-1/6 flex">
                            <p className="font-light text-gray-400">48 members</p>
                        </div>
                        <div className="w-1/6 flex ">
                            <p className="font-bold text-gray-600">43MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex flex-col mt-3 flex-initial">
                <div className="flex w-full flex-initial items-center pb-5 px-5">
                    <div className="flex w-1/4 flex-initial text-2xl justify-around">
                        <i className="font-normal text-gray-600 pr-5 fas fa-search cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out"></i>
                        <i className="font-normal text-gray-600 far fa-bell cursor-pointer transition-all transform hover:scale-110 duration-300 ease-in-out"></i>
                    </div>
                    <div className="flex-1 w-2/4 flex flex-col items-end pr-4">
                        <h4 className="text-lg font-bold text-gray-700">Eric Smith</h4>
                        <p className="text-gray-400">eric.smith@gmail.com</p>
                    </div>
                    <div className="flex-initial w-1/4">
                        <span className="inline-block rounded-full h-16 w-16 bg-cover bg-center">
                            <img className="rounded-full" src="https://randomuser.me/api/portraits/men/78.jpg" alt="img" />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col flex-1 bg-white justify-between rounded-tl-2xl shadow py-4 px-5 border">
                    <div className="mx-5 h-2/5">
                        <Calendar />
                    </div>
                    <div className="flex flex-col mx-5 mb-1">
                        <div className="flex justify-between mb-3">
                            <h2 className="text-lg font-bold text-gray-700">Next lessons</h2>
                            <button className="py-1 px-2 text-gray-400 font-bold text-sm duration-300 ease-in-out hover:text-gray-600">View all</button>
                        </div>
                        <div className="flex flex-col flex-1">
                            <div className=" flex h-1/2 mb-3 rounded-lg overflow-hidden border shadow-md">
                                <div className="h-full w-1.5 bg-red-500"></div>
                                <div className="bg-white w-full flex flex-col py-3 px-3 justify-between">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <div>
                                            <h4 className="font-bold text-gray-600 mb-2">Fractal</h4>
                                            <p className="text-gray-400 text-sm">Thu 13 PM - 15 PM</p>
                                        </div>
                                        <button className="px-2">
                                            <i className="fas fa-ellipsis-v text-lg font-normal cursor-pointer text-gray-400 transition-all transform hover:scale-125 duration-300 ease-in-out"></i>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-1 relative">
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 z-50 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="img1" />
                                            </span>
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 inset-x-6 z-40 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/women/58.jpg" alt="img3" />
                                            </span>
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 inset-x-12 z-30 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/women/0.jpg" alt="img4" />
                                            </span>
                                        </div>
                                        <button className="bg-gray-700 h-8 w-8 rounded-full justify-center items-center  transition-all transform hover:scale-110 duration-300 ease-in-out">
                                            <i className="fas fa-plus font-normal text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-1/2 rounded-lg overflow-hidden border shadow-md">
                                <div className="h-full w-1.5 bg-blue-500"></div>
                                <div className="bg-white w-full flex flex-col py-3 px-3 justify-between">
                                    <div className="flex justify-between items-baseline mb-3">
                                        <div>
                                            <h4 className="font-bold text-gray-600 mb-2">Artificial intelligence</h4>
                                            <p className="text-gray-400 text-sm">Thu 13 PM - 15 PM</p>
                                        </div>
                                        <button className="px-2">
                                            <i className="fas fa-ellipsis-v text-lg font-normal cursor-pointer text-gray-400 transition-all transform hover:scale-125 duration-300 ease-in-out"></i>
                                        </button>
                                    </div>
                                    <div className="flex">
                                        <div className="flex flex-1 relative">
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 z-50 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="img10" />
                                            </span>
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 inset-x-6 z-40 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="img30" />
                                            </span>
                                            <span className="h-8 w-8 rounded-full shadow border-2 absolute bottom-0 inset-x-12 z-30 overflow-hidden">
                                                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="img40" />
                                            </span>
                                        </div>
                                        <button className="bg-gray-700 h-8 w-8 rounded-full justify-center items-center transition-all transform hover:scale-110 duration-300 ease-in-out">
                                            <i className="fas fa-plus font-normal text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mx-5">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-bold text-gray-600">Completed Quizzes</h2>
                            <button className="py-1 px-2 text-gray-400 font-bold text-sm duration-300 ease-in-out hover:text-gray-600">View all</button>
                        </div>
                        <div className="flex items-center bg-white rounded shadow w-full pl-5 py-3 mb-3 border">
                            <span className="inline-block py-2 px-2 bg-red-200 rounded font-bold text-red-500">
                                <i className="fas fa-square-root-alt"></i>
                            </span>
                            <div className="flex flex-col flex-1 ml-3">
                                <h4 className="font-bold text-gray-600">Math - Algebra</h4>
                                <p className="text-sm text-gray-400">James Bond, 7 March</p>
                            </div>
                            <button className="px-1 transition-all transform duration-300 ease-in-out hover:translate-x-0.5">
                                <i className="fas fa-chevron-right mr-2 "></i>
                            </button>
                        </div>
                        <div className="flex items-center bg-white rounded shadow w-full pl-5 py-3 border">
                            <span className="inline-block py-2 px-2 bg-indigo-200 rounded font-bold text-indigo-500">
                                <i className="fas fa-globe-europe"></i>
                            </span>
                            <div className="flex flex-col flex-1 ml-3">
                                <h4 className="font-bold text-gray-600">Geography - Europe</h4>
                                <p className="text-sm text-gray-400">Neo, 7 March</p>
                            </div>
                            <button className="px-1 transition-all transform duration-300 ease-in-out hover:translate-x-0.5">
                                <i className="fas fa-chevron-right mr-2 "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
