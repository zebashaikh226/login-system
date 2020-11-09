import React from 'react'

interface UserLocalInfo {
    emailID: string;
    password: string;
    isUserloggedIn: boolean;
}

export default function Dashboard() {
    const userInfoLocal = localStorage.getItem('userInfo');
    if (userInfoLocal !== null && userInfoLocal !== undefined) {
        const userInfo = JSON.parse(userInfoLocal) as UserLocalInfo[];
        return <h1>Welcome {userInfo[0].emailID}!</h1>
    } else {
        return <h1>Something went wrong!</h1>
    }

}