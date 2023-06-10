import Navbar from './components/Navbar';

import Todolist from './components/Todolist';

import AuthContextProvider from './context/Authcontext';
import ThemecontextProvider from './context/Themecontext';
import TodoContextProvider from './context/TodosContext';
function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <h1>hello </h1>
       <AuthContextProvider> 
        
     <ThemecontextProvider>
     
        <Navbar/>
        <TodoContextProvider>
        {/* <Todolist/> */}
        </TodoContextProvider>
        </ThemecontextProvider>
       
        </AuthContextProvider> 
        
      </div>
    </div>
  );
}

export default App;
