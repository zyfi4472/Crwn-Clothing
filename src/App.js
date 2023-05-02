import Home from "./components/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";
import Test from "./components/routes/testnav/test.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
