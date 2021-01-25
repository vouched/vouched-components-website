import React from "react";
import "../src/assets/css/constant.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/Home";
import button from "./components/Button";
import inputField from "./components/InputField";
import label from "./components/Label";
import paragraph from "./components/Paragraph";
import progressBar from "./components/ProgressBar";
import IconButton from "./components/IconButton";
import textarea from "./components/Textarea";
import tooltip from "./components/Tooltip";
import dropdown from "./components/DropDown";
import alert from "./components/Alert";
import notification from "./components/Notification";
import loader from "./components/Loader";
import test from "./components/test";

//Document
import documents from "./components/ducuments";

interface AppProps {}
export const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/button" component={button} />
            <Route exact path="/icon-button" component={IconButton} />
            <Route exact path="/input-field" component={inputField} />
            <Route exact path="/textarea" component={textarea} />
            <Route exact path="/label" component={label} />
            <Route exact path="/paragraph" component={paragraph} />
            <Route exact path="/progress-bar" component={progressBar} />
            <Route exact path="/tooltip" component={tooltip} />
            <Route exact path="/dropdown" component={dropdown} />
            <Route exact path="/alert" component={alert} />
            <Route exact path="/notification" component={notification} />
            <Route exact path="/loader" component={loader} />
            <Route exact path="/documents" component={documents} />
            <Route exact path="/test" component={test} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
