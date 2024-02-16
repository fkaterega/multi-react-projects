import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'


export default function ImageSlider({url, limit}) {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errMess, setErrMess] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
     try {
        setLoading(true)
       const res = await fetch(`${getUrl}?page=1&limit=${limit}`)
       const data = await res.json()
       if(data) {
        setImages(data)
        setLoading(false)
       }
     } catch(e) {
       
         setErrMess(e.errMess)
         setLoading(false)
     }
    }

    useEffect(() => {
        if(url) {
            fetchImages(url)
        }
    }, [url])

    if(loading) {
        return <div>Loading...</div>
    }

    if(errMess) {
        return <div>Something went wrong!</div>
    }

    function handlePrevious() {
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
     setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return <div className="container">
        <BsArrowLeftCircleFill  onClick={handlePrevious} className="arrow arrow-left"/>
       
        {
          images && images.length ?  
          images.map((image, index )=> {
            return <img 
            key={image.id}
            alt='computer image'
            src={image.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          })
          
          : null  
        }
       
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
        <span className="circle-indicators">
            {
                images && images.length ?  
                images.map((_, i) => {
                   return <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={currentSlide === i ? "current-indicator" : "current-indicator inactive-indicator"}
                    ></button>
                })
                
                : null
            }
        </span>
    </div>
}