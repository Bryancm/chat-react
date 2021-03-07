import React, { useState, useEffect } from "react";

const AsyncComponent = (props) => {
  const [component, setComponent] = useState(null);
  useEffect(() => {
    const loadComponent = async () => {
      const { importComponent } = props;
      const { default: Component } = await importComponent();
      setComponent(Component);
    };
    loadComponent();
  }, [props]);
  return <div>{component || "Loading"}</div>;
};

export default AsyncComponent;
