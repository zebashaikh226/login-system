import { History } from "history";
import { Component } from "react";

interface Props{
    history: History
}

export default class Logout extends Component<Props>{
    constructor(props: Props){
        super(props);
        console.log("Inside logout constructor");
        this.removeLocalStorage = this.removeLocalStorage.bind(this);
        this.removeLocalStorage();
    }
        removeLocalStorage = () => {
        console.log("inside removeLocalStorage function")
        localStorage.removeItem('userInfo');
        this.props.history.push('/');
    }
}