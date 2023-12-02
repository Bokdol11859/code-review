import Checkbox from '../../../../common-ui/checkbox';
import Label from '../../../../common-ui/label';
import Table from '../../../../common-ui/table';
import { Issue } from '../../../../domain/model/issue';
import { timeDiffFromNow } from '../../../../utils/helpers';
import { useSelectedIssues } from '../../SelectedIssuesContext';

interface IssueRowProps {
  issue: Issue;
}

function IssueRow({ issue }: IssueRowProps) {
  const { id, title, createdAt, label, milestone } = issue;
  const { selectedIssueIds, toggleIssueSelection } = useSelectedIssues();

  return (
    <Table.Row>
      <Checkbox
        checked={selectedIssueIds.includes(id)}
        onChange={() => toggleIssueSelection(id)}
      />

      <div className="flex flex-col gap-2">
        <div className="flex gap-1">
          <img src="/public/issue.svg" alt="이슈" />
          <span className="text-neutral-text-strong font-bold">{title}</span>

          {label && (
            <Label
              textColor={label.textColor}
              backgroundColor={label.backgroundColor}
              key={id}
            >
              {label.title}
            </Label>
          )}
        </div>

        <div className="flex gap-4 text-neutral-text-weak">
          <span># {id}</span>
          <span>{`${timeDiffFromNow(createdAt)} 전에 작성되었습니다`}</span>
          {milestone && (
            <div className="flex gap-2">
              <img src="/public/milestone.svg" alt="마일스톤" />
              <span>{milestone.title}</span>
            </div>
          )}
        </div>
      </div>
    </Table.Row>
  );
}
export default IssueRow;
