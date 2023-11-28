import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './common-ui/app-layout';
import IssueTable from './presentation/issue/issue-table';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function AComponent() {
  return <IssueTable />;
}

function BComponent() {
  return <div>b 페이지</div>;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="a" />} />
            <Route path="a" element={<AComponent />} />
            <Route path="b" element={<BComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
