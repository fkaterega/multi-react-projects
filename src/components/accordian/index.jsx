import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordian() {
    const [selected, setSelected] = useState(null)
    const [mult, setMult] = useState(false)
    const [ids, setIds] = useState([])

    function handleSingleSelection(getCurrentId) {
      setSelected(getCurrentId == selected ? null : getCurrentId)
    }

    function handleMult(getCurrentId) {
        let cpMult = [...ids]
        const findId = cpMult.indexOf(getCurrentId)
        if(findId == -1) cpMult.push(getCurrentId)
        else cpMult.splice(findId, 1)
    setIds(cpMult)
    }

    return <div className="wrapper">
        <button onClick={() => setMult(!mult)}>{mult ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
       <div className="accordian">
        {
            data && data.length > 0 ? 
            data.map(dataItem => <div key={dataItem.id} className="item">
                <div onClick={ mult ? ()=>handleMult(dataItem.id) : () =>handleSingleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                    selected == dataItem.id || ids.indexOf(dataItem.id) !== -1 ? <div className="content">{dataItem.answer}</div> : null
                }
            </div>)
                : <div>No data found!</div>
        }
       </div>
    
    </div>
}