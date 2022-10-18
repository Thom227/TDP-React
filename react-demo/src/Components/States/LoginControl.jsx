import { useState } from 'react';
import LogOutButton from '../Props/LogOutButton';
import LogInButton from '../Props/LogInButton';
import Greeting from '../Props/Greeting';


const LoginControl = () => {
    const [log, setLog] = useState(false);
    return (
        <>
            <Greeting log={log} />
            {
                log ?
                    <LogOutButton onClick={() => setLog(false)} />
                    :
                    <LogInButton onClick={() => setLog(true)} />
            }
        </>
    )
}
export default LoginControl;