import { useState, useEffect } from 'react'

export default function RandomColor() {
    const [type, setType] = useState('hex')
    const [color, setColor] = useState('#000')

    function randomUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleGenerateHexColor(){
     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f']
     let hexColor = '#'
     for(let i = 0; i < 6; i++) {
        hexColor += hex[randomUtility(hex.length)]
     }
      setColor(hexColor)
    }

    function handleGenerateRGBColor() {
        const r = randomUtility(256)
        const g = randomUtility(256)
        const b = randomUtility(256)
       setColor(`rgb(${r},${g},${b})`)

    }

    useEffect(() => {
        type ===  'hex' ? handleGenerateHexColor() : handleGenerateRGBColor()
    }, [type])

    return <div style={{backgroundColor: color}}>
        <button onClick={() => setType('hex')}>Create Hex Color</button>
        <button onClick={() => setType('rgb')}>Create RGB Color</button>
        <button onClick={type ==='hex' ? handleGenerateHexColor : handleGenerateRGBColor}>Generate Random Color</button>   
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '60px',
            marginTop: '58px',
            flexDirection: 'column'
        }}>
          <h3 >{type === 'hex' ? "Hex Color": "RGB Color"}</h3>
         <h1>{color}</h1>   
         </div> 
    </div>
}