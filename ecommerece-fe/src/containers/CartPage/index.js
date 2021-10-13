import React from 'react';
import { useSelector } from 'react-redux';
import { cartConstants } from '../../actions/constants';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';

/**
* @author
* @function CartPage
**/
// before login
// add product to cart 
// save in localStorage
// when try to checkout ask for Credentials and 
// if logger in then add products to users cart database from localStorage

export const CartPage = (props) => {

    const cart = useSelector(state => state.cart);
    const cartItems = cart.cartItems;
    return (
        <Layout>
            <div className="cartContainer">
                <Card
                    headerLeft={`My Cart`}
                    headeright={<div>Deliver to </div>}
                >
                    {
                        Object.keys(cartItems).map((key, index) =>
                            <div key = {index} className="flexRow">
                                <div className="cartProductContainer">
                                    <img src="" alt="" />
                                </div>
                                <div className="cartItemDetails">
                                    <div>{cartItems[key].name} - qty- {cartItems[key].qty}</div>
                                    <div> delivery in 3 - 5 days</div>
                                </div>
                            </div>
                        )
                    }

                </Card>
                <Card style={{
                    width: '500px',
                }}>Price</Card>
            </div>
        </Layout>
    )
}
export default CartPage;