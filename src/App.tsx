import React from "react";
import Layout from "components/Layout";
//导入样式
import AppStyle from "./style";
//导入路由
import { BrowserRouter } from "react-router-dom";
import { AliveScope } from "react-activation";

//导入redux
import { Provider } from "react-redux";
import store from "./reducers";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AliveScope>
          <AppStyle>
            <div className="app">
              <Layout></Layout>
            </div>
          </AppStyle>
        </AliveScope>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
