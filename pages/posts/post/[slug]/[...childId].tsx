import Layout from '@/components/Layout/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import MdBlockComponent from '@/components/mdBlocks/mdBlock';
import { BASIC_NAV, HOME_NAV } from '@/constants/pageNavs';
import { getAllPosts, getChildPage, getSinglePost } from '@/lib/services/notionApiService';
import { pageNav } from '@/types/pageNav';
import { PostMetaData } from '@/types/postMetaData';
import { GetStaticProps } from 'next';
import { MdBlock } from 'notion-to-md/build/types';
import { useState } from 'react';

type Props = {
  mdBlocks:MdBlock[];
  pageNavs:pageNav[];
  parentTitle:string;
  childNavs:pageNav[];
  slug:string;
};

type pagePath = {
  params: { slug:string, childId:string[] }
}

export const getStaticPaths = async () => {
  const allPosts: PostMetaData[] = await getAllPosts();
  const paths: pagePath[] = (
    await Promise.all(
      allPosts.map(async (post) => {
        const postData = await getSinglePost(post.slug);
        const childPages = postData.mdBlocks.filter((block)=>block.type==='child_page')
        return childPages.map((child) => ({
          params: {
            slug: post.slug,
            childId: [child.blockId],
          },
        }));
      })
    )
  ).flat();

  return {
    paths,
    fallback: 'blocking', // ISRを有効化
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
    const currentSlug = context.params?.slug as string;
    const childparam = (context.params?.childId as string[]) || [];
    const post = await getSinglePost(currentSlug);

    let currentchild = post.mdBlocks;
    const links:string[] = [`/posts/post/${post.metadata.slug}`];
    const pageNavs:pageNav[] = post.metadata.is_basic_curriculum ?
      [HOME_NAV,BASIC_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}/1`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}]
      : [HOME_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}/1`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}];
    for (let i = 0; i < childparam.length; i++) {
      const childpages = currentchild.filter((block)=>block.type==='child_page');
      const child = childpages.filter((block)=>block.blockId===childparam[i]);
      if(child[0]!==undefined){
        links.push(child[0].blockId);
        let link = "";
        for(let k=0;k<links.length;k++){
          link = link + links[k];
        }
        pageNavs.push({title:child[0].parent.replace("## ",""), id:link});
        currentchild = child[0].children;
      }
    }
    const childPages = getChildPage(post.mdBlocks);
    const childNavs:pageNav[] = childPages.map((page)=>{
      return {
        title:page.parent.split('## ')[1],
        id:page.blockId,
        child:true,
      }
    })

    return {
        props: {
            mdBlocks:currentchild,
            pageNavs,
            parentTitle:post.metadata.title,
            childNavs,
            slug:currentSlug
        },
        revalidate: 300
    };
};

const PostChildPage = ( props : Props) => {
    const {mdBlocks, pageNavs,parentTitle,childNavs,slug} = props;
    const [openSide,setOpenSide] = useState<boolean>(false);

    return (
      <Layout headerProps={{pageNavs:pageNavs,setOpenSide}}>
        {openSide &&<div
          className='fixed top-0 left-0 w-full h-full z-40 opacity-50 duration-200'
          style={{backgroundColor:"rgb(0,0,0.5)"}}
          onClick={()=>setOpenSide(false)}
        ></div>}
        <div className='fixed w-3/5 sm:w-2/5 lg:w-1/5 h-full bg-neutral-100 z-40 pt-14 pl-3 duration-300' style={openSide ? {transform: "translateX(0%)"} : {transform: "translateX(-100%)"}}>
          <Sidebar title={parentTitle} slug={slug} childPages={childNavs} md={true} />
        </div>
        <div className="pt-24 pb-8 bg-neutral-100 sm:flex">
            {childNavs.length!==0 && (
              <div className='hidden md:block'>
                <Sidebar title={parentTitle} slug={slug} childPages={childNavs} />
              </div>
            )}
            <section className="p-5 pb-10 bg-white">
              <h2 className="w-full text-2xl font-medium">
                  {pageNavs[pageNavs.length - 1].title}
              </h2>
              <div className='border-b-2 mt-2'></div>
              {mdBlocks.map((mdBlock, i) => (
                  <MdBlockComponent mdBlock={mdBlock} depth={0} key={i} />
              ))}
            </section>
        </div>
    </Layout>
    );
};
export default PostChildPage;