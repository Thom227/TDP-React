import {Link} from 'react-router-dom';
// import Peter from './Peter';

const Users = () => {
    return(
        <>
            <div>Nested Routing</div>
            <ul>
                <Link to='/Peter'>
                    Peter
                </Link>
            </ul>
            
        </>

    );
};
export default Users;