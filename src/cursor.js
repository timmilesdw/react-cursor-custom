import React from 'react'
import styled from 'styled-components'

export const Cursor = ({x, y, color, noRing, mixBlend, dotSize, ringSize, transitionTime}) => {
    return (
        <div>
            <CursorDot color={color} 
                        mixBlend={mixBlend} 
                        dotSize={dotSize} 
                        x={x} y={y}/>
            <CursorRing noRing={noRing} color={color} mixBlend={mixBlend} transitionTime={transitionTime} ringSize={ringSize} x={x} y={y}/>
        </div>
        
    )
}
const CursorDot = styled.div.attrs(props => ({
    style: {
        transform: `translate(${props.x}px, ${props.y}px)`
    },
    }))`
    width: ${props => props.dotSize ? props.dotSize+"px" : '8px'};
    height: ${props => props.dotSize ? props.dotSize+"px" : '8px'};
    position: absolute;
    transform: translate(-50%, -50%);
    background: ${props => props.color ? props.color : 'black'};
    z-index: 999;
    border-radius: 100%;
    pointer-events: none;
    overflow: auto;
    mix-blend-mode: ${props => props.mixBlend ? 'difference' : 'none'}
`
const CursorRing = styled.div.attrs(props => ({
    style: {
        transform: `translate(${props.x - props.ringSize / 2.2}px, ${props.y - props.ringSize / 2.2}px)`
    },
    }))`
    width: ${props => props.ringSize ? props.ringSize+"px" : '36px'};
    height: ${props => props.ringSize ? props.ringSize+"px" : '36px'};
    border-radius: 100%;
    border: ${props => props.color ? `2px solid ${props.color}` : '2px solid black'};
    transition: ${props => props.transitionTime ? `transform ${props.transitionTime}ms ease-out` : 'transform 0.1s ease-out'};
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 999;
    position: absolute;
    mix-blend-mode: ${props => props.mixBlend ? 'difference' : 'none'};
    display: ${props => props.noRing ? 'none' : 'block'}
`