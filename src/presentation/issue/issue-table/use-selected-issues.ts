import { useState } from 'react';
import { Issue } from '../../../domain/model/issue';

export default function useSelectedIssues() {
  const [selectedIssues, setSelectedIssues] = useState<Brand<number, Issue>[]>(
    []
  );

  function selectIssue(id: Brand<number, Issue>) {
    if (selectedIssues.includes(id)) {
      const filteredIssues = selectedIssues.filter((issueId) => issueId !== id);
      setSelectedIssues(filteredIssues);
    } else {
      setSelectedIssues([...selectedIssues, id]);
    }
  }

  function selectAllIssues(ids: Brand<number, Issue>[]) {
    if (selectedIssues.length) {
      setSelectedIssues([]);
    } else {
      setSelectedIssues([...ids]);
    }
  }

  return {
    selectedIssues,
    selectIssue,
    selectAllIssues,
  };
}
