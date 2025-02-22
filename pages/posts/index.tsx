import Layout from "@/components/Layout/Layout";
import SingleCourse from "@/components/Post/SingleCourse";
import BasicCurriculum from "@/components/Post/basicCurriculum";
import { HOME_NAV } from "@/constants/pageNavs";
import {  getAllTags, getEitherCourses, getPostsByCourse } from "@/lib/services/notionApiService";
import { PostMetaData } from "@/types/postMetaData";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import SearchField from "@/components/SearchField/SearchField";
import Tags from "@/components/tag/Tags";
import { RoleData } from "@/types/role";
import { fetchRoleInfo } from "@/lib/fetchRoleInfo";

type Props = {
  courseAndPosts:{
    course: string;
    posts:PostMetaData[];
  }[];
  allTags:string[];
  roleData:RoleData;
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "public", "notion_data", "notionDatabase.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(jsonData);

  const allPosts: PostMetaData[] = Array.isArray(parsedData) ? parsedData : parsedData.posts || [];
  if (!Array.isArray(allPosts)) {
    throw new Error("notionDatabase.jsonのデータが配列ではありません！");
  }
  const notBasicCourses = await getEitherCourses(false,allPosts);
  const removeEmptyCourses = notBasicCourses.filter((course)=>course!=="")
  const courseAndPosts = await Promise.all(removeEmptyCourses.map(async(course)=>{
    const posts = await getPostsByCourse(course,allPosts);
    return {
        course,
        posts
    }
  }))
  const allTags = await getAllTags(allPosts);
  const roleData:RoleData = await fetchRoleInfo();
  return {
      props: {
        courseAndPosts,
        allTags,
        roleData
      },
      // revalidate: 600
  };
};

const PostsPage = ({ courseAndPosts,allTags,roleData }: Props)=> {
  console.log(roleData)
    return (
      <Layout headerProps={{pageNavs:[HOME_NAV],allTags:allTags}} roleData={roleData}>  
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
          <div className="container max-w-screen-lg mx-auto font-mono pt-20 px-5">
            <main className="mt-16 mb-3 flex flex-col gap-5">
          <section className="mb-10">
            <BasicCurriculum />
            {courseAndPosts.map((courseAndPosts,i)=>{
              return <SingleCourse course={courseAndPosts.course} posts={courseAndPosts.posts} key={i} />
            })}
          </section>
          <SearchField searchKeyWord={""} />
          <Tags allTags={allTags} />
        </main>
        </div>
      </div>
      </Layout>
    );
  }

  export default  PostsPage;