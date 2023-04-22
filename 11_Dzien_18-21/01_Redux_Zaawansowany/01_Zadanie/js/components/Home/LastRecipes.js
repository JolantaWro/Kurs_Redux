import React from "react";
import Panel from "../Panel";


const LastRecipes = ({lastRecipes}) => {
  return (
    <Panel
      title="Ostatnie przepisy"
      theme="is-primary"
      path="recipes"
      iconName="folder"
      listElements={lastRecipes} />
  );
};

export default LastRecipes;