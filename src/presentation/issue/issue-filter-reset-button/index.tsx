import Button from '../../../common-ui/button';
import useSearchParamsHandlers from '../use-search-params-handlers';

function IssueFilterResetButton() {
  const {
    isOpenStatus,
    hasLabelSearchParam,
    hasMilestoneSearchParam,
    hasLikeSearchParam,
    setOpenStatusSearchParam,
    deleteAllSearchParams,
  } = useSearchParamsHandlers();

  const initialCondition =
    isOpenStatus &&
    !hasLabelSearchParam &&
    !hasMilestoneSearchParam &&
    !hasLikeSearchParam;

  function handleClick() {
    deleteAllSearchParams();
    setOpenStatusSearchParam(true);
  }

  if (initialCondition) return null;

  return (
    <Button
      size="S"
      variant="ghosts"
      className="w-fit h-fit"
      onClick={handleClick}
    >
      <img src="/public/close-icon.svg" alt="닫기" />
      <span>현재의 검색 필터 및 정렬 지우기</span>
    </Button>
  );
}
export default IssueFilterResetButton;
