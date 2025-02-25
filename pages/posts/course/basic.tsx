import Layout from "@/components/Layout/Layout";
import SingleCourse from "@/components/Post/SingleCourse";
import { BASIC_NAV, HOME_NAV } from "@/constants/pageNavs";
import {  getEitherCourses, getPostsByCourse, getPostsByRole } from "@/lib/services/notionApiService";
import { PostMetaData } from "@/types/postMetaData";
import type { GetStaticProps,} from "next";
import { RoleData } from "@/types/role";
import { fetchRoleInfo } from "@/lib/fetchRoleInfo";
import { CurriculumService } from "@/lib/services/CurriculumService";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CustomUser } from "@/global";
import { getUsersRole } from "@/lib/getUsersRole";

type Props={
    courseAndPosts: {
        course: string;
        posts: PostMetaData[];
    }[];
    roleData:RoleData;
}

const curriculumService = new CurriculumService();

// getStaticProps関数
export const getStaticProps: GetStaticProps = async () => {
    const allPosts:PostMetaData[] = await curriculumService.getAllCurriculum();
    const basicCourse = await getEitherCourses(true,allPosts);
    const courseAndPosts = await Promise.all(basicCourse.map(async(course)=>{
        const posts = await getPostsByCourse(course,allPosts);
        return {
            course,
            posts
        }
    }))
    const roleData = await fetchRoleInfo();

    return {
        props: {
            courseAndPosts,
            roleData
        },
    };
};

export default function BasicCoursePageList({courseAndPosts,roleData}: Props){
    const [dataByRole,setDataByRole] = useState(courseAndPosts);
    const { user } = useAuth0();
    useEffect(()=>{
        async function setData(){
            const customUser = user as CustomUser;
            const usersRole = getUsersRole(customUser,roleData);
            const dataByRole:{
                course: string;
                posts: PostMetaData[];
            }[] = [];
            for(const i of courseAndPosts){
                const postsByRole = await getPostsByRole(usersRole,i.posts);
                dataByRole.push({course:i.course,posts:postsByRole});
            }
            setDataByRole(dataByRole);
        }
        setData();
    },[courseAndPosts,roleData])

    return (
        <Layout headerProps={{pageNavs:[HOME_NAV,BASIC_NAV]}} roleData={roleData}>
            <div className="h-full w-full mx-auto font-mono pt-20 ">
                <main className="w-full mt-16 mb-3">
                    <h1 className="text-5xl font-medium text-center mb-16">基礎班カリキュラム</h1>
                    <section className="gap-3 mx-auto">
                        {dataByRole.map((courseAndPosts,i)=>
                            <SingleCourse course={courseAndPosts.course} posts={courseAndPosts.posts} key={i} />
                        )}
                    </section>
                </main>
            </div>
        </Layout>  
    );
}
