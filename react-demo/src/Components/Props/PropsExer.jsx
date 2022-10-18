const Hello = props => {
    return (
        <h1>Hello, {props.name} </h1>
    );
    
};
const PropComp = () => {
    return (
        <>
            <Hello name="Ben"/>
            <Hello name="Thompson"/>
        </>
    );
};
export default PropComp;