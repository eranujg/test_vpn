import React from 'react';
import logo from './images/WhiteLogo.svg';
import { FaBars, FaCaretDown } from "react-icons/fa";
import menuData from "../data.json"

const Header = () => {
    return (
        <header className="py-2 shadow-none bg-gradient-to-r from-blue-950 to-blue-800" >
            <div className="py-3 max-w-7xl m-auto">
                <div className="m-auto w-80 max-w-xs p-0 float-left z-50 relative">
                    <a href="/" rel="home" >
                        <img width="110" height="25" src={logo} className="max-h-20 w-auto" alt="vpnRadar" />
                    </a>
                    <h1 className="absolute w-1 h-1 overflow-hidden" >vpnRadar</h1>
                </div>
                <nav id="wp-megamenu-primary" className="z-10 text-right relative">
                    <div>
                        <a href="/" className="text-white block sm:hidden"><FaBars /></a>
                        <ul id="menu-header-menu" className="block p-0 m-0 list-none relative top-auto left-auto" style={{ opacity: 1 }}>
                            <li id="wp-megamenu-item-128" className="float-none inline-block border-t-0 static group" >
                                <a href="/" className='leading-6 uppercase tracking-normal text-white text-xs font-normal p-0 inline-block' >Best VPN <FaCaretDown className='leading-6 uppercase tracking-normal text-white text-xs font-normal p-0 inline-block' /> </a>
                                <ul className="hidden group-hover:block w-[calc(50%+2rem)] ml-0 shadow-slate-100 absolute top-full text-left m-0 leading-0 right-4 bg-white px-3 py-2 border-slate-100 border-2 rounded-xl">
                                    {
                                        menuData.map((itemMain) =>
                                            <li className="w-full h-full clear-both relative text-sm leading-4">
                                                <ul className="flex flex-wrap relative left-auto right-auto top-auto bottom-0 w-full m-0">
                                                    {
                                                        itemMain.map((itemMenuListList) => <li className={`px-3 py-4 relative text-sm m-0 ${itemMenuListList.width === 1 ? 'w-full' : 'w-6/12'}`}>
                                                            <ul className="flex flex-wrap relative left-auto right-auto top-auto bottom-0 w-full m-0">
                                                                <li className="text-slate-700 text-lg relative mb-1 w-full"><div className=""><p>{itemMenuListList.title}</p></div>
                                                                </li>
                                                                <li className="text-slate-700 text-lg relative mb-1 w-full">
                                                                    <ul>
                                                                        {
                                                                            itemMenuListList.links.map((link) => <li>{link.text}</li>)
                                                                        }
                                                                    </ul>
                                                                </li>

                                                            </ul>
                                                        </li>)
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Header;