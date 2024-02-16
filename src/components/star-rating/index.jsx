import { FaStar } from 'react-icons/fa'
import { useState } from 'react'
import './styles.css'

export default function StarRating({numOfStars = 5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        
        setRating(getCurrentIndex)
    }

    function handleMouseOver(getCurrentIndex) {
       
       setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
       setHover(rating)
    }
    
    return <div className="star-rating">
        {
            [...Array(numOfStars)].map((_, i) => {
                i+=1
                let color
                if(i <= (hover || rating)) {
                    color = "#fff400"
                } else {
                    color = "#000"
                }
                
                return <FaStar
                  style={{color : color}}
                  key={i}
                  onClick={() => handleClick(i)} 
                  onMouseEnter={() => handleMouseOver(i)}
                  onMouseLeave={() => handleMouseLeave()}
                  
                  size={40}
                  
                />
            }) 
        }
    </div>
}