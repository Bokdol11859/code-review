import { useEffect } from 'react';
import useIssueList from './use-issue-list';

function IssueList() {
  const { issues, getIssues } = useIssueList();

  useEffect(() => {
    getIssues();
  }, [getIssues]);

  return (
    <>
      {issues.map(({ id, title, createdAt }) => (
        <div key={id}>{createdAt.toString()}</div>
      ))}
    </>
  );
}
export default IssueList;
