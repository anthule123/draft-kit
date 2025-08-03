import Link from "next/link";
import { getAllMdxNodes } from "./lib/getAllMdxNodes";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ILink from "./components/ILink";
import { getDictionary } from "./dictionaries";

type Card = {
    metadata: any,
    path: string
}
export default async function Home({
    params,
  }: {
    params: Promise<{ lang: 'vi' |'en' }>
  }) {
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
    
    const { lang } = await params
    const dict = await getDictionary(lang) 
    return (
        <div className="">
            <LanguageSwitcher />
           {dict.book.download} <ILink href='download-book'> {dict.book["link-name"]}.</ILink>
            <div>{dict.intro.has} { cards.length} {dict.intro.articles}.</div> 
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