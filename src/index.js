import React, { useState, useEffect } from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import { Cursor } from './cursor'

export const CursorProvider = ({ children, color, noRing, mixBlend, dotSize, ringSize, transitionTime }) => {
    useEffect(() => {
        { window.innerWidth < 600 ? setVisibility(false) : setVisibility(true) }
        { cursor.x > window.innerWidth ? setCursor({x: x--, y: y}) : null }
        { cursor.y > window.innerHeight ? setCursor({x: x, y: y--}) : null }
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