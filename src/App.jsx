import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import store from "./redux/store";
import Movies from "./components/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <main className="py-12 2xl:px-6">
                  <Movies />
                </main>
              </div>
            }
          ></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
