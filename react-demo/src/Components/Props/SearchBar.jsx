
function SearchBar (props){

    return(   
        <label>
            Search list:     
            <input value={props.text} onChange={props.changeHandler}/>        
        </label> 
    );
};
export default SearchBar;