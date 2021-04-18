import { Card } from "react-bootstrap";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import PaginationComponent from "./components/PaginationComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";

function App() {
  return (
    <div className="body">
      <div className="main-wrapper">
        <Card>
          <CardHeader />
          <CardBody />
          <CardFooter />
        </Card>

        <PaginationComponent />
      </div>
    </div>
  );
}

export default App;
