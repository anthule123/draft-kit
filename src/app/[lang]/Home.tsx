import Link from "next/link";
import { getAllMdxNodes } from "./lib/getAllMdxNodes";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ILink from "./components/ILink";

type Card = {
    metadata: any,
    path: string
}
export default async function Home(){
    const nodes = getAllMdxNodes();
    const cards = [];
    for (const node of nodes){
        let slugPath = decodeURIComponent(node.path);
        slugPath = slugPath.replace('/blog/', '');
        const { metadata} = await import(`@/content/blog/${slugPath}.mdx`) 
        
        let card = {} as Card;
        card.metadata = metadata;
        card.path = (node.path);
        cards.push(card)
    }
    cards.sort((a,b) => b.metadata?.date.localeCompare(a.metadata?.date))
    
    return (
        <div className="">
            <LanguageSwitcher />
            Tải sách tại <ILink href='download-book'> Link tải sách</ILink>
            <div>Có { cards.length} bài viết.</div> 
            {cards.map((card, index) => (
                <div className="card" key = {`${index}`}>
                    <ILink href= {card.path}><h3>{card.metadata?.title}</h3>
                    </ILink>
                    {card.metadata?.date}

                </div>
            ))}
        </div>
    )
   
}