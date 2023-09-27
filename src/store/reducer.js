import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json';


export const tableSlice = createSlice({
    name: 'table',
    initialState: {
        tableData: data,
        selectedItem: null
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const newId = state.tableData.length + 1;
            newItem.id = newId;
            state.tableData.push(newItem);
        },
        approveItem: (state, action) => {
            const itemId = action.payload;
            const itemToUpdate = state.tableData.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.status = "Approved";
            }
        },
        missingItem: (state, action) => {
            const { itemId, isUrgent } = action.payload;
            const itemToUpdate = state.tableData.find(item => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.status = isUrgent ? "Missing-Urgent" : "Missing";
            }
        },
        editItem: (state, action) => {
            const { itemId, updatedPrice, updatedQuantity } = action.payload;
            const itemToEdit = state.tableData.find(item => item.id === itemId);
            if (itemToEdit) {
                if (updatedPrice !== itemToEdit.originalPrice && updatedQuantity !== itemToEdit.quantity) {
                    itemToEdit.status = "Price and Quantity Updated"
                } else if (updatedPrice !== itemToEdit.originalPrice) {
                    itemToEdit.status = "Price Updated"
                } else if (updatedQuantity !== itemToEdit.quantity) {
                    itemToEdit.status = "Quantity Updated"
                }
            }
        }
    }
})

export const { addItem, approveItem, missingItem, editItem } = tableSlice.actions

export default tableSlice.reducer