import { BrowserRouter, Route, Routes } from "react-router-dom";
import LibraryBibliophile from "./ui/library_bibliophile";
import MainLayout from "./layout/main_layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LibraryBibliophile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
