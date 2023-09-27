import { configureStore } from '@reduxjs/toolkit'
import tableReducer from './reducer';

export default configureStore({
  reducer: {
    tableData: tableReducer
  }
})