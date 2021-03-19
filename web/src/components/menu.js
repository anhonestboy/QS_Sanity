import React, { useState } from "react"
import MenuFullScreen from "./menu_fullscreen"
import styled from "styled-components"

const ContainerMenu = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:40;
    width: 100vw;
    height: 100vh;
    animation-name: ${props => props.open ? "fadeIn" : "fadeOut"};
    display: ${props => props.open ? "block" : "none"};
    animation-duration: 0.3s;
    overflow: hidden;
`
const Hamburger = styled.div`
    background-color: ${props => props.open ? "white" : "#202217;"};
    width: 30px;
    height: 3px;
    transform-origin: center;
    transition: .5s ease-in-out;
    align-self: center;
    position: relative;
    top: 20px;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 3px;
        background-color: #111;
        content: "";
        position: absolute;
        transition: .5s ease-in-out;
    }

    ::before {
        transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
        background-color: ${props => props.open ? "white" : "#202217;"};
        transition: .5s ease-in-out;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
        background-color: ${props => props.open ? "white" : "#202217;"};
        transition: .5s ease-in-out;
    }
    `

const MenuIndex = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
       
    return (
        <nav className="grid grid-flow-col auto-cols-auto h-full w-100 pr-10 items-center place-items-end">
           
             <div className="relative z-50" navbarOpen={navbarOpen} onKeyDown={() => setNavbarOpen(!navbarOpen)} onClick={() => setNavbarOpen(!navbarOpen)} aria-hidden="true">
                {navbarOpen ? 
                <div className="w-10 h-10 cursor-pointer"><Hamburger open /></div> 
                : 
                <div className="w-10 h-10 cursor-pointer"><Hamburger /></div>
                }
             </div>
            {navbarOpen ? (
                <ContainerMenu open><MenuFullScreen open /></ContainerMenu>
                ) : (
                <ContainerMenu />
                )}

        </nav>
    )
    };
   
export default MenuIndex