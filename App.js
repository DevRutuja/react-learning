// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("div", { id: "child" }, "Hello world")
//   )
// );

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1" }, "Hello world h1"),
    React.createElement("h2", { id: "h2" }, "Hello world h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1" }, "Hello world h1"),
    React.createElement("h2", { id: "h2" }, "Hello world h2"),
  ]),
]);

console.log("heading");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /*
     <div id='parent'>
       <div id='child1'>
           <div id='child'>
              hello world
           </div>
        </div>
     </div> 
*/
}

{
  /*
     <div id='parent'>
       <div id='child1'>
           <h1>
              hello world h1
           </h1>
           <h2>
              hello world h2
           </h2>
        </div>
         <div id='child2'>
           <h1>
              hello world h1
           </h1>
           <h2>
              hello world h2
           </h2>
        </div>
     </div> 
*/
}
