import Button from '../../../../../common-ui/button';
import useSearchParamsHandlers from '../../../use-search-params-handlers';

interface StatusFilterButtonsProps {
  openIssueCount: number | undefined;
  closeIssueCount: number | undefined;
}

function StatusFilterButtons({
  openIssueCount,
  closeIssueCount,
}: StatusFilterButtonsProps) {
  const { setOpenStatusSearchParam, isOpenStatus, isCloseStatus } =
    useSearchParamsHandlers();

  return (
    <div className="flex gap-6">
      <Button
        variant="ghosts"
        size="M"
        flexible
        onClick={() => setOpenStatusSearchParam(true)}
        active={isOpenStatus}
      >
        <img src="/public/opened-issue.svg" alt="열린 이슈" />
        <span>열린 이슈({openIssueCount})</span>
      </Button>
      <Button
        variant="ghosts"
        size="M"
        flexible
        onClick={() => setOpenStatusSearchParam(false)}
        active={isCloseStatus}
      >
        <img src="/public/closed-issue.svg" alt="닫힌 이슈" />
        <span>닫힌 이슈({closeIssueCount})</span>
      </Button>
    </div>
  );
}
export default StatusFilterButtons;
