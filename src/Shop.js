import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { buyLaptop, buyMobile, buyTV,fetchUsers } from './redux/actions';
import './Shop.css'

export const Shop = () =>{
    const noOfLaptops = useSelector((state) => state.laptops.noOfLaptops);
    const noOfMobiles = useSelector((state) => state.mobiles.noOfMobiles);
    const noOfTV = useSelector((state) => state.tv.noOfTV);
    const data = useSelector((state)=>state.users.users)

    const dispatch = useDispatch();

    const handleBuyLaptop = () => {
        dispatch(buyLaptop()); 
      };

    const handleBuyMobile = () => {
        dispatch(buyMobile()); 
      };

    const handleBuyTV = () => {
        dispatch(buyTV()); 
      };

    const handleUsers = () => {
        dispatch(fetchUsers()); 
      };

  return (
    <div>
        <h1 className="title">Welcome to our Store</h1>
        <div className='each-row'>
        <div className="each-item">
            <p>Dell Laptop</p>
            <p>Available: {noOfLaptops}</p>
            <button className="buy-button" onClick={handleBuyLaptop}>Buy</button>
        </div>
        <div className="each-item">
            <p>Android Mobile</p>
            <p>Available: {noOfMobiles}</p>
            <button className="buy-button" onClick={handleBuyMobile}>Buy</button>
        </div>
        <div className="each-item">
            <p>Smart TV</p>
            <p>Available: {noOfTV}</p>
            <button className="buy-button" onClick={handleBuyTV}>Buy</button>
        </div>
        <div className="each-user">
            <p>Users</p>
            <p>Count: {data.length}</p>
            <button className="buy-button" onClick={handleUsers}>Users Count</button>
        </div>
        </div>
    </div>
  )
}




export default Shop;