
const Pet = (props) => {
return React.createElement("div",{},[
    React.createElement("h1",{},props.name),
    React.createElement("h2",{},props.animal),
    React.createElement("h2",{},props.breed)
])
}

const Apps= ()=> {
    return React.createElement("div",{},
   [
       React.createElement("h1",{},"Adopt Me!"),
       React.createElement(Pet , {
           name:"Luna", animal : "Dog", breed: "Havanese"}),
       React.createElement(Pet , {
           name:"Birdie", animal : "Bird", breed: "Parrot"}),
       React.createElement(Pet , {
           name:"Meow", animal : "Cat", breed: "exotic"}),
]);
};

ReactDOM.render(
    React.createElement(Apps),document.getElementById("root")
);