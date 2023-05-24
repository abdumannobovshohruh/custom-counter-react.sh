import React, { useState } from 'react'
import './Section.css'
export default function Section() {
    const [value, setValue] = useState(0)
  return (
<>
<body>
<div className="card-center">
<h1>React custom counter</h1>
    <p>{value}</p>
    <button className="btn right" onClick={() => setValue(value +1)}>+</button>
      <button className="btn center" onClick={() => setValue(0)}>0</button>
    <button className="btn left" onClick={() => setValue(value -1)}>-</button>
</div>
</body>
</>
  )
}
