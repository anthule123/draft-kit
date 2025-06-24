import Link from "next/link";
import Home from "./Home";


export default function Page(){
    return (<div>
        <div>Download sách tại: 
            <Link href="/book.pdf" className=""> Download book</Link>
        </div>
        <Home/>
    
    </div>)
}