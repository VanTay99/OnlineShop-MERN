import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(

      <Layout>
      <Jumbotron  style={{margin:'5rem'}} className="text-center">
        <h1>Welcom to Admin Dashboard</h1>
      </Jumbotron>
      </Layout>
     
   )
 }

export default Home