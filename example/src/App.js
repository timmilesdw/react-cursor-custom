import React, { useState } from 'react'
import { CursorProvider } from 'react-cursor-custom'

import styled from 'styled-components'

const App = () => {
  
  const [ color, setColor ] = useState('black')
  const [ transition, setTransition ] = useState(100)
  const [ ring, setRing ] = useState(false)
  const [ ringSize, setRingSize ] = useState(36)

  return (
    <CursorProvider color={color} 
                    noRing={ring}  
                    ringSize={ringSize}
                    transitionTime={transition}>
      <div>
      <Text>Simple React Custom Cursor Component<br/>No lags is achieved by using transform property, which is rendered by GPU, not CPU<br/>You can play with props in the form under</Text>
      
      <ControlsWrapper>
        <Controls>
          <div>Color</div>
          <div>color prop :string</div>
          <input type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Type color here in hex or valid css color like yellow"
          />
        </Controls>
        <Controls>
          <div>Transition in ms</div>
          <div>transitionTime prop :number</div>
          <input
          value={transition}
          onChange={e => setTransition(e.target.value)}
          placeholder="Type transition duration in ms"
          />
        </Controls>
        <Controls>
          <div>Ring</div>
          <div>noRing prop :boolean</div>
          <button onClick={() => setRing(!ring)}>{ring ? 'Enable ring' : 'Disable ring'}</button>
        </Controls>
        <Controls>
          <div>Ring Size</div>
          <div>ringSize prop :number</div>
          <input
          value={ringSize}
          onChange={e => setRingSize(e.target.value)}
          placeholder="Type size of the ring"
          />
        </Controls>
      </ControlsWrapper>
        <Text style={{marginTop: "5%"}}>
        In physics, string theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional objects called strings. It describes how these strings propagate through space and interact with each other. On distance scales larger than the string scale, a string looks just like an ordinary particle, with its mass, charge, and other properties determined by the vibrational state of the string. In string theory, one of the many vibrational states of the string corresponds to the graviton, a quantum mechanical particle that carries gravitational force. Thus string theory is a theory of quantum gravity.

        String theory is a broad and varied subject that attempts to address a number of deep questions of fundamental physics. String theory has been applied to a variety of problems in black hole physics, early universe cosmology, nuclear physics, and condensed matter physics, and it has stimulated a number of major developments in pure mathematics. Because string theory potentially provides a unified description of gravity and particle physics, it is a candidate for a theory of everything, a self-contained mathematical model that describes all fundamental forces and forms of matter. Despite much work on these problems, it is not known to what extent string theory describes the real world or how much freedom the theory allows in the choice of its details.

        String theory was first studied in the late 1960s as a theory of the strong nuclear force, before being abandoned in favor of quantum chromodynamics. Subsequently, it was realized that the very properties that made string theory unsuitable as a theory of nuclear physics made it a promising candidate for a quantum theory of gravity. The earliest version of string theory, bosonic string theory, incorporated only the class of particles known as bosons. It later developed into superstring theory, which posits a connection called supersymmetry between bosons and the class of particles called fermions. Five consistent versions of superstring theory were developed before it was conjectured in the mid-1990s that they were all different limiting cases of a single theory in 11 dimensions known as M-theory. In late 1997, theorists discovered an important relationship called the AdS/CFT correspondence, which relates string theory to another type of physical theory called a quantum field theory.

        One of the challenges of string theory is that the full theory does not have a satisfactory definition in all circumstances. Another issue is that the theory is thought to describe an enormous landscape of possible universes, which has complicated efforts to develop theories of particle physics based on string theory. These issues have led some in the community to criticize these approaches to physics, and to question the value of continued research on string theory unification.
        </Text>
      </div>
    </CursorProvider>
  )
}

export default App;


const ControlsWrapper = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 50%
`
const Text = styled.div`
  font-size: 36px;
  text-align: center;
  height: 300px;
`