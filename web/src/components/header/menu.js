import React, { useState } from "react"
import MenuFullScreen from "./menu_fullscreen"
import styled from "styled-components"

const ContainerMenu = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:40;
    width: 100%;
    height: 100vh;
    animation-name: ${props => props.open ? "fadeIn" : "fadeOut"};
    transform: ${props => props.open ? "translateY(0%)" : "translateY(100%)"};
    animation-duration: 0.3s;
    overflow: hidden;
`
const Hamburger = styled.div`
    background-color: ${props => props.open ? "#d2c69e" : "black;"};
    width: 20px;
    height: 4px;
    transform-origin: center;
    transition: .5s ease-in-out;
    align-self: center;
    position: relative;
    top: 31px;
    left: 18px;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
    width: ${props => (props.open ? "27px" : "20px")};

    ::before,
    ::after {
        width: 27px;
        height: 4px;
        background-color: #111;
        content: "";
        position: absolute;
        transition: .5s ease-in-out;
    }

    ::before {
        transform: ${props => props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
        background-color: ${props => props.open ? "#d2c69e" : "black;"};
        transition: .5s ease-in-out;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
        background-color: ${props => props.open ? "#d2c69e" : "black;"};
        transition: .5s ease-in-out;
    }
    `

const MenuIndex = ({theme}) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    return (
        
            <>
             <div className="relative z-50" navbarOpen={navbarOpen} onKeyDown={() => setNavbarOpen(!navbarOpen)} onClick={() => setNavbarOpen(!navbarOpen)} aria-hidden="true">
                {navbarOpen ? 
                <div className="w-16 h-16 cursor-pointer rounded-full"><Hamburger open /></div> 
                : 
                <div className="w-16 h-16 cursor-pointer rounded-full bg-background dark:bg-text_dark"><Hamburger /></div>
                }
             </div>
            {navbarOpen ? (
                <ContainerMenu open><MenuFullScreen open /></ContainerMenu>
                ) : (
                <ContainerMenu />
                )}
</>
 
    )
    };
   
export default MenuIndex