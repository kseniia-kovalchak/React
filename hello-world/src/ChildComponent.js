import React from 'react'

function ChildComponent({greetHandler}) {
  return (
    <div>
      <button onClick={() => greetHandler('child')}>Greet Parent from Child</button>
    </div>
  )
}

export default ChildComponent
