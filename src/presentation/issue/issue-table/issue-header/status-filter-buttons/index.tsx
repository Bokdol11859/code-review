import { useSearchParams } from 'react-router-dom';
import Button from '../../../../../common-ui/button';

interface StatusFilterButtonsProps {
  openIssueCount: number | undefined;
  closeIssueCount: number | undefined;
}

function StatusFilterButtons({
  openIssueCount = 0,
  closeIssueCount = 0,
}: StatusFilterButtonsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClickOpenIssue() {
    searchParams.set('isOpen', 'open');
    setSearchParams(searchParams);
  }

  function handleClickCloseIssue() {
    searchParams.set('isOpen', 'close');
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-6">
      <Button
        variant="ghosts"
        size="M"
        flexible
        onClick={() => handleClickOpenIssue()}
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
        onClick={() => handleClickCloseIssue()}
        active={searchParams.get('isOpen') === 'close'}
      >
        <img src="/public/closed-issue.svg" alt="닫힌 이슈" />
        <span>닫힌 이슈({closeIssueCount})</span>
      </Button>
    </div>
  );
}
export default StatusFilterButtons;
