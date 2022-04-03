import QuanLySinhVien from "./QuanLySinhVien/QuanLySinhVien";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ChiTietSinhVien from "./QuanLySinhVien/pages/ChiTietSinhVien";
import NavRouter from "./QuanLySinhVien/components/NavRouter/NavRouter";
import Home from "./QuanLySinhVien/pages/Home";
function App() {
  return (
    <BrowserRouter>
      <NavRouter />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dssv" component={QuanLySinhVien} />

        <Route path={"/detail/:id"} component={ChiTietSinhVien} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
