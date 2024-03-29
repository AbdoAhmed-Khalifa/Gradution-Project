import React, { useEffect, useState } from 'react';
import Addresses from '../../components/Addresess/Addresses';
import Payment from '../../components/Addresess/PaymentComponent/Payment';
import OrderCard from './../../components/Addresess/OrderCard/OrderCard';
import ItemAndShipping from '../../components/Addresess/ItemAndShipping/ItemAndShipping';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../redux/slices/User';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const [isRender, setIsRender] = useState(true);
  let checkoutItem = JSON.parse(sessionStorage.getItem('checkout'));
  const totalPrice = checkoutItem.reduce((acc, item) => {
    return acc + item.productPrice * item.quantity;
  }, 0);
  const totalQuantity = checkoutItem.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  useEffect(() => {
    dispatch(fetchUser());
  }, [isRender]);

  return (
    <>
      <div className="bg-[#f3f3f3] justify-around h-20 grid grid-cols-2 md:grid-cols-10 items-center">
        <div className="col-span-1 md:col-span-4">
          <Link to="/">
            <img
              src="amazon-icon/Amazon_logo_dark.webp"
              alt=""
              className="ml-4 md:ml-20 w-20 md:w-28"
            />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-6">
          <h1 className="text-xl md:text-4xl text-center md:text-left">
            Checkout(
            <span className="text-[#007185]">{totalQuantity} item</span>)
          </h1>
        </div>
      </div>

      <div className=" mx-auto sm:grid sm:grid-cols-12  p-4 ">
        <div className=" md:col-span-6 sm:col-span-6">
          <div className="md:mb-6">
            <Addresses isRender={isRender} setIsRender={setIsRender} />
          </div>
          <div>
            <Payment isRender={isRender} setIsRender={setIsRender} />
          </div>
          {/* <ItemAndShipping /> */}
        </div>
        <div className=" md:col-span-1 sm:col-span-0"></div>
        <div className="lg:col-span-4 md:col-span-5 sm:col-span-5">
          <OrderCard totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
      </div>
    </>
  );
}
