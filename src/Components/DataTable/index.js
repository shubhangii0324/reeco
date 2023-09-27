import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avocadoImg from '../../assets/avocado.jpg';
import { AiOutlineCheck, AiOutlineClose, AiOutlinePrinter } from 'react-icons/ai';
import { PiIceCreamLight, PiBowlFoodThin } from 'react-icons/pi';
import { MdFastfood } from 'react-icons/md';
import { addItem, approveItem, editItem, missingItem } from '../../store/reducer';
import MissingModal from '../MissingModal';
import EditModal from '../EditModal';

function DataTable() {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state?.tableData?.tableData);

    const [currentData, setCurrentData] = useState([]);
    const [editedPrice, setEditedPrice] = useState(currentData?.originalPrice);
    const [editedQuantity, setEditedQuantity] = useState(currentData?.quantity);
    const [missingModal, setMissingModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const handleApproveItem = (itemId) => {
        dispatch(approveItem(itemId));
    }

    const handleMissingModalOpen = (data) => {
        setMissingModal(!missingModal);
        setCurrentData(data);
    }

    const handleMissing = () => {
        let itemId = currentData?.id
        dispatch(missingItem({ itemId, isUrgent: false }))
        setMissingModal(false);
        setCurrentData([]);
    }

    const handleMissingUrgent = () => {
        let itemId = currentData?.id
        dispatch(missingItem({ itemId, isUrgent: true }));
        setMissingModal(false);
        setCurrentData([]);
    }

    const handleEditModalOpen = (data) => {
        setEditModal(!editModal);
        setCurrentData(data);
        setEditedPrice(data?.originalPrice);
        setEditedQuantity(data?.quantity);
    }

    const handleUpdate = () => {
        let itemId = currentData?.id;
        let updatedPrice = editedPrice;
        let updatedQuantity = editedQuantity;
        dispatch(editItem({ itemId, updatedPrice, updatedQuantity }));
        setEditModal(false);
        setCurrentData([]);
    }

    const handleAddItem = () => {
        const newItem = {
            "productName": "Chicken Breast Fillets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
            "brand": "Hormel Black Labelmany",
            "currency": "$",
            "originalPrice": 60.67,
            "discountedPrice": 60.67,
            "quantity": 0,
            "originalTotal": 0,
            "discountedTotal": 0,
            "status": "Pending"
        }
        dispatch(addItem(newItem));
    }

    return (
        <div className='container w-full mx-auto sm:px-5 md:px-20 md:py-3 mt-10'>
            <div className='lg:flex border-[1px] border-gray-200 px-10 py-5 rounded-md justify-evenly bg-white'>
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Supplier</p>
                    <p className='text-xl font-bold tracking-normal'>East coast fruits & vegetables</p>
                </div>
                <div className='border-r border-gray-200 mr-5 ml-5' />
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Shipping date</p>
                    <p className='text-xl font-bold tracking-normal'>Thu, Feb 10</p>
                </div>
                <div className='border-r border-gray-200 mr-5 ml-5' />
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Total</p>
                    <p className='text-xl font-bold tracking-normal'>$ 15,082.3</p>
                </div>
                <div className='border-r border-gray-200 mr-5 ml-5' />
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Category</p>
                    <div className='flex justify-between'>
                        <PiIceCreamLight className='text-3xl' />
                        <PiBowlFoodThin className='text-3xl' />
                        <MdFastfood className='text-3xl' />
                    </div>
                    <div className='flex justify-between mt-3'>
                        <MdFastfood className='text-3xl' />
                        <PiIceCreamLight className='text-3xl' />
                        <PiBowlFoodThin className='text-3xl' />
                    </div>
                </div>
                <div className='border-r border-gray-200 mr-5 ml-5' />
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Department</p>
                    <p className='text-xl font-bold tracking-normal'>300-477-688</p>
                </div>
                <div className='border-r border-gray-200 mr-5 ml-5' />
                <div className='w-1/6'>
                    <p className='font-bold text-gray-400 tracking-wide mb-2 text-md'>Status</p>
                    <p className='text-xl font-bold tracking-normal'>Awaiting your approval</p>
                </div>
            </div>
            <div className='border-[1px] border-gray-200 lg:px-[50px] py-10 rounded-md mt-8 bg-white'>
                <div className='flex justify-between'>
                    <form className='basis-1/3'>
                        <label className="sr-only">Search</label>
                        <div className="relative w-full">
                            <input type="text" id="voice-search" className="border-[1px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5" placeholder="Search..." />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                    <div className='flex'>
                        <button className='btn-primary' onClick={handleAddItem}>Add Item</button>
                        <AiOutlinePrinter className='text-4xl ml-5 text-green-800' />
                    </div>
                </div>
                <table className="min-w-full mt-10 border-[1px] border-gray-200 leading-normal table-fixed rounded-xl">
                    <thead>
                        <tr className='bg-white border-gray-200 text-left text-md text-stone-400 font-normal tracking-wider'>
                            <th
                                className="px-5 py-3"
                            >
                                Product Name
                            </th>
                            <th
                                className="px-5 py-3"
                            >
                                Brand
                            </th>
                            <th
                                className="px-5 py-3"
                            >
                                Price
                            </th>
                            <th
                                className="px-5 py-3"
                            >
                                Quantity
                            </th>
                            <th
                                className="px-5 py-3"
                            >
                                Total
                            </th>
                            <th
                                className="px-5 py-3"
                            >
                                Status
                            </th>
                            <th
                                className="px-5 py-3"
                            ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData && tableData?.length > 0 && tableData?.map((td, index) => {
                                return (
                                    <tr key={td.id} className="odd:bg-white even:bg-slate-50 border-b border-gray-200 text-sm">
                                        <td className="px-5 py-5">
                                            <div className="flex">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full"
                                                        src={avocadoImg}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900">
                                                        {td.productName}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5">
                                            <p className="text-gray-900">{td.brand}</p>
                                        </td>
                                        <td className="px-5 py-5">
                                            <p className="text-gray-900">{`${td.currency}${td.originalPrice} / 6 * 1LB`}</p>
                                        </td>
                                        <td className="px-5 py-5">
                                            <p className="text-gray-900">{`${td.quantity} x 6 * 1LB`}</p>
                                        </td>
                                        <td className="px-5 py-5">
                                            <p className="text-gray-900">{`${td?.originalTotal !== 0 ? td.currency : ""}${td.originalTotal}`}</p>
                                        </td>
                                        <td className="px-5 py-5 flex">
                                            <span
                                                className="relative inline-block px-3 py-1 font-semibold text-white leading-tight"
                                            >
                                                {
                                                    td?.status === "Missing" ?
                                                        (
                                                            <>
                                                                <span
                                                                    aria-hidden
                                                                    className="absolute inset-0 opacity-50 rounded-full bg-orange-500"
                                                                ></span>
                                                                <span className="relative">{td.status}</span>
                                                            </>
                                                        )
                                                        :
                                                        td?.status === "Approved"
                                                            ?
                                                            (
                                                                <>
                                                                    <span
                                                                        aria-hidden
                                                                        className="absolute inset-0 opacity-50 rounded-full bg-red-700"
                                                                    ></span>
                                                                    <span className="relative">{td.status}</span>
                                                                </>
                                                            )
                                                            :
                                                            (
                                                                <>
                                                                    <span
                                                                        aria-hidden
                                                                        className="absolute inset-0 opacity-50 rounded-full bg-green-800"
                                                                    ></span>
                                                                    <span className="relative">{td.status}</span>
                                                                </>
                                                            )
                                                }

                                            </span>
                                            <button onClick={() => handleApproveItem(td.id)}>
                                                <AiOutlineCheck className='ml-3 mr-3 mt-1 text-lg text-green-500' />
                                            </button>
                                            <button onClick={() => handleMissingModalOpen(td)}>
                                                <AiOutlineClose className='ml-3 mr-3 mt-1 text-lg text-red-500' />
                                            </button>
                                        </td>
                                        <td
                                            className="px-5 py-5"
                                        >
                                            <button
                                                type="button"
                                                className="inline-block text-gray-500 hover:text-gray-700"
                                                onClick={() => handleEditModalOpen(td)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                missingModal && (
                    <MissingModal
                        onClose={() => setMissingModal(false)}
                        isOpen={missingModal}
                        productName={currentData?.productName}
                        handleMissing={handleMissing}
                        handleMissingUrgent={handleMissingUrgent}
                    />
                )
            }
            {
                editModal && (
                    <EditModal
                        onClose={() => setEditModal(false)}
                        isOpen={editModal}
                        data={currentData}
                        price={editedPrice}
                        setPrice={setEditedPrice}
                        quantity={editedQuantity}
                        setQuantity={setEditedQuantity}
                        handleUpdate={handleUpdate}
                    />
                )
            }
        </div>
    )
}

export default DataTable