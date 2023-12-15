import HomeDetail from "@/components/HomeDetail";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { getDetailData } from "@/api/list";

export const metadata: Metadata = {
  title: "Detail",
};

export const DetailPage = async ({ params: { name } }: Props) => {
  const detailData = await getDetailData(decodeParams(name));
  return <HomeDetail data={detailData} />;
};

// 베포하면 notion img 유효기간때문에 정적인 데이터를 받아오면 유효기간끝나고 에러뜸
// export async function generateStaticParams() {
//   const { data } = await CustomAxios.post("");
//   const list: listProps[] = data.results;
//   return list.map((i) => ({
//     name: i.properties.Name.title[0].text.content,
//   }));
// }

export default DetailPage;
