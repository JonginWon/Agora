import React from "react";
import "antd/dist/antd.css";
import PropType from "prop-types";

const App = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

App.prototype = {
  Component: PropType.elementType.isRequired,
};

export default App;
