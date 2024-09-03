import './App.css';
import Price from './price';
import Description from './description';
import Name from './name';
import Image from './image';
import Navbar from './Nav';
import Caroselle from './caroselle';
import Card from 'react-bootstrap/Card';
function App() {
  
  let MyName = prompt("what is your name")

  return (
   <div>
    <Navbar/>
    <div className="App">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Price/>
        <Description/>
        <div> {MyName &&(<Image/>)} 
        
        </div>
        
        </Card.Text>
      </Card.Body>
    </Card>
      <Caroselle/>
      <p>{MyName|| ""}</p>

<h2>Hello {MyName? <span style={{color:"pink"}}>{MyName}</span> : "Hello, there" }!!</h2>


    </div>
    </div>
  );
}

export default App;
