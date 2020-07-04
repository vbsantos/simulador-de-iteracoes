import React from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

// CSS
import "./style.css";

function Buttons(props) {
  const [buttonName1, buttonEnabled1, openCloseFunction1] = props.func1;
  const [buttonName2, buttonEnabled2, openCloseFunction2] = props.func2;
  const [buttonName3, buttonEnabled3, openCloseFunction3] = props.func3;

  return (
    <div id="ButtonsComponent">
      <Button
        disabled={!buttonEnabled1}
        variant="outlined"
        color="primary"
        onClick={() => openCloseFunction1()}
      >
        {buttonName1}
      </Button>
      <Button
        disabled={!buttonEnabled2}
        variant="outlined"
        color="primary"
        onClick={() => openCloseFunction2()}
      >
        {buttonName2}
      </Button>
      <Button
        disabled={!buttonEnabled3}
        variant="outlined"
        color="secondary"
        onClick={() => openCloseFunction3()}
      >
        {buttonName3}
      </Button>
    </div>
  );
}

Buttons.propTypes = {
  func1: PropTypes.array,
  func2: PropTypes.array,
  func3: PropTypes.array,
};

export default Buttons;
