import { useState } from 'react';
import IssueDataSourceImpl from '../../../../data/data-source/api/issue-data-source-impl';
import { IssueRepositoryImpl } from '../../../../data/repository/issue-repository-impl';
import { Issue } from '../../../../domain/model/issue';
import { GetIssues } from '../../../../domain/use-case/issues/get-issues';

export default function useIssueList() {
  const [issues, setIssues] = useState<Issue[]>([]);

  const issuesDataSourceImpl = new IssueDataSourceImpl();
  const issuesRepositoryImpl = new IssueRepositoryImpl(issuesDataSourceImpl);

  const getIssuesUseCase = new GetIssues(issuesRepositoryImpl);

  async function getIssues() {
    setIssues(await getIssuesUseCase.invoke());
  }

  return {
    issues,
    getIssues,
  };
}
