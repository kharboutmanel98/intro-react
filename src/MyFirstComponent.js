
import "./FirstComponentStyle.css"
export default function MyFirstComponent() {

   
    const person = {
        name: "Manel",
        age: 24
    }

    const elementStyle = {
        backgroundColor: "cyan",
        fontSize: "20px",
        boxShadow: "0px 20px 10px"
    }
  return (
  <div>
      <div>
        <h1 style={elementStyle}>{person.name}</h1>
        <h3 className={"active blBg"}>{person.age}</h3>
        <h2 style={{backgroundColor: "green"}}>Hi</h2>
        <button onClick={sayHello}>Click me</button>
      </div>
      <h1 className={person.name == "Manel" ? "blred" : "greenBg"}>Check name</h1>
      <div></div>
  </div>
  );
} 

function sayHello() {
    return "hello";
}
