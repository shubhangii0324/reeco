import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function MissingModal({ isOpen, onClose, productName, handleMissing, handleMissingUrgent }) {
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
            maxWidth: '400px',
        },
    };

    return (
        <div style={modalStyles.overlay} onClick={onClose}>
            <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between'>
                    <h3 className='basis-1/2 whitespace-nowrap font-bold text-lg'>Missing Product</h3>
                    <button onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='mt-5 mb-5'>
                    <p>Is {productName} urgent?</p>
                </div>
                <div className='flex justify-end'>
                    <button className='mr-8 font-bold' onClick={handleMissing}>No</button>
                    <button className='font-bold' onClick={handleMissingUrgent}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default MissingModal