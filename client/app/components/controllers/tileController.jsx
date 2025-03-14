import React from 'react'
import MazePart from '../sprites/mazePart'

export default function TileController({position,type,size,rotation,isFlip}) {
  return (
    <span
          style={{
            position: "absolute",
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        >
          <MazePart type={type} size={size} rotation={rotation} isFlip={isFlip} />
        </span>
  )
}
