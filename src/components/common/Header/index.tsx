import * as S from "./styled";
import { useEffect, useState } from "react";
import { CategoryArray } from "@/utils/CategoryArray";
import { usePathname, useRouter } from "next/navigation";
import { SearchIcon, TriangleIcon } from "@/assets/svg";
import CategorySelect from "../CategorySelect";
import { useRecoilValue } from "recoil";
import { imgAtom } from "@/atom";
import Image from "next/legacy/image";

const Header = () => {
  const router = useRouter();
  const [filterToggleBtn, setFilterToggleBtn] = useState(false);
  const [filterCategoryArray, setFilterCategoryArray] = useState<string[]>([]);
  const [field, setField] = useState("");
  const [searchValue, SetSearchValue] = useState<string>("");
  const imgUrl = useRecoilValue(imgAtom);
  const [isScroll540, setIsScroll540] = useState(false);
  const [isDetailPage, setIsDetailPage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (
      !decodeURI(pathname).includes("filter") &&
      !decodeURI(pathname).includes("search") &&
      pathname !== "/"
    ) {
      setIsDetailPage(true);
    } else setIsDetailPage(false);
  }, [pathname]);

  const handleClick = () => {
    if (!searchValue) {
      setFilterCategoryArray([]);
      return router.push("/");
    }
    router.push(`/search/${searchValue}`);
    setFilterToggleBtn(false);
  };

  const handleCategorySelectClick = (name: string) => {
    if (!filterCategoryArray.includes(name)) {
      setFilterCategoryArray([...filterCategoryArray, name]);
      handleSubmitBtnClick(field, [...filterCategoryArray, name]);
    } else {
      const arr = filterCategoryArray.filter((i) => i !== name);
      handleSubmitBtnClick(field, arr);
      setFilterCategoryArray(arr);
    }
  };

  const handleSubmitBtnClick = (field: string, arr?: string[]) => {
    if (
      arr?.length === 0 ||
      (arr === undefined && filterCategoryArray.length === 0)
    ) {
      setFilterCategoryArray([]);
      if (field !== "") {
        return router.push(`/filter/${field}`);
      } else {
        return router.push("/");
      }
    }
    const filterQuery = arr ? arr.join(" ") : filterCategoryArray.join(" ");

    router.push(`/filter/${filterQuery} ${field}`);
  };

  const handleTitleClick = () => {
    setField("");
    setFilterCategoryArray([]);
    return router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY >= 475) {
        setIsScroll540(true);
      } else {
        setIsScroll540(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderWapper style={{ display: isDetailPage ? "none" : "block" }}>
      <S.HeaderImg>
        {imgUrl[0] ? (
          <Image
            src={imgUrl[0]}
            priority={true}
            alt={"headerCoverImag"}
            layout={"fill"}
            quality={30}
            unoptimized={true}
            style={{ filter: "brightness(40%)" }}
            onClick={() => router.push(`/${imgUrl[1]}`)}
          />
        ) : (
          <Image
            src={"/img/basicPoster.webp"}
            priority={true}
            alt={"basicPosterHeaderCoverImag"}
            layout={"fill"}
            quality={30}
            unoptimized={true}
            style={{ filter: "brightness(40%)" }}
            onClick={() => router.push(`/나의 해방일지`)}
          />
        )}
      </S.HeaderImg>
      <S.HeaderTopWrapper
        style={{
          backgroundColor: isScroll540
            ? "rgb(0, 0, 0, 0.8)"
            : "rgb(0, 0, 0, 0)",
        }}
      >
        <S.LeftWapper>
          <Image
            src={"/img/w.png"}
            alt={"logoImag"}
            layout={"fixed"}
            width={67}
            height={40}
            quality={60}
            onClick={handleTitleClick}
          />
        </S.LeftWapper>
        <S.CenterWrapper>
          <S.InputWapper>
            <input
              type="text"
              placeholder="영화/드라마 이름을 입력하세요"
              value={searchValue}
              onChange={(e) => SetSearchValue(e.target.value)}
              onKeyDown={(e: any) => {
                if (e.key === "Enter") handleClick();
              }}
            />
            <label>
              <SearchIcon />
            </label>
          </S.InputWapper>
        </S.CenterWrapper>

        <S.RightWrapper>
          <S.TagBtns>
            <input
              defaultChecked
              type="radio"
              value={field}
              id="전체"
              name="분야"
              onClick={() => {
                handleSubmitBtnClick("");
                setField("");
              }}
            />
            <label htmlFor="전체">전체</label>
            <input
              type="radio"
              value={field}
              id="영화"
              name="분야"
              onClick={() => {
                handleSubmitBtnClick("영화");
                setField("영화");
              }}
            />
            <label htmlFor="영화">영화</label>
            <input
              type="radio"
              value={field}
              id="드라마"
              name="분야"
              onClick={() => {
                handleSubmitBtnClick("드라마");
                setField("드라마");
              }}
            />
            <label htmlFor="드라마">드라마</label>
          </S.TagBtns>
          <S.FilterBtn onMouseOver={() => setFilterToggleBtn(true)}>
            카테고리
            <TriangleIcon
              style={{
                transform: `rotate(${filterToggleBtn ? `270deg` : `90deg`})`,
              }}
            />
          </S.FilterBtn>

          {filterToggleBtn && (
            <>
              <S.ModalOverlay onClick={() => setFilterToggleBtn(false)} />
              <S.FilterBox onMouseLeave={() => setFilterToggleBtn(false)}>
                {CategoryArray.map((i, index) => (
                  <CategorySelect
                    onClick={() => handleCategorySelectClick(i)}
                    key={index}
                    name={i}
                    isClick={filterCategoryArray.includes(i)}
                  />
                ))}
              </S.FilterBox>
            </>
          )}
        </S.RightWrapper>
      </S.HeaderTopWrapper>
    </S.HeaderWapper>
  );
};

export default Header;
