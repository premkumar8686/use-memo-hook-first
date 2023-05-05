import { useMemo, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  }


 const addTodo = () => {
  setTodos([...todos, {id: '1',Name: 'ToDo'}])
 }

 const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for(let i = 0; i <= 1000000000; i++ )
    {
      num += 1;
    }
    return num;
  };

 //const calculation = expensiveCalculation(1);
//  const calculation = useMemo(()=> expensiveCalculation(1),[]);
 const calculation = useMemo(()=> expensiveCalculation(count) ,[count]);

  return (
    <>
     <h1>{count}</h1>
     <button onClick={increment}>Increment</button>

     <ul>
        {todos.map((ele,keys) => {
          return <li key={keys}>{ele.Name}</li>
        })}
     </ul>

     <button onClick={addTodo}>Add ToDo</button>

     <h2>Expensive Calculation</h2>
        {calculation}
    </>
  );


};

export default App;
