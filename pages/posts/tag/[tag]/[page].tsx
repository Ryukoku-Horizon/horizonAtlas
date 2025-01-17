import type { GetStaticProps, InferGetStaticPropsType } from "next";
import SinglePost from "@/components/Post/SinglePost";
import { PostMetaData } from "@/types/postMetaData";
import Pagenation from "@/components/pagenation/Pagenation";
import { getAllPosts, getAllTags, getNumberOfPages, getPostsByTagAndPage } from "@/lib/services/notionApiService";
import { HOME_NAV, SEARCH_NAV } from "@/constants/pageNavs";
import { pageNav } from "@/types/pageNav";
import Layout from "@/components/Layout/Layout";

type pagePath = {
    params: { tag:string, page:string }
  }

export const getStaticPaths = async() =>{

    const allPosts = await getAllPosts();
    const allTags = await getAllTags(allPosts);

     const paramsList: pagePath[] = (
        await Promise.all(
            allTags.map(async (tag: string) => {
                const numberOfPagesByTag = await getNumberOfPages(allPosts,tag);
                return Array.from({ length: numberOfPagesByTag }, (_, i) => ({
                    params: { tag: tag, page: (i + 1).toString() },
                }));
            })
        )
    ).flat();
    return {
        paths:paramsList,
        fallback:'blocking'
    }
  }

// getStaticProps関数
export const getStaticProps: GetStaticProps = async (context) => {
    const currentPage:string = typeof context.params?.page == 'string' ? context.params.page : "1";
    const currentTag:string = typeof context.params?.tag == 'string' ? context.params.tag : "";
    const allPosts = await getAllPosts();
    const numberOfPages:number = await getNumberOfPages(allPosts,currentTag);
    // console.log(numberOfPages);

    const posts:PostMetaData[] = await getPostsByTagAndPage(currentTag, parseInt(currentPage, 10),allPosts);
    return {
        props: {
          posts,
          numberOfPages,
          currentPage,
          currentTag,
        },
        revalidate: 600
    };
};

const blogTagPageList = ({ posts,numberOfPages,currentPage, currentTag}: InferGetStaticPropsType<typeof getStaticProps>)=> {
    const tagSearchNav:pageNav = {title:`タグ検索：${currentTag}`,id:`/posts/tag/${currentTag}/${currentPage}`};
    return (
        <Layout headerProps={{pageNavs:[HOME_NAV,SEARCH_NAV,tagSearchNav]}}>
            <div className="container h-full w-full mx-auto font-mono">
            <main className="container w-full mt-16 mb-3">
                <section className="sm:grid grid-cols-2 gap-3 mx-auto">
                    {posts.map((post:PostMetaData, i:number)=>(
                    <div key={i}>
                        <SinglePost
                            postData={post}
                            isPagenationPage={true}
                        />
                    </div>
                    ))}
                </section>
            </main>
            <Pagenation numberOfPage={numberOfPages} currentPage={currentPage} tag={currentTag} />
            </div>
        </Layout>
    );
}

export default blogTagPageList;