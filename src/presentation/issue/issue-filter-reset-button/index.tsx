import Button from '../../../common-ui/button';
import useSearchParamsHandlers from '../use-search-params-handlers';

function IssueFilterResetButton() {
  const {
    isOpenStatus,
    hasLabelSearchParam,
    hasMilestoneSearchParam,
    hasLikeSearchParam,
    initSearchParams,
  } = useSearchParamsHandlers();

  const initialCondition =
    isOpenStatus &&
    !hasLabelSearchParam &&
    !hasMilestoneSearchParam &&
    !hasLikeSearchParam;

  function handleClick() {
    initSearchParams();
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
