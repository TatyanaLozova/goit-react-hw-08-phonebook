import React from 'react'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav'
import UserMenu from '../UserMenu'

const style = {
    blok: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 60,
        backgroundColor: "rgb(40, 215, 238, 0.384)",
        borderBottom: "1px solid",


    },
};
   
    

const AppBar = ({isAuthenticated}) => (
    <header  style={style.blok}>
        <Navigation />
       {isAuthenticated ? <UserMenu /> : <AuthNav />}
   </header>
    );


export default AppBar;
