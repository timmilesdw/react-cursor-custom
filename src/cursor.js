import React from 'react'
import styled from 'styled-components'
export const Cursor = ({
  x,
  y,
  color,
  noRing,
  mixBlend,
  dotSize,
  ringSize,
  transitionTime
}) => {
  
  
  
  return (
    <div>
      <CursorDot
        color={color}
        mixBlend={mixBlend}
        dotSize={dotSize}
        x={x}
        y={y}
      />
      <CursorRing
        noRing={noRing}
        color={color}
        mixBlend={mixBlend}
        transitionTime={transitionTime}
        ringSize={ringSize}
        x={x}
        y={y}
      />
    </div>
  )
}

const CursorDot = styled.div.attrs((props) => ({
  style: {
    transform: `translate(${props.x}px, ${props.y}px)`
  }
}))`
  width: ${(props) => (`${props.dotSize || 8}px`)};
  height: ${(props) => (`${props.dotSize || 8}px`)};
  position: absolute;
  transform: translate(-50%, -50%);
  background: ${(props) => props.color || 'black'};
  z-index: 999;
  border-radius: 100%;
  pointer-events: none;
  overflow: auto;
  mix-blend-mode: ${(props) => (props.mixBlend ? 'difference' : 'none')};
`
const CursorRing = styled.div.attrs((props) => ({
  style: {
    transform: `translate(
        ${props.x + (props.dotSize || 8 - props.ringSize) / 2}px,
        ${props.y + (props.dotSize || 8 - props.ringSize) / 2}px
    )`
  }
}))`
  width: ${(props) => (`${props.ringSize|| 36}px`)};
  height: ${(props) => (`${props.ringSize|| 36}px`)};
  border-radius: 100%;
  border: ${(props) => `2px solid ${props.color || 'black'}`};
  transition: ${(props) => `transform ${props.transitionTime || 100}ms ease-out`};
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 999;
  position: absolute;
  mix-blend-mode: ${(props) => (props.mixBlend ? 'difference' : 'none')};
  display: ${(props) => (props.noRing ? 'none' : 'block')};
`
