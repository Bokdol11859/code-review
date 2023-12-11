import { ReactNode, createContext, useContext, useState } from 'react';
import { Issue } from '../../domain/model/issue';

interface SelectedIssuesContextType {
  selectedIssueIds: Brand<number, Issue>[];
  toggleIssueSelection: (id: Brand<number, Issue>) => void;
  selectAllIssues: (ids: Brand<number, Issue>[]) => void;
  deselectAllIssues: () => void;
}

interface SelectedIssusProviderProps {
  children: ReactNode;
}

const SelectedIssuesContext = createContext<SelectedIssuesContextType>(null!);

export function SelectedIssuesProvider({
  children,
}: SelectedIssusProviderProps) {
  const [selectedIssueIds, setSelectedIssueIds] = useState<
    Brand<number, Issue>[]
  >([]);

  function toggleIssueSelection(id: Brand<number, Issue>) {
    if (selectedIssueIds.includes(id)) {
      const filteredIssues = selectedIssueIds.filter(
        (issueId) => issueId !== id
      );
      setSelectedIssueIds(filteredIssues);
    } else {
      setSelectedIssueIds([...selectedIssueIds, id]);
    }
  }

  function selectAllIssues(ids: Brand<number, Issue>[]) {
    setSelectedIssueIds(ids);
  }

  function deselectAllIssues() {
    setSelectedIssueIds([]);
  }

  return (
    <SelectedIssuesContext.Provider
      value={{
        selectedIssueIds,
        toggleIssueSelection,
        selectAllIssues,
        deselectAllIssues,
      }}
    >
      {children}
    </SelectedIssuesContext.Provider>
  );
}

export function useSelectedIssues() {
  const context = useContext(SelectedIssuesContext);
  if (context === undefined)
    throw new Error(
      'SelectedIssuesContext가 SelectedIssuesProvider외부에서 사용됨 '
    );

  return context;
}
