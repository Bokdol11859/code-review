import Button from '../../../../common-ui/button';
import Checkbox from '../../../../common-ui/checkbox';
import Table from '../../../../common-ui/table';
import { Issue } from '../../../../domain/model/issue';

interface IssueHeaderProps {
  issues: Issue[] | undefined;
  selectedIssues: Brand<'id', Issue>[];
  selectAllIssues: (ids: Brand<'id', Issue>[]) => void;
}

function IssueHeader({
  issues,
  selectedIssues,
  selectAllIssues,
}: IssueHeaderProps) {
  return (
    <Table.Header>
      <Checkbox
        checked={Boolean(selectedIssues.length)}
        onChange={() => selectAllIssues(issues?.map(({ id }) => id) ?? [])}
      />

      <div className="flex gap-6">
        <Button variant="ghosts" size="M" flexible active>
          <img src="/public/opened-issue.svg" alt="열린 이슈" />
          <span>열린 이슈(2)</span>
        </Button>
        <Button variant="ghosts" size="M" flexible>
          <img src="/public/closed-issue.svg" alt="닫힌 이슈" />
          <span>닫힌 이슈(0)</span>
        </Button>
      </div>

      <div className="flex gap-8 ">
        <Button variant="ghosts" size="M" flexible>
          <span>담당자</span>
          <img src="/public/chevron-down.svg" alt="이슈" />
        </Button>
        <Button variant="ghosts" size="M" flexible>
          <span>레이블</span>
          <img src="/public/chevron-down.svg" alt="이슈" />
        </Button>
        <Button variant="ghosts" size="M" flexible>
          <span>마일스톤</span>
          <img src="/public/chevron-down.svg" alt="이슈" />
        </Button>
        <Button variant="ghosts" size="M" flexible>
          <span>작성자</span>
          <img src="/public/chevron-down.svg" alt="이슈" />
        </Button>
      </div>
    </Table.Header>
  );
}
export default IssueHeader;
