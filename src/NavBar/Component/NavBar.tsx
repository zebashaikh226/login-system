import { History } from 'history';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LoginPage from '../../Login/Component/LoginPage';
import Logout from '../../Login/Component/Logout';

import '../../NavBar/Design/NavBar.css'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

interface Props {
    history: History;
}

interface State {
}

interface UserLocalInfo {
    emailID: string;
    password: string;
    isUserloggedIn: boolean;
}

export default class NavBar extends Component<Props, State>{
    [x: string]: any;
    static isUserLoggedIn: boolean;

    checkIsUserLoggedIn = () => {
        const userInfoLocal = localStorage.getItem('userInfo');
        if (userInfoLocal !== null && userInfoLocal !== undefined) {
            const userInfo = JSON.parse(userInfoLocal) as UserLocalInfo[];
            NavBar.isUserLoggedIn = userInfo[0].isUserloggedIn;
            console.log("Inside checkIsUserLoggedIn function ", NavBar.isUserLoggedIn);
        } else {
            NavBar.isUserLoggedIn = false;
        }
    }


    handleLogout = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log("inside handleLogout function")
        localStorage.removeItem('userInfo');
        this.props.history.push('/');
    }

    handleLogin = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => this.props.history.push('/');

    render() {
        this.checkIsUserLoggedIn();
        return (
            <>
                <div>
                    <ul>
                        {NavBar.isUserLoggedIn
                            ? <li><Link to="/"> <span onClick={this.handleLogout}>Logout</span> </Link></li>
                            : <li><Link to="/" className="active"> <span onClick={this.handleLogin}>Login</span> </Link></li>}
                        {/* <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/Home">Home</Link></li> */}
                    </ul>
                </div>
                {/* <Route path="/About" exact={true} render={()=><About />} />
                <Route path="/Contact" exact={true} render={()=><Contact />} />
                <Route path="/Home" exact={true} render={()=><Home />} /> */}
            </>
        )
    }

}