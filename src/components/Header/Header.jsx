import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state
    };

    return (
        <nav className="bg-blue-800 border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <p className="self-center font-bold whitespace-nowrap text-white text-bold text-3xl">
                    MedCare <span className="text-blue-500">Hospital</span>
                </p>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="space-x-3">
                        <Link to="login">
                            <button
                                type="button"
                                className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  "
                            >
                                Login
                            </button>
                        </Link>
                    </div>
                    <button
                        onClick={toggleMenu} // Add onClick event to toggle menu
                        data-collapse-toggle="navbar-cta"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta"
                        aria-expanded={isMenuOpen} // Update the aria-expanded value
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} // Toggle visibility based on isMenuOpen
                    id="navbar-cta"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <NavLink to="/">
                            <li>
                                <div className="block py-2 px-3 md:p-0 text-white bg-blue-500 rounded md:bg-transparent hover:text-blue-600" aria-current="page">
                                    Home
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="staff">
                            <li>
                                <div className="block py-2 px-3 md:p-0 text-white rounded hover:text-blue-500">
                                    Staff
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="doctor">
                            <li>
                                <div className="block py-2 px-3 md:p-0 text-white rounded hover:text-blue-500">
                                    Doctors
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to="patientlogin">
                            <li>
                                
                                <div className="block py-2 px-3 md:p-0 text-white rounded hover:text-blue-500">
                                    Patients
                                </div>

                            </li>
                        </NavLink>
                        <NavLink to="contact">
                            <li>
                                <div className="block py-2 px-3 md:p-0 text-white rounded hover:text-blue-500">
                                    Contact Us
                                </div>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
