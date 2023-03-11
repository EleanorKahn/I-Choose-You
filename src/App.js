import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "reactstrap";
import "./css/style.css";
import PokeList from './components/PokeList';


function App() {
  return (
    <Container className='view'>
      <h1>The PokeAPI App</h1>
      <Row>
        <Col>
          <p>
            Testing for layout, styling
          </p>
        </Col>
        <Col>
            <PokeList />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
