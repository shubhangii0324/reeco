import React from 'react';
import { AiOutlineClose, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import avocadoImg from '../../assets/avocado.jpg';

function EditModal({ isOpen, onClose, data, price, setPrice, quantity, setQuantity, handleUpdate }) {
    let maxLength = 50;
    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: isOpen ? 'block' : 'none',
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
            zIndex: 1001,
        },
    };

    return (
        <div style={modalStyles.overlay} onClick={onClose}>
            <div style={modalStyles.content} className="lg:w-[50vw]" onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between'>
                    <h3 className='basis-1/2 whitespace-nowrap font-bold text-lg'>Edit Product</h3>
                    <button onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='mt-5 mb-5'>
                    <p className='font-bold'>{data?.productName?.slice(0, maxLength) + '...'}</p>
                    <p className='text-gray-500'>{data?.brand}</p>
                </div>
                <div className='flex'>
                    <div className="flex-shrink-0 w-20 h-20">
                        <img
                            className="w-full h-full rounded-full"
                            src={avocadoImg}
                            alt=""
                        />
                    </div>
                    <div className='ml-5 text-gray-500'>
                        <p className='mb-3 whitespace-nowrap'>Price ($)</p>
                        <p className='mb-3 whitespace-nowrap'>Quantity</p>
                        <p className='mt-5 whitespace-nowrap'>Total</p>
                    </div>
                    <div className='ml-10'>
                        <input type='number' className='border-[1px] border-gray-400 mb-3 w-1/2 rounded-md ml-5 text-center text-gray-500' value={price} onChange={(e) => setPrice(e.target.value)} />
                        <span className='text-sm text-gray-500 ml-2'> / 6 * 1LB</span>
                        <div className='flex mb-3 ml-[-5px]'>
                            <button onClick={() => setQuantity(quantity - 1)}>
                                <AiFillMinusCircle className=' text-green-500 ml-[-10px] text-2xl mr-3' />
                            </button>
                            <input type='number' className='border-[1px] border-gray-400 mb-2 w-1/2 rounded-md text-center text-gray-500' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <button onClick={() => setQuantity(quantity + 1)}>
                                <AiFillPlusCircle className=' text-green-500 ml-[10px] text-2xl mr-3' />
                            </button>
                            <span className='text-sm text-gray-500'> x 6 * 1LB</span>
                        </div>
                        <div className='mb-2 ml-15 text-gray-500 ml-10'>
                            $ {price * quantity}
                        </div>
                    </div>
                </div>
                <div className='flex mt-5'>
                    <p className='font-bold'>Choose reason <span className='text-gray-500 text-sm'> (Optional)</span></p>
                </div>
                <div className='flex mt-5 mb-3'>
                    <div className='border-[1px] border-gray-300 text-sm text-gray-500 px-2 py-2 rounded-full mr-5'>Missing Product</div>
                    <div className='border-[1px] border-gray-300 text-sm text-gray-500 px-2 py-2 rounded-full mr-5'>Quantity is not the same</div>
                    <div className='border-[1px] border-gray-300 text-sm text-gray-500 px-2 py-2 rounded-full mr-5'>Price is not the same</div>
                    <div className='border-[1px] border-gray-300 text-sm text-gray-500 px-4 py-2 rounded-full'>Other</div>
                </div>
                <div className='flex justify-end'>
                    <button className='mr-3 btn-primary' onClick={onClose}>Cancel</button>
                    <button className='btn-secondary' onClick={handleUpdate}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default EditModal