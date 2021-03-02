import React from 'react'

const Navigation = ({ navType }) => {



    return (
        <>
            {
                navType === 'header' ? 
                (
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Work</li>
                            <li>About</li>
                        </ul>
                    </nav>
                ) : (
                    <nav>
                        <ul>
                            <li>
                                linkedin
                            </li>
                            <li>
                                behance
                            </li>
                            <li>
                                instagram
                            </li>
                            <li>
                                github
                            </li>
                        </ul>
                    </nav>
                )
            }
        </>
    )
}

export default Navigation
