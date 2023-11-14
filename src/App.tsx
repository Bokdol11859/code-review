import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function AComponent() {
  return <div>a 페이지</div>;
}

function BComponent() {
  return <div>b 페이지</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="a"></Navigate>}></Route>
        <Route path="a" element={<AComponent></AComponent>}></Route>
        <Route path="b" element={<BComponent></BComponent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
