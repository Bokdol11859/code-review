import { useState } from 'react';
import { Issue } from '../../../domain/model/issue';

export default function useSelectedIssues() {
  const [selectedIssues, setSelectedIssues] = useState<Brand<'id', Issue>[]>(
    []
  );

  function selectIssue(id: Brand<'id', Issue>) {
    if (selectedIssues.includes(id)) {
      const filteredIssues = selectedIssues.filter((issueId) => issueId !== id);
      setSelectedIssues(filteredIssues);
    } else {
      setSelectedIssues([...selectedIssues, id]);
    }
  }

  function selectAllIssues(ids: Brand<'id', Issue>[]) {
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
