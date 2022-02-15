import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartConstants } from '../../actions/constants';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import CartItem from './CartItem';
import { addToCart, getCartItems} from '../../actions';
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
    const auth = useSelector(state =>state.auth);
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);

    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(()=>{
        if(auth.authenticate){
            dispatch(getCartItems());
        }

    },[auth.authenticate]);
    
    const onQuantityIncrement = (_id, qty) => {

        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, 1));
    }
    const onQuantityDeccrement = (_id, qty) => {
        const { name, price, img } = cartItems[_id];
        dispatch(addToCart({ _id, name, price, img }, -1));
    }
    return (
        <Layout>
            <div className="cartContainer" style={{ alignItems: 'flex-start' }}>
                <Card
                    headerLeft={`My Cart`}
                    headeright={<div>Deliver to </div>}
                >
                    {

                        Object.keys(cartItems).map((key, index) =>
                            <CartItem
                                key={index}
                                cartItems={cartItems[key]}
                                onQuantityInc={onQuantityIncrement}
                                onQuantityDec={onQuantityDeccrement}
                            />
                        )
                    }

                </Card>
                <Card
                    headerLeft ='Price'
                    style={{
                        width: '500px',

                    }}></Card>
            </div>
        </Layout>
    )
}
export default CartPage;