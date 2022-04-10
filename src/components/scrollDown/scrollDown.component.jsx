import React from 'react';
import { useEffect, useState } from 'react'
import { ReactComponent as ArrowDown } from '../../assets/arrowdown.svg'

function ScrollDown() {
    const [scrollDown, setscrollDown] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
               setscrollDown(true)
            }
            else {
                setscrollDown(false)
            }
       })
    }, [])

    const toScrollDown = () => {
        window.scrollTo({
            top: 1000,
            behavior:"smooth"
            
        })
    }
    return (
        <div className='title'>
            { scrollDown && (
                <button onClick={toScrollDown}>
                    <ArrowDown  className='icon' />
                </button>
            )

            }
        </div>
    )
}

export default ScrollDown
