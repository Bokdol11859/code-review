import Button from '../../../../../common-ui/button';
import Menus from '../../../../../common-ui/menus';
import Table from '../../../../../common-ui/table';
import { useSelectedIssues } from '../../../selected-issues-context';
import useCloseIssues from '../../../use-close-issues';
import useOpenIssues from '../../../use-open-issues';

function StatusUpdateMenu() {
  const { openIssues } = useOpenIssues();
  const { closeIssues } = useCloseIssues();
  const { selectedIssueIds, deselectAllIssues } = useSelectedIssues();

  function handleOpenIssues() {
    openIssues(selectedIssueIds);
    deselectAllIssues();
  }

  function handleCloseIssues() {
    closeIssues(selectedIssueIds);
    deselectAllIssues();
  }

  return (
    <>
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
            <Menus.Button onClick={handleOpenIssues}>
              선택한 이슈 열기
            </Menus.Button>
          </Table.Row>
          <Table.Row>
            <Menus.Button onClick={handleCloseIssues}>
              선택한 이슈 닫기
            </Menus.Button>
          </Table.Row>
        </Table>
      </Menus.Window>
    </>
  );
}
export default StatusUpdateMenu;
