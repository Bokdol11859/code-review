import { NotionAPI } from 'notion-client';

import ResumeClient from '@/Component/Notion/NotionresumeClient';
export type ReturnTypeofNotionRecord = ReturnType<typeof notion.getPage>;
const notion = new NotionAPI();
export default async function ResumePage() {
  const recordMap = await notion.getPage(
    `https://notion-api.splitbee.io/v1/page/${process.env.NOTION_PAGE_ID}`
  );

  return <ResumeClient recordMap={recordMap} />;
}
