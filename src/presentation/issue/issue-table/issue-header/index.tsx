import Button from '../../../../common-ui/button';
import Checkbox from '../../../../common-ui/checkbox';
import Menus from '../../../../common-ui/menus';
import Table from '../../../../common-ui/table';
import { Issue } from '../../../../domain/model/issue';
import useCloseIssues from '../../use-close-issues';
import useOpenIssues from '../../use-open-issues';

interface IssueHeaderProps {
  issues: Issue[] | undefined;
  selectedIssues: Brand<number, Issue>[];
  selectAllIssues: (ids: Brand<number, Issue>[]) => void;
}

function IssueHeader({
  issues,
  selectedIssues,
  selectAllIssues,
}: IssueHeaderProps) {
  const { openIssues } = useOpenIssues();
  const { closeIssues } = useCloseIssues();

  function handleOpenIssues() {
    openIssues(selectedIssues);
  }

  function handleCloseIssues() {
    closeIssues(selectedIssues);
  }

  if (selectedIssues.length)
    return (
      <>
        <Checkbox
          checked={Boolean(selectedIssues.length)}
          onChange={() => selectAllIssues(issues?.map(({ id }) => id) ?? [])}
        />

        <span className="flex items-center font-bold text-neutral-text-weak">
          {selectedIssues.length}개 이슈 선택
        </span>

        <Menus.OpenButton id="상태수정" windowPosition="right">
          <Button variant="ghosts" size="M" flexible>
            <span>상태 수정</span>
            <img src="/public/chevron-down.svg" alt="상태 수정" />
          </Button>
        </Menus.OpenButton>

        <Menus.Window id="상태수정">
          <Table columns="1fr" size="S">
            <Table.Header>상태 변경</Table.Header>
            <Table.Row>
              <span onClick={handleOpenIssues}>선택한 이슈 열기</span>
            </Table.Row>
            <Table.Row>
              <span onClick={handleCloseIssues}>선택한 이슈 닫기</span>
            </Table.Row>
          </Table>
        </Menus.Window>
      </>
    );

  return (
    <>
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
    </>
  );
}
export default IssueHeader;
