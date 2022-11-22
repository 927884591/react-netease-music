import React from "react";
import Layout from "components/Layout";
//导入样式
import AppStyle from "./style";
//导入路由
import { BrowserRouter } from "react-router-dom";

//导入redux
import { Provider } from "react-redux";
import store from "./reducers";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppStyle>
          <div className="app">
            <Layout></Layout>
          </div>
        </AppStyle>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
