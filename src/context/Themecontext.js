import React ,{createContext }from 'react';
export const Themecontext= createContext();
export default class ThemecontextProvider extends React.Component{
state={

isDarktheme:true,
lightTheme:{
text:'#222',
background:'#d8ddf1'


},
darkTheme:{


    text:'#fff',
    background:'#5c5c5c'
}
};
changeTheme=()=>
{

this.setState({isDarktheme:!this.state.isDarktheme});


};
render(){

    return(

       <Themecontext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
        {this.props.children}
       </Themecontext.Provider>

    )
}

}