import anotherComponent from "./MyComponent2"

const MyComponent = () => {
    return (
        <>
        <h1>Hello world!</h1>
        {anotherComponent()}
        </>
    )
};

export default MyComponent;