import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card } from "react-bootstrap";

const Questions = () => {
  
  return(
    <div>
      <h1>Frequently Asked Questions</h1>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</p>
      <Accordion>
        
11      <Card>
12        <Accordion.Toggle as={Card.Header} eventKey="0">
13          TAB 1
14        </Accordion.Toggle>
15
16        <Accordion.Collapse eventKey="0">
17          <Card.Body>This is first tab body</Card.Body>
18        </Accordion.Collapse>
19      </Card>
20
21      <Card>
22        <Accordion.Toggle as={Card.Header} eventKey="1">
23          TAB 2
24        </Accordion.Toggle>
25
26        <Accordion.Collapse eventKey="1">
27        <Card.Body>This is second tab body</Card.Body>
28        </Accordion.Collapse>
29        </Card>
30        </Accordion>
    </div>
  )
}

export default Questions