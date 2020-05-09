import React, { useState, useEffect } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Cursor } from './cursor'

const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
];

const detectMob = (match) => {
    return match.some((match) => {
        return navigator.userAgent.match(match);
    });
}

export const CursorProvider = ({ children, color, noRing, mixBlend, dotSize, ringSize, transitionTime }) => {
    useEffect(() => {
        { cursor.x > window.innerWidth ? setCursor({x: x - 1, y: y}) : null }
        { cursor.y > window.innerHeight ? setCursor({x: x, y: y - 1}) : null }
        { detectMob(toMatch) ? setVisibility(false) : setVisibility(true) }
    })
    
    

    const [cursor, setCursor] = useState({x: 0, y: 0})
    const [visibility, setVisibility] = useState(true)

    return (
    <CursorWrapper onMouseMove={(e) => setCursor({x: e.pageX, y: e.pageY})}>
        <GlobalStyle/>
        {visibility ? <Cursor 
                        color={color} 
                        noRing={noRing} 
                        ringSize={ringSize}
                        transitionTime={transitionTime}
                        x={cursor.x} 
                        y={cursor.y}/> 
                : null}
        {children}
    </CursorWrapper>)
}

const CursorWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
`
const GlobalStyle = createGlobalStyle`
* {
    cursor: none !important;
}
`