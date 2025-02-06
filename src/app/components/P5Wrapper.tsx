'use client'
import { useEffect, useRef } from "react";
import p5 from 'p5'



const P5Wrapper: React.FC<P5WrapperProps>=({sketch})=> {
    const p5ContainerRef = useRef<HTMLDivElement>(null)
    useEffect(() =>{
        //create p5 instance
        const p5Instance = new p5(sketch, p5ContainerRef.current!)
        //clean up
        return ()=>{
            p5Instance.remove()
        }
        
    }, [sketch])
    return <div ref={p5ContainerRef} ></div>
}

export default P5Wrapper