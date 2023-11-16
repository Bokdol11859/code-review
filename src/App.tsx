import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './common-ui/app-layout';

function AComponent() {
  return (
    <div className="font-bold text-neutral-text-strong bg-accent-background rounded-large text-S">
      a 페이지
    </div>
  );
}

function BComponent() {
  return <div>b 페이지</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="a" />} />
          <Route path="a" element={<AComponent />} />
          <Route path="b" element={<BComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
