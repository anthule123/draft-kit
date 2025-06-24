import PanelLayout2 from "../panelLayout2";
import { getContentTree } from "./getContentTree";

export default function BlogLayout(
    {children}: {children: React.ReactNode}
){ 
    const tree = getContentTree();
    return (
        <div className=''>
            <PanelLayout2
            tree = {tree}
            children={children} />
        </div>
        
    )
}