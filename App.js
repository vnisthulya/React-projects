//
//
//<div id=parent>
    //<div id="c1">
        //<h1 id="heading">Hello World! Im React.</h1>
        //<p id="para"> getting ready to become a - conqueror! </p>
        //<p id="para">That's a fantastic attitude!  "Conqueror" implies overcoming challenges and achieving victory. Here are some ways to express that you're getting ready to become a conqueror, depending on the context: </p>
    //</div>
    //<div id="c2">
        //<h1 id="heading"> Mission </h1>
        //<p id="para"> Get ready for 40 </p>
        //<p id="para"> Turning 40 is a big milestone! It's a time for reflection, celebration, and looking forward to the exciting chapters ahead. Here are some ways to express "Get ready for 40," </p>
    //</div>
//</div>
//
//

const parent= React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "c1"},
    [
        React.createElement("h1", {id:"heading"}, "Hello World! Im React."),
        React.createElement("p", {id:"para"}, "getting ready to become a - conqueror!"),
        React.createElement("p", {id:"para"}, "That's a fantastic attitude!  \"Conqueror\" implies overcoming challenges and achieving victory. Here are some ways to express that you're getting ready to become a conqueror, depending on the context:")
    ]),
    React.createElement("div", {id: "c2"},
    [
        React.createElement("h2", {id:"heading"}, "Mission"),
        React.createElement("p", {id:"para"}, "Get ready for 40"),
        React.createElement("p", {id:"para"}, "Turning 40 is a big milestone! It's a time for reflection, celebration, and looking forward to the exciting chapters ahead. Here are some ways to express \"Get ready for 40,\"")
    ])]
);
    
    console.log("parent::", parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

