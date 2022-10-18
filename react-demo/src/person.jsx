

  function Person() {
    const me = {
        name: "Ben Thompson",
        age: "25"
      };
      return(

        <div>
            <h1>Hello there, {me.name}.</h1>
            <h2>General Ackbar {me.age} </h2>
        </div>
          );
  }

  export default Person;