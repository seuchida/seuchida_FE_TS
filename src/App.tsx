import * as React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";


import Login from "Login";
function App(): JSX.Element {
  return (
    <>
    <div>안녕하세요~zz</div>
    <Login name = 'hello'></Login>
      {/* <Switch> */}
        {/* <Route exact path="/helloReact" component={} /> */}
        {/* <Route exact path="/helloTypeScript" component={} /> */}
      {/* </Switch> */}
    </>
  );
}

export default App;
