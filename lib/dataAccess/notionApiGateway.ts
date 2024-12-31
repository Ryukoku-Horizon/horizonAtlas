import { PostMetaData } from "@/types/postMetaData";
import { Client, isFullPage, } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_TOKEN2,
});

const n2m = new NotionToMarkdown({notionClient: notion});

// テスト用
export const getAllMetaData = async()=>{
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        page_size: 100,
    });

    // 型ガードを使用して、PageObjectResponse型のみに絞り込む
    const allPosts = posts.results.filter(isFullPage);

    return allPosts;
}

export const getAllData = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID2!,
        page_size: 100,
        filter:{
            property: "published",
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: "date",
                direction: "descending"
            }
        ]
    });

    // 型ガードを使用して、PageObjectResponse型のみに絞り込む
    const allPosts = posts.results.filter(isFullPage);

    return allPosts;
};

export const getSinglePage = async (slug:string)=>{
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID2!,
        filter: {
            property: 'slug',
            formula: {
                string:{
                    equals: slug,
                }
            }
        }
    });

    const page = response.results.find(isFullPage);
    if (!page) {
        throw new Error('Page not found');
      }

    const mdBlocks = await n2m.pageToMarkdown(page.id);

    return {
        page,
        mdBlocks
    }
};
