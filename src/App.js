import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Editor from "./containers/Editor/Editor";
import Menu from "./containers/Menu/Menu";
import TemplateSelection from "./containers/Templates/TemplateSelection";
import EditForm from "./containers/EditForm/EditForm";
import StudentSheet from "./containers/sheet/StudentSheet";
import CertificateView from "./containers/View/CertificateView";

import TopBar from "./containers/TopBar/TopBar";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="editor">
          {/* <Editor /> */}
          <TopBar />
          <div className="editor_grid">
            <Menu />
            <Routes>
              <Route path="/" element={<TemplateSelection />} />
              <Route path="/templates" element={<TemplateSelection />} />
              <Route path="/edit" element={<EditForm />} />
              <Route path="/sheet" element={<StudentSheet />} />
              <Route path="/view" element={<CertificateView />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
