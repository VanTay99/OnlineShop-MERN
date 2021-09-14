import React from 'react'
import { Layout } from '../../components/Layout';
import getParams from '../../Utils/getParams';
import { ProductPage } from './ProductPage';
import { ProductStore } from './ProductStore';
import './style.css';
/**
* @author
* @function ProductListPage
**/

export const ProductListPage = (props) => {

  const renderProducts = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case 'store':
        content = <ProductStore{...props} />;
        break;
      case 'page':
        content = <ProductPage{...props}/>;
        break;
      default:
        content=null;
    }
    return content;
  }
  return (
    <Layout>
      {renderProducts()}
    </Layout>
  )
}