function Products(props) {

    const item = {
        name: "Coke",
        price: "2,",
        description: "A drink"
    }
    return (
        <>
            <p>Name: {item.name} </p>
            <p>Price: {item.price} </p>
            <p>Description: {item.description} </p>
        </>
    )
}

export default Products;