'use client' 
import dynamic from 'next/dynamic' 

const PanelLayout = dynamic (
    ()=> import('./panelLayout'),
    {ssr: false}
); 
export  default PanelLayout