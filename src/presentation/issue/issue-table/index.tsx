import useIssues from './use-issues';
import Table from '../../../common-ui/table';
import IssueRow from './issue-row';
import IssueHeader from './issue-header';

function IssueTable() {
  const { issues } = useIssues();

  return (
    <Table columns="1rem 1fr auto">
      <IssueHeader />
      <Table.Body
        data={issues}
        render={(issue) => <IssueRow key={issue.id} issue={issue} />}
      />
    </Table>
  );
}
export default IssueTable;
