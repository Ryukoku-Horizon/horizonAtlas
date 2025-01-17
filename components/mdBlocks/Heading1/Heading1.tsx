import { searchMDKeyword } from '@/lib/mdBlockHelper'
import { MdBlock } from 'notion-to-md/build/types'
import React from 'react'

type Props={
    mdBlock:MdBlock
    depth:number
}

export default function Heading1(props:Props) {
    const {mdBlock} = props;
    const text = mdBlock.parent.slice(2);
    const textBlocks = searchMDKeyword(text);

    return (
        <div>
            <h1 className='mb-1 mt-8 font-bold text-3xl'>
                {textBlocks.map((block, i)=>(
                    <span style={block.style} key={i}>{block.text}</span>
                ))}
            </h1>
        </div>
    )
}
