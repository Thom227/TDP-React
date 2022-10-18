import logo from './logo.svg';
import './App.css';

// import MyComponent from './Components/MyComponent';
// import Header from './Components/Header';
// import Person from './person';
// import Products from './Components/Props/Products';
// import PropComp from './Components/Props/PropsExer';
import TrueFalse from './Components/States/TrueFalse';
import LoginControl from './Components/States/LoginControl';
// import Counter from './Components/States/Counter';
// import MilesAhead from './Components/States/MilesAhead';
// import Content from './Components/staticData';
// import SubContent from './Components/subStaticData';
// import Counter from './Components/States/Counter';



// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header/>

        <Content/> 
        <SubContent/> */}
        <TrueFalse/>

        <LoginControl/>

        {/* <Products/>
        <MyComponent/>
        
        <Counter/>
        <MilesAhead/>
        
        <div>
          <PropComp/>
        </div>

        <div>
          No clue what I am doing {Person()} <Person/>
        </div> */}

        <img src={logo} className="App-logo" alt="logo" />
        
                
      </header>
    </div>
  );
}

export default App;
