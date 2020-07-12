import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import Addtransaction from "./Components/Addtransaction";
import Incomelist from "./Components/Incomelist";
import Expenselist from "./Components/Expenselist";
import { GlobalContextProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <Addtransaction />
          <Incomelist />
          <Expenselist />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
