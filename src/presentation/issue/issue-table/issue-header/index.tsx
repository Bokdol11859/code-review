import Button from '../../../../common-ui/button';
import Checkbox from '../../../../common-ui/checkbox';
import { IssuesSummary } from '../../../../domain/repository/issue-repository';
import { useSelectedIssues } from '../selected-issues-context';
import LabelFilterMenu from './label-filter-menu';
import MilestoneFilterMenu from './milestone-filter-menu';
import StatusFilterButtons from './status-filter-buttons';
import StatusUpdateMenu from './status-update-menu';

interface IssueHeaderProps {
  issues: IssuesSummary['data'] | undefined;
  openIssueCount: number | undefined;
  closeIssueCount: number | undefined;
}

function IssueHeader({
  issues,
  openIssueCount,
  closeIssueCount,
}: IssueHeaderProps) {
  const { selectedIssueIds, selectAllIssues, deselectAllIssues } =
    useSelectedIssues();

  if (selectedIssueIds.length)
    return (
      <>
        <Checkbox
          checked={Boolean(selectedIssueIds.length)}
          onChange={() => deselectAllIssues()}
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

      <StatusFilterButtons
        openIssueCount={openIssueCount}
        closeIssueCount={closeIssueCount}
      />

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
