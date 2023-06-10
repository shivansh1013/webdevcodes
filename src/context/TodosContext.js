import React,{createContext,useState} from 'react';

export const TodoContext=createContext();


const TodoContextProvider=({children})=>{
const [todos,setTodos]=useState([
  { text:' Plan to go to trip',id:1},
    {text :'Go to shopping complex',id:2},
    {text: 'plan a Birthday',id:3}

]);
// const addTodo=(todo)=>{

// setTodos([

// ...todos,
// {text:todo ,id: Math.random()}


// ]);
// };
// const removeTodo=(id)=>{

// setTodos(todos.filter((todo)=>{
// return todo.id!=Number(id);





// }));


// }
return(
    <TodoContextProvider value={{todos}}>
    {children}
    </TodoContextProvider>
)


 }

export default TodoContextProvider;