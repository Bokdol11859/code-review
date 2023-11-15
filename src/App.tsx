import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function AComponent() {
  return <div className="text-3xl font-bold">a 페이지</div>;
}

function BComponent() {
  return <div>b 페이지</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="a" />} />
        <Route path="a" element={<AComponent />} />
        <Route path="b" element={<BComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
