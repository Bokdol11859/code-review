import useIssues from '../use-issues';
import Table from '../../../common-ui/table';
import IssueRow from './issue-row';
import IssueHeader from './issue-header';
import Menus from '../../../common-ui/menus';
import { SelectedIssuesProvider } from '../SelectedIssuesContext';

function IssueTable() {
  const { issues } = useIssues();

  return (
    <SelectedIssuesProvider>
      <Menus>
        <Table columns="1rem 1fr auto" size="L">
          <Table.Header>
            <IssueHeader issues={issues} />
          </Table.Header>
          <Table.Body
            data={issues}
            render={(issue) => <IssueRow key={issue.id} issue={issue} />}
          />
        </Table>
      </Menus>
    </SelectedIssuesProvider>
  );
}
export default IssueTable;
