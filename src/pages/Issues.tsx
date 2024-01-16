import IssueFilterBar from '../presentation/issue/issue-filter-bar';
import IssueFilterResetButton from '../presentation/issue/issue-filter-reset-button';
import IssueTable from '../presentation/issue/issue-table';

function Issues() {
  return (
    <>
      <IssueFilterBar />

      <IssueFilterResetButton />

      <IssueTable />
    </>
  );
}
export default Issues;
