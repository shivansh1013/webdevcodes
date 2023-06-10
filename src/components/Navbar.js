import React ,{useContext}from 'react';
import { Themecontext } from '../context/Themecontext';
import { AuthContext } from '../context/Authcontext';
//  export default class Navbar extends React.Component{

// /render()
// {
//     return(
//      <AuthContext.Consumer>{(authcontext)=>{

// return(
// <Themecontext.Consumer>
// {(themecontext)=>{
//     const {isDarktheme,darkTheme,lightTheme}=themecontext;
//     const {isLoggedIn,changeAuthState}=authcontext;
//     const theme=isDarktheme ? darkTheme:lightTheme;
// return (
// <nav style={{background:theme.background,color:theme.text,height:'120px'}}>
// <h2 style={{textAlign:'center'}}> Shawn Acadmey</h2>
// <p onClick={changeAuthState} style={{textAlign:'center'}}>{isLoggedIn?'Logged in':'logged out'}</p>
// <div className='ui three buttons'>

// <button className='ui button'>Overview</button>
// <button className='ui button'>Contact</button>
// <button className='ui button'>Support</button>


// </div>


// </nav>


//     )
// }
    
// }
// </Themecontext.Consumer>
// );

    





//     }
// }

//     </AuthContext.Consumer>
//     );
//  }
// }

const Navbar=()=>{
    const {isDarktheme,darkTheme,lightTheme}=useContext(Themecontext);
    const {isLoggedIn,changeAuthState}=useContext(AuthContext);
    const theme=isDarktheme ? darkTheme:lightTheme;
    return(
<nav style={{background:theme.background,color:theme.text,height:'120px'}}>
<h2 style={{textAlign:'center'}}> Shawn Acadmey</h2>
<p onClick={changeAuthState} style={{textAlign:'center'}}>{isLoggedIn?'Logged in':'logged out'}</p>
<div className='ui three buttons'>

<button className='ui button'>Overview</button>
<button className='ui button'>Contact</button>
<button className='ui button'>Support</button>


</div>


</nav>

    );
}
export default Navbar;