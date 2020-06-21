
const Pet = ({name, animal, breed}) => {
return React.createElement("div",{},[
    React.createElement("h1",{},name),
    React.createElement("h2",{},animal),
    React.createElement("h2",{},breed)
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