import React from "react";
import Panel from "../Panel";
import {connect} from "react-redux";
//
// const fakeRecipes = [
//   {
//     id: 1,
//     name: "Pomidorówka",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [1, 2, 3]
//   },
//   {
//     id: 2,
//     name: "Coś innego",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [3, 1]
//   },
//   {
//     id: 3,
//     name: "Jeszcze inny przepis",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta doloremque dolorum exercitationem maiores maxime molestiae officiis, quasi quos voluptate. Aut esse laboriosam necessitatibus quam quos suscipit ullam. Amet, dolor.",
//     products: [5, 6]
//   }
// ];

const AllRecipes = ({allRecipes}) => {

  return (
    <>
      <h1 className="title">Wszystkie przepisy</h1>
      <Panel iconName={"folder"}
             path={"recipes"}
             listElements={allRecipes}
             heading={false}
             footer={false}
      />
    </>
  );
};

export default AllRecipes;

