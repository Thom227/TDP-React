function Film({ title, year, poster }) {
  return (
    <>
    <br/><br/>
    
      <fieldset>
        
      <img src={poster} alt="A film" width="150" />
        
        <p>
        <strong>{`${title}`}</strong>
        </p>

        <p>
        {`Year: ${year}`}
        </p>


      </fieldset>
    </>

  );
}

export default Film;