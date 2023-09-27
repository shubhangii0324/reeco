import React from 'react';
import logo from '../../assets/logo.svg';
import { TfiShoppingCart } from 'react-icons/tfi';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

function Header() {
    return (
        <div>
            <div className='bg-green-800 flex sm:px-5 sm:py-2 md:px-20 md:py-3 align-middle justify-between'>
                <div className='flex justify-start'>
                    <div>
                        <img className='h-[50px] w-[100px]' src={logo} alt="" />
                    </div>
                    <div>
                        <ul className='flex align-middle mt-3'>
                            <li className='sm:px-3 md:px-10 text-white text-lg'>Store</li>
                            <li className='sm:px-3 md:px-5 text-white text-lg'>Order</li>
                            <li className='sm:px-3 md:px-5 text-white text-lg'>Analytics</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-end float-right align-middle mt-3'>
                    <div className='text-white text-3xl'>
                        <TfiShoppingCart />
                    </div>
                    <div className='flex cursor-pointer'>
                        <p className='pl-10 text-white text-lg whitespace-nowrap'>Hello James </p>
                        <AiOutlineDown className='text-white text-xl mt-1 ml-1' />
                    </div>
                </div>
            </div>
            <div className='bg-white shadow-lg w-full h-full sm:px-5 md:px-20 py-3'>
                <div className='flex text-stone-400 mb-5'>
                    <p className='mr-1'>Orders</p>
                    <AiOutlineRight className='text-xl mt-[2px]' />
                    <a href='/' className='ml-1 underline'>Order 32457ABC</a>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='font-bold text-2xl tracking-wide'>Order 32457ABC</h3>
                    </div>
                    <div>
                        <button className='btn-primary mr-3'>Back</button>
                        <button className='btn-secondary'>Approve Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header