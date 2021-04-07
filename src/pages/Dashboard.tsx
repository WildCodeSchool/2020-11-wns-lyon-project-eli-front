import React from 'react';

export const Dashboard = (): JSX.Element => {
    return (
        <div className="min-h-screen flex flex-nowrap bg-gray-50">
            <div className="bg-gray-600 w-48 flex-initial flex flex-col pt-3">
                <div className="text-white my-4 h-1/4 flex items-center justify-center">
                    <h3 className="text-4xl">Eli.</h3>
                </div>
                <div className="h-2/4">
                    <ul className="flex flex-col h-full justify-around text-xl font-medium text-center">
                        <li className="text-white">Lien 1</li>
                        <li className="text-white text-opacity-50">Lien 2</li>
                        <li className="text-white text-opacity-50">Lien 3</li>
                        <li className="text-white text-opacity-50">Lien 4</li>
                        <li className="text-white text-opacity-50">Lien 5</li>
                        <li className="text-white text-opacity-50">Lien 6</li>
                    </ul>
                </div>
            </div>
            <div className="flex-auto flex flex-col">
                <div className="bg-white flex flex-1 my-3 mx-3 rounded-2xl shadow items-center">
                    <div className="flex flex-col flex-1 pl-5">
                        <h3 className="text-3xl pb-3 mb-5">Welcome back, Eric!</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <p>image</p>
                    </div>
                </div>
                <div className="flex justify-between flex-1 my-3 mx-3">
                    <div className="flex flex-col flex-1 mr-4 bg-white rounded-2xl shadow px-5 py-5">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-bold text-gray-600">My classes</h2>
                            <button className="py-1 px-2 text-gray-400 font-bold text-sm">View all</button>
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
                    <div className=" flex flex-col items-center flex-1 bg-white rounded-2xl shadow px-5 py-5">
                        <div className="flex justify-between w-full items-baseline">
                            <h2 className="text-lg font-bold text-gray-600">Working hours</h2>
                            <button className="px-3 py-2 w-24 bg-yellow-300 rounded bg-opacity-50 shadow">
                                <div className="flex justify-between items-baseline font-bold text-yellow-500">
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
                        <button className="py-1 px-2 text-gray-400 font-bold text-sm">View all</button>
                    </div>
                    <div className="flex justify-between items-baseline bg-white rounded shadow w-full pl-5 py-3 mb-3">
                        <span className="block py-2 px-2 bg-red-200 rounded font-bold text-red-500">A1</span>
                        <p className="font-bold text-gray-600">Common French</p>
                        <p className="font-light text-gray-400">Conjugaison.pdf</p>
                        <div className="flex items-baseline">
                            <span className="h-2 w-2 bg-gray-600 block rounded-full"></span>
                            <p className="font-bold text-gray-600">Only view</p>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white rounded shadow w-full pl-5 py-3 mb-3">
                        <span className="block py-2 px-2 bg-green-200 rounded font-bold text-green-500">B4</span>
                    </div>
                    <div className="flex justify-between bg-white rounded shadow w-full pl-5 py-3 mb-3">
                        <span className="block py-2 px-2 bg-yellow-200 rounded font-bold text-yellow-500">C2</span>
                    </div>
                    <div className="flex justify-between bg-white rounded shadow w-full pl-5 py-3 mb-3">
                        <span className="block py-2 px-2 bg-blue-200 rounded font-bold text-blue-500">C3</span>
                    </div>
                </div>
            </div>
            <div className="w-1/4 flex flex-col flex-initial">
                <div className="flex-initial">
                    <p>1</p>
                </div>
                <div className="flex flex-1"></div>
            </div>
        </div>
    );
};
