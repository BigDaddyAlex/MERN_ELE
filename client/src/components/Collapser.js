import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import SubmitForm from './SubmitForm';

const Collapser = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{width:'50%'}}>
      <Button color="primary" onClick={toggle} style={{ margin: '1rem'}}>Create</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <SubmitForm/>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Collapser;