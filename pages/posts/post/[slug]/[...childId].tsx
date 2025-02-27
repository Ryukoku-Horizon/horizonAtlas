import Layout from '@/components/Layout/Layout';
import SideBlock from '@/components/SideBlock/SideBlock';
import MdBlockComponent from '@/components/mdBlocks/mdBlock';
import { BASIC_NAV, HOME_NAV } from '@/constants/pageNavs';
import { pageNav } from '@/types/pageNav';
import { PostMetaData } from '@/types/postMetaData';
import { GetStaticProps } from 'next';
import { MdBlock } from 'notion-to-md/build/types';
import { fetchRoleInfo } from '@/lib/fetchRoleInfo';
import { RoleData } from '@/types/role';
import { CurriculumService } from '@/lib/services/CurriculumService';
import { PageDataService } from '@/lib/services/PageDataService';

type Props = {
  mdBlocks:MdBlock[];
  pageNavs:pageNav[];
  parentTitle:string;
  childNavs:pageNav[];
  slug:string;
  roleData:RoleData;
};

type pagePath = {
  params: { slug:string, childId:string[] }
}

const curriculumService = new CurriculumService();
const pageDataService = new PageDataService();

export const getStaticPaths = async () => {
  const allPosts:PostMetaData[] = await curriculumService.getAllCurriculum();
  const childPages = await pageDataService.getPageDataByType('child_page');

  const paths:pagePath[]=(
      allPosts.map((post)=>{
        const children = childPages.filter((item)=>item.slug===post.slug);
        return children.map((child)=>{
          return {
            params:{
              slug:post.slug,
              childId:[child.blockId]
            }
          }
        })
      }).flat()
  )

  return {
    paths,
    fallback: 'blocking', // ISRを有効化
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
    const currentSlug = context.params?.slug as string;
    const childparam = (context.params?.childId as string[]) || [];
    const mdBlocks:MdBlock[] = await pageDataService.getPageDataByPageId(childparam[0]);
    const singlePost:PostMetaData = await curriculumService.getCurriculumBySlug(currentSlug);
    const post ={
      mdBlocks,
      metadata:singlePost
    }
    const childPagesBySlug = await pageDataService.getPageDataByTypeAndSlug('child_page',currentSlug);

    const links:string[] = [`/posts/post/${post.metadata.slug}`];
    const pageNavs:pageNav[] = post.metadata.is_basic_curriculum ?
      [HOME_NAV,BASIC_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}]
      : [HOME_NAV,{title:post.metadata.category,id:`/posts/course/${post.metadata.category}`},{title:post.metadata.title,id:`/posts/post/${post.metadata.slug}`}];
    for (let i = 0; i < childparam.length; i++) {
      // const childpages = currentchild.filter((block)=>block.type==='child_page');
      const child = childPagesBySlug.filter((item)=>item.blockId===childparam[i]);
      if(child[0]!==undefined){
        links.push(child[0].blockId);
        let link = "";
        for(let k=0;k<links.length;k++){
          link = link + links[k];
        }
        pageNavs.push({title:child[0].data.replace("## ",""), id:link});
      }
    }
    const childNavs:pageNav[] = childPagesBySlug.map((page)=>{
      return {
        title:page.data.split('## ')[1],
        id:page.blockId,
        child:true,
      }
    })
    const roleData = await fetchRoleInfo();
    return {
        props: {
            mdBlocks:mdBlocks,
            pageNavs,
            parentTitle:singlePost.title,
            childNavs,
            slug:currentSlug,
            roleData,
        },
    };
};

const PostChildPage = ( props : Props) => {
    const {mdBlocks, pageNavs,parentTitle,childNavs,slug,roleData} = props;

    return (
      <Layout headerProps={{pageNavs:pageNavs}} sideNavProps={{title:parentTitle,slug,childPages:childNavs}} roleData={roleData}>
        <div className='mt-24'>
          <section className="p-5 pb-10 md:w-3/4 bg-white">
            <h2 className="w-full text-2xl font-medium">
                {pageNavs[pageNavs.length - 1].title}
            </h2>
            <div className='border-b-2 mt-2'></div>
            {mdBlocks.map((mdBlock, i) => (
                <MdBlockComponent mdBlock={mdBlock} depth={0} slug={slug} key={i} />
            ))}
          </section>
          <div className='hidden md:block md:w-1/4 mt-5'>
            <SideBlock title={parentTitle} slug={slug} childPages={childNavs} />
          </div>
        </div>
    </Layout>
    );
};
export default PostChildPage;