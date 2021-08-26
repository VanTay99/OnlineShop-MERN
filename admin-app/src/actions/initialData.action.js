import {
    categoryContants,
    initialDataConstants,
    productContants,
   
  } from "./constants";
  import axios from "../helpers/axios";
  
  export const getInitialData = () => {
    return async (dispatch) => 
    {
      const res = await axios.post(`/initialData`);
      if (res.status === 200) {
        const { categories, products } = res.data;
        dispatch({
          type: categoryContants.GET_ALL_CATEGORIES_SUCCESS,
          payload: { categories }
        });
        dispatch({
          type: productContants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products }
        });
        console.log(res);
      }
      
    }
   
  }