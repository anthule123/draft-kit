import Home from "./Home";


export default async function Page(){
    return (<div>
        <div>Download sách tại: 
            <a href="/download-book" className=""> Download book</a>
        </div>
        <Home/>
    
    </div>)
}