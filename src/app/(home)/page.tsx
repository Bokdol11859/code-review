import { getAllList } from "@/api/list";
import Home from "@/components/Home";
import { listProps } from "@/types";
import { legnthRn } from "@/utils/lengthRn";

export default async function HomePage() {
  const list: listProps[] = await getAllList();
  const rn = legnthRn(list);

  return (
    <Home
      list={list}
      coverImgUrl={
        list[rn]?.cover?.external?.url ?? list[rn]?.cover?.file?.url ?? ""
      }
      coverImgTitle={list[rn]?.properties.Name.title[0].text.content}
    />
  );
}
