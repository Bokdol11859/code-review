import Button from '../../../../common-ui/button';
import Checkbox from '../../../../common-ui/checkbox';
import { Issue } from '../../../../domain/model/issue';
import { useSelectedIssues } from '../../SelectedIssuesContext';
import LabelFilterMenu from './label-filter-menu';
import MilestoneFilterMenu from './milestone-filter-menu';
import StatusUpdateMenu from './status-update-menu';

interface IssueHeaderProps {
  issues: Issue[] | undefined;
}

function IssueHeader({ issues }: IssueHeaderProps) {
  const { selectedIssueIds, selectAllIssues } = useSelectedIssues();

  if (selectedIssueIds.length)
    return (
      <>
        <Checkbox
          checked={Boolean(selectedIssueIds.length)}
          onChange={() => selectAllIssues(issues?.map(({ id }) => id) ?? [])}
        />

        <span className="flex items-center font-bold text-neutral-text-weak">
          {selectedIssueIds.length}개 이슈 선택
        </span>

        <StatusUpdateMenu />
      </>
    );

  return (
    <>
      <Checkbox
        checked={Boolean(selectedIssueIds.length)}
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

        <LabelFilterMenu />

        <MilestoneFilterMenu />

        <Button variant="ghosts" size="M" flexible>
          <span>작성자</span>
          <img src="/public/chevron-down.svg" alt="이슈" />
        </Button>
      </div>
    </>
  );
}
export default IssueHeader;
