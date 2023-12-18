"use client";
import { listProps } from "@/types";
import * as S from "./styled";
import Image from "next/legacy/image";
import { SpotifyIcon, WatchPediaIcon } from "@/assets/svg";
import { CategoryBox } from "../common";
import { CategoryColorArr } from "@/utils/CategoryArray";
import YouTube from "react-youtube";

const HomeDetail = ({ data }: { data: listProps }) => {
  const match =
    data?.properties?.Trailer.url.match(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    ) ?? "";
  const videoId = match[7];
  const ImageUrl = data?.cover?.external?.url ?? data?.cover?.file?.url ?? "";

  return (
    <S.Wrapper>
      <S.LeftWrapper>
        <Image
          src={ImageUrl}
          alt={"디테일 페이지 이미지"}
          style={{ filter: "brightness(80%)" }}
          layout={"fill"}
        />
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.MiddleWrapper>
          <S.TitleWrapper>
            <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
            <S.LinkWrapper>
              <SpotifyIcon
                onClick={() => window.open(data.properties.Ost.url)}
                className="spotiIcon"
              />
              <WatchPediaIcon
                onClick={() => window.open(data.properties.WatchaPedia.url)}
                className="wpIcon"
              />
            </S.LinkWrapper>
          </S.TitleWrapper>
          <S.MiddleTop>
            <S.TitleWrapper>
              <span>
                {`${data?.properties?.Date?.date?.start}`}
                {data?.properties?.Date?.date?.end &&
                  ` ~ ${data?.properties?.Date?.date?.end}`}
              </span>
            </S.TitleWrapper>
          </S.MiddleTop>
        </S.MiddleWrapper>

        <S.DecsWrapper>
          <S.DecsLong>
            <div>
              {data?.properties?.Described?.rich_text[0]?.text?.content}
            </div>
          </S.DecsLong>
          <S.YouTubeWrapper>
            <YouTube
              videoId={videoId}
              opts={{
                width: "704",
                height: "396",
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </S.YouTubeWrapper>
          <S.DecsLong>
            <pre>
              {data?.properties?.FamousLine?.rich_text[0]?.text?.content}
            </pre>
          </S.DecsLong>
        </S.DecsWrapper>
      </S.RightWrapper>

      <S.MiddleBottom>
        <S.Grade>
          {data?.properties.Grade.multi_select.map((i) => (
            <span key={i.id}>
              <span className="myScore">{i.name}</span>
              {`/5`}
            </span>
          ))}
        </S.Grade>
        <S.CategoryBtns>
          {data?.properties.Category.multi_select.map((i) => (
            <CategoryBox
              key={i.id}
              color={CategoryColorArr[i.color] ?? i.color}
              name={i.name}
              fontSize={"15px"}
            />
          ))}
        </S.CategoryBtns>
      </S.MiddleBottom>
      <S.DetailImagOverlay>
        <Image
          src={ImageUrl}
          alt={"디테일 페이지 오버레이 이미지"}
          className={"detailImg"}
          layout={"fill"}
        />
      </S.DetailImagOverlay>
    </S.Wrapper>
  );
};

export default HomeDetail;
