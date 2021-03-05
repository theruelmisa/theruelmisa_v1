import React from 'react'
import { Link } from 'react-scroll';
import { Nav, NavMenu, NavItems, NavLinks, MobileIcon } from './Navigation.elements';
import { IoLogoLinkedin, IoLogoBehance, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5';
const Navigation = ({ navType, click }) => {

    return (
        <>
            {
                navType === 'header' ? 
                (
                    <>
                        {/* <MobileIcon onClick={handleClick}>
                            <span>&nbsp;</span>
                        </MobileIcon> */}
                        <Nav>
                            <NavMenu navType={navType}>
                                <NavItems>
                                    <Link 
                                        activeClass="active" 
                                        to="home" 
                                        spy={true} 
                                        offset={-100}
                                        duration={1000}
                                        smooth={true}
                                    >    
                                    Home
                                    </Link>
                                </NavItems>
                                <NavItems>
                                    <Link 
                                        activeClass="active" 
                                        to="work" 
                                        spy={true} 
                                        offset={50}
                                        duration={1000}
                                        smooth={true}
                                    >
                                        Work
                                    </Link>
                                </NavItems>
                                <NavItems>
                                    <Link 
                                        activeClass="active" 
                                        to="about" 
                                        spy={true} 
                                        offset={50}
                                        duration={1000}
                                        smooth={true}
                                    >
                                        About
                                    </Link>
                                </NavItems>
                            </NavMenu>
                        </Nav>
                    </>
                ) : (
                    <Nav>
                        <NavMenu>
                            <NavItems>
                                <NavLinks
                                    href="https://www.linkedin.com/in/theruelmisa/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoLinkedin />
                                </NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks
                                    href="https://github.com/theruelmisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoGithub />
                                </NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks
                                    href="https://www.behance.net/theruelmisa"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoBehance />
                                </NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks
                                    href="https://www.instagram.com/ruewoulddo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoInstagram />
                                </NavLinks>
                            </NavItems>
                            
                        </NavMenu>
                    </Nav>
                )
            }
        </>
    )
}

export default Navigation
