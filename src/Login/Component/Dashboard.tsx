import React from 'react'

// interface Props{
// }

interface UserLocalInfo {
    emailID: string;
    password: string;
    isUserloggedIn: boolean;
}

export default function Dashboard(){    
    const userInfoLocal = localStorage.getItem('userInfo');
    if (userInfoLocal !== null  && userInfoLocal !== undefined){
        const userInfo = JSON.parse(userInfoLocal) as UserLocalInfo[];
        return <h1>Welcome {userInfo[0].emailID}!</h1>
    } else{
        return <h1>Something went wrong!</h1>
    }

}

// export default class Dashboard extends Component<Props>{
//     userInfo: any;
//     constructor(props: Props){
//         super(props);
//         this.userInfo = localStorage.getItem('userInfo');
//     }
    
//     render(){
//         const userInfo = JSON.parse(this.userInfo);
//         return(
//            <>
//            <h1>Welcome {userInfo.emailID}!</h1>
//            </> 
//         );
//     }

// }