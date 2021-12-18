import React from "react";
import "./App.css";
import { DAppProvider } from "./dapp/dapp";
import { APP_NAME } from "./dapp/default";
import { Header } from "./components/Header";

const Page = (props: {
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNode[]
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <div className="App"> {props.children} </div>;
};

function App() {
  return (
    <DAppProvider appName={APP_NAME}>
      <React.Suspense fallback={null}>
        <div>test</div>
        <div className="App">
          <Page>
            <Header />
          </Page>
        </div>
      </React.Suspense>
    </DAppProvider>
  );
}

export default App;
