import Nav from 'react-bootstrap/Nav';
import './App.css'
function Navbar() {
  return (
    <Nav className= 'bg-dark'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link className='w' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='w' eventKey="cat">Cats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='w' eventKey="dog">Dogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;