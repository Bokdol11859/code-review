import Checkbox from '../../../../common-ui/checkbox';
import Table from '../../../../common-ui/table';
import { Issue } from '../../../../domain/model/issue';
import { timeDiffFromNow } from '../../../../utils/helpers';

interface IssueRowProps {
  issue: Issue;
  selectedIssues: Brand<'id', Issue>[];
  selectIssue: (id: Brand<'id', Issue>) => void;
}

function IssueRow({ issue, selectIssue, selectedIssues }: IssueRowProps) {
  const { id, title, createdAt } = issue;

  return (
    <Table.Row>
      <Checkbox
        checked={selectedIssues.includes(id)}
        onChange={() => selectIssue(id)}
      />

      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <img src="/public/issue.svg" alt="이슈" />
          <span className="text-neutral-text-strong font-bold">{title}</span>
        </div>

        <div className="flex gap-4 text-neutral-text-weak">
          <span># {id}</span>
          <span>{`${timeDiffFromNow(createdAt)} 전에 작성되었습니다.`}</span>
        </div>
      </div>
    </Table.Row>
  );
}
export default IssueRow;
