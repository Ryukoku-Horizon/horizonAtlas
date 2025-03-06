import type { GetStaticProps } from "next";
import SinglePost from "@/components/Post/SinglePost";
import { PostMetaData } from "@/types/postMetaData";
import Pagenation from "@/components/pagenation/Pagenation";
import { calculatePageNumber, getAllTags, getPostsByTag } from "@/lib/services/notionApiService";
import { HOME_NAV } from "@/constants/pageNavs";
import { pageNav } from "@/types/pageNav";
import Layout from "@/components/Layout/Layout";
import Tags from "@/components/tag/Tags";
import { useState } from "react";
import { NUMBER_OF_POSTS_PER_PAGE } from "@/constants/numberOfPage";
import { CurriculumService } from "@/lib/services/CurriculumService";

type pagePath = {
    params: { tag:string }
  }

export const getStaticPaths = async() =>{

    const allTags = await CurriculumService.getAllTags();

     const paramsList: pagePath[] = (
        await Promise.all(
            allTags.map(async (tag: string) => {
                return { params: { tag: tag } }
            })
        )
    ).flat();
    return {
        paths:paramsList,
        fallback: "blocking",
    }
  }

type Props ={
    posts:PostMetaData[];
    currentTag:string;
    allTags:string[];
}

// getStaticProps関数
export const getStaticProps: GetStaticProps = async (context) => {
    const allPosts:PostMetaData[] = await CurriculumService.getAllCurriculum();
    const currentTag:string = typeof context.params?.tag == 'string' ? context.params.tag : "";
    const allTags = await getAllTags(allPosts);
    
    const posts:PostMetaData[] = await getPostsByTag(currentTag, allPosts);
    return {
        props: {
          posts,
          allTags,
          currentTag,
        },
    };
};

const TagPageList = ({ posts, currentTag,allTags}: Props)=> {
    const tagSearchNav:pageNav = {title:`タグ検索：${currentTag}`,id:`/posts/tag/${currentTag}`};
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = calculatePageNumber(posts);
    const postsPerPage = NUMBER_OF_POSTS_PER_PAGE;
    return (
        <Layout pageNavs={[HOME_NAV,tagSearchNav]}>
            <div className="h-full w-full mx-auto font-mono">
                <main className="mt-20 mx-5 md:mx-16 mb-3 pt-4">
                    <Tags allTags={allTags} />
                    <section className="pt-5">
                        {posts.slice(postsPerPage * (currentPage - 1), postsPerPage * currentPage).map((post:PostMetaData, i:number)=>(
                        <div key={i}>
                            <SinglePost
                                postData={post}
                                isPagenationPage={true}
                            />
                        </div>
                        ))}
                    </section>
                </main>
                <Pagenation numberOfPage={numberOfPages} currentPage={currentPage} setPage={setCurrentPage} />
            </div>
        </Layout>
    );
}

export default TagPageList;