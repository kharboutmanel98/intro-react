export default function MyFirstComponent() {

   
    const person = {
        name: "Manel",
        age: 24
    }
  return (
  <div>
      <div>
        <h1>{person.age}</h1>
        <h2>Hi</h2>
        <button>Click me</button>
      </div>
      <div></div>
  </div>
  );
} 
