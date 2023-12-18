import Home from "@/components/Home";
import { listProps } from "@/types";
import { Props } from "@/types/common";
import { decodeParams } from "@/utils/decodeParams";
import { Metadata } from "next";
import { legnthRn } from "@/utils/lengthRn";
import { getFilterList } from "@/api/list";

export const metadata: Metadata = {
  title: "Filter",
};

export const FilterPage = async ({ params: { name } }: Props) => {
  const list: listProps[] = await getFilterList(decodeParams(name));
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
};

export default FilterPage;
