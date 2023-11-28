import Table from '../../../../common-ui/table';
import { Issue } from '../../../../domain/model/issue';
import { timeDiffFromNow } from '../../../../utils/helpers';

interface IssueRowProps {
  issue: Issue;
}

function IssueRow({ issue }: IssueRowProps) {
  const { id, title, createdAt } = issue;

  return (
    <Table.Row>
      <input type="checkbox" className="w-4 h-4 mt-2" />

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
