import { History } from 'history';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props{
    history: History;
}

interface State{
    emailID: any;
    password: any;
    isUserLoggedIn: boolean;
}

const userCredentials = {
    emailID: 'jeba@riverus.in',
    password: '123456',
};

interface UserLocalInfo {
    emailID: string;
    password: string;
    isUserloggedIn: boolean;
}


export default class LoginPage extends Component<Props, State> {
    [x: string]: any;
    storeUserInfo: UserLocalInfo[];

    static emailID: any;
    static isUserLoggedIn: any;

    constructor(props: Props){
        super(props);        
        this.state = {
              emailID: '',
              password: '', 
              isUserLoggedIn: false,
        }
        this.storeUserInfo = [];
        this.handleEmailIDChange = this.handleEmailIDChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const userInfoLocal = localStorage.getItem('userInfo');
        if (userInfoLocal !== null  && userInfoLocal !== undefined){
            this.props.history.push('/dashboard');
        }

    }
    commitUserInfo = (storeUserInfo: any) => localStorage.setItem('userInfo', JSON.stringify(storeUserInfo));

    validUser = () => {
        if(this.state.emailID && this.state.password){
            if(this.state.emailID === userCredentials.emailID && this.state.password === userCredentials.password){
                console.log("ValidUser: true")
                // this.setState({isValidUser: !this.state.isValidUser});
                return true;
            }
        }
        else{
            return false;
        }
    }

    handleEmailIDChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({emailID: e.target.value});

    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({password: e.target.value});

    pushUserInfoToLocalStorage=() =>{
        const emailID = this.state.emailID;
        const password = this.state.password;
        const isUserloggedIn = this.state.isUserLoggedIn;

        console.log("valid user!");
            const user = {
                emailID: emailID,
                password: password,
                isUserloggedIn: !isUserloggedIn,
            }
            this.storeUserInfo.push(user);
            console.log(this.storeUserInfo);
            this.commitUserInfo(this.storeUserInfo);
    }

    handleSubmit =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        // e.preventDefault();
        let self = this;
        console.log("in handleSubmit method"); 

        if(self.validUser()){  
            console.log("valid user!");            
            LoginPage.emailID = self.state.emailID;
            this.pushUserInfoToLocalStorage();
            this.props.history.push('/dashboard');
        }
    }

    render() {
        const emailID = this.state.emailID;
        const password = this.state.password;
        return (
            <BrowserRouter>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <h2>Login Form</h2>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row" id="Login-form">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                        <label><b>Email ID:</b></label>
                        <input type="text" placeholder="Enter Email ID" value = {emailID} onChange={this.handleEmailIDChange} />
                        <label><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" value={password} onChange={this.handlePasswordChange} />
                        <div className="buttonDiv">
                            <button type="submit" onClick={this.handleSubmit}>Login</button>
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </BrowserRouter>
        );
    }
}
