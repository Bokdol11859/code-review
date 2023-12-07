import { useSearchParams } from 'react-router-dom';
import Button from '../../../../../common-ui/button';
import useSearchParamsHandlers from '../../../use-search-params-handlers';

interface StatusFilterButtonsProps {
  openIssueCount: number | undefined;
  closeIssueCount: number | undefined;
}

function StatusFilterButtons({
  openIssueCount = 0,
  closeIssueCount = 0,
}: StatusFilterButtonsProps) {
  const [searchParams] = useSearchParams();
  const { setOpenStatusSearchParam } = useSearchParamsHandlers();

  return (
    <div className="flex gap-6">
      <Button
        variant="ghosts"
        size="M"
        flexible
        onClick={() => setOpenStatusSearchParam(true)}
        active={
          !searchParams.get('isOpen') || searchParams.get('isOpen') === 'open'
        }
      >
        <img src="/public/opened-issue.svg" alt="열린 이슈" />
        <span>열린 이슈({openIssueCount})</span>
      </Button>
      <Button
        variant="ghosts"
        size="M"
        flexible
        onClick={() => setOpenStatusSearchParam(false)}
        active={searchParams.get('isOpen') === 'close'}
      >
        <img src="/public/closed-issue.svg" alt="닫힌 이슈" />
        <span>닫힌 이슈({closeIssueCount})</span>
      </Button>
    </div>
  );
}
export default StatusFilterButtons;
