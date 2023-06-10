import React,{useContext, useState} from 'react';
import { Themecontext } from '../context/Themecontext'
import { TodoContext } from '../context/TodosContext';


const Todolist=()=>{
    const [todo,setTodo]=useState('');
    const {todos,addTodo,removeTodo}=useContext(TodoContext);
    const {isDarktheme,lightTheme,darkTheme,changeTheme}=useContext(Themecontext);
    const theme=isDarktheme ? darkTheme:lightTheme;
    // const handleChange=(e)=>{
    //     setTodo(e.target.value);
    // };
    // const handleformsubmit=(e)=>{
    //   e.preverntDefault();
    //       addTodo(todo);
    // };


    // const handleremovetodo=(e)=>{
    //  const id= e.target.id;

    // removeTodo(id);

    // };
    return(

<div style={{background:theme.background,color:theme.text,height:'140px',textAlign:'center'}}>  
   
   {
    todos.length?
    (
        todos.map((todo)=>{

            return <p  key ={todo.id}className='item'>{todo.text}</p>
        })
    ):(<div>you have no todos</div>)
   }
 
    {/* <form onSubmit={handleformsubmit}>
        <label htmlFor="todo">Addtodo</label>
        <input type="text" id='todo'  onChange={handleChange}/>
        <input type="Submit"  value='Add new todo'   className='ui button primary' />
    </form> */}
    <button className='ui button primary' onClick={changeTheme}>change the theme</button>
    
    
     </div>

    );
};
export default Todolist;