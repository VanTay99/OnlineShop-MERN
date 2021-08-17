import React from 'react';
import { Jumbotron , Col,Row, Container} from 'react-bootstrap';
import Layout from '../../components/Layout';
import './style.css';
/**
* @author
* @function Home
**/

const Home = (props) => {

 
  return(

      <Layout>
        <Container fluid>
        <Row>
          <Col md={2} className="siderbar"> Sider Bar</Col>
          <Col md={10} style={{marginLeft:'auto'}}> Container</Col>
        </Row>
        </Container>
     
      </Layout>
     
   )
 }

export default Home