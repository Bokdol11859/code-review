import useIssues from './use-issues';
import Table from '../../../common-ui/table';
import IssueRow from './issue-row';
import IssueHeader from './issue-header';
import useSelectedIssues from './use-selected-issues';
import Menus from '../../../common-ui/menus';

function IssueTable() {
  const { issues } = useIssues();
  const { selectIssue, selectedIssues, selectAllIssues } = useSelectedIssues();

  return (
    <Menus>
      <Table columns="1rem 1fr auto" size="L">
        <Table.Header>
          <IssueHeader
            issues={issues}
            selectedIssues={selectedIssues}
            selectAllIssues={selectAllIssues}
          />
        </Table.Header>
        <Table.Body
          data={issues}
          render={(issue) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              selectedIssues={selectedIssues}
              selectIssue={selectIssue}
            />
          )}
        />
      </Table>
    </Menus>
  );
}
export default IssueTable;
