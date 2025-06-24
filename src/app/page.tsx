import Link from "next/link";
import Home from "./Home";


export default async function Page(){
    return (<div>
        <div>Download sách tại: 
            <Link href="/download-book" className=""> Download book</Link>
        </div>
        <Home/>
    
    </div>)
}