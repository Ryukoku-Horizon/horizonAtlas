import React from 'react';
import UserBlock from '../Header/UserInfo/userBlock';
import SearchField from '../Header/searchField/searchField';
import Tags from '@/components/tag/Tags';
import { pageNav } from '@/types/pageNav';
import Link from 'next/link';

type Props={
    openbar:boolean;
    setOpenbar:React.Dispatch<React.SetStateAction<boolean>>;
    allTags:string[];
    pageNav?:{
        title:string;
        slug:string;
        childPages:pageNav[];
    }
}

function Sidebar({openbar,setOpenbar,allTags,pageNav}:Props) {

    const getPageHeight = () => {
        const pageHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
        return pageHeight;
    };

    return (
        <div>
            {openbar &&<div 
                onClick={()=>setOpenbar(false)}
                className='bg-black opacity-45 fixed w-full top-0 block sm:hidden' style={{height:`${getPageHeight()}px`,zIndex:"9998"}}>
                </div>}
            <div className='fixed w-7/12 top-0 right-0 block sm:hidden bg-white duration-700'
            style={openbar ? {transform: "translateX(0px)",height:`${getPageHeight()}px`,zIndex:"9999"}:{transform:"translateX(130%)"}}>
                <ul>
                    <li className='flex items-center justify-between mr-5'>
                        <div></div>
                        <p onClick={()=>setOpenbar(false)} className='cursor-pointer text-4xl text-neutral-500'>×</p>
                    </li>
                    <li className='flex items-center justify-between mr-5'>
                        <div></div>
                        <UserBlock />
                    </li>
                    <li className='px-5 mt-2'>
                        <SearchField searchKeyWord={''} />
                    </li>
                    <li className='px-5 mt-2'>
                        <Tags allTags={allTags} />
                    </li>
                    <li className='px-5 mt-2'>
                        {pageNav!==undefined && <div className='p-1 border border-neutral-400 rounded'>
                            <p className='text-base'>{pageNav.title}</p>
                            {pageNav.childPages.map((nav,i)=>{
                                return (<ul key={i} className='pl-1.5'>
                                    <Link className='truncate text-neutral-500 underline hover:text-neutral-800 mt-0.5' 
                                        href={`/posts/post/${pageNav.slug}/${nav.id}`}>{nav.title}</Link>
                                </ul>)
                            })}
                        </div>}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar