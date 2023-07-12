import React from "react";
import styles from "../../styles/ContactFormConfirm.module.css";
import appStyles from "../../App.module.css";

import {
  Col,
  Row,
  Container,
} from "react-bootstrap";


const Confirmation = () => {
  return (    
    <Row className={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Thanks} p-4 `}>
          <h1 className={styles.Header}>Thank you!</h1>
          <p className={styles.Content}>We've received your message and will get back to you soon!</p>    
        </Container>
      </Col>
    </Row>
  );
};

export default Confirmation;