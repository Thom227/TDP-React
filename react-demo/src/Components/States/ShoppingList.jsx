import {useState} from 'react';
import SearchBar from '../Props/SearchBar';

const ShoppingList = () => {
// function ShoppingList() {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([])
    const [search, setSearch] = useState("");
    const [counter, setCounter] = useState({count: 1});

    const uniqueId = "123"
    

    const addNewItem = (e) => {
        e.preventDefault();
        setItems((currentItems) => [...currentItems, newItem]);
        setNewItem('');
    };

    const removeItem = (index) => {
        const cloneItems = [...items];
        cloneItems.splice(index, 1);
        setItems(cloneItems);
        // setCounter('')
    };

    const handleChange = (e) => {
        const newCount = parseInt(e.target.value);

        setCounter({ count: newCount})
    };;

    const handleClick = (e) => {
        const countChange = parseInt(e.target.innerText);
        const newCount = counter.count + countChange;

        setCounter({count: newCount});
    };


    return(
        <>
            <form onSubmit={addNewItem}>
                <label> Add item: 
                    <input type="text" id="newItem" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                </label>

                <button type="submit">Add</button>
            </form>
            <br/>
            <SearchBar key={uniqueId} text={search} changeHandler={(e) =>setSearch(e.target.value)} />
            

            {
            items
            .filter((item) => item.toLowerCase().startsWith(search.toLowerCase() ))
            .map((item, i) => (
                <p>
                    {`${item}`}
                    <button type="button" onClick={() => removeItem(i)}>x</button>
                    <br/>
                    <input type="number" value={counter.count} onChange={handleChange}/>
                    <br/>
                    <button type="button" onClick={handleClick}>-1</button>
                    <button type="button" onClick={handleClick}>+1</button>

                </p>
            ))
            }
        </>
    );
}

export default ShoppingList;
