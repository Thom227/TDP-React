import {useState} from 'react';

const userPass = () => {
    const[userName, setUserName] = useState();
    const[password, setPassword] = useState();

    return(
        <>
            <form>Enter username:</form>
        </>
    );
};

export default userPass;