import React from 'react'
import { MdDelete } from 'react-icons/md'
import './ExpenseList.css'
import Expenseitem from './Expenseitem'

const ExpenseList = ({handleDelete, expenses, handleEdit, clearItems}) => {
  
    console.log(expenses)
    return (
      <>
      <ul className='list'>
        {/* {ExpenseItem} */}
        {expenses.map(expense =>{
          return(
            <Expenseitem 
            expense={expense}
            key={expense.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            
            />
            
         )
        })}
          
      </ul>
      {expenses.length > 0 && (
         <button className='btn' onClick={clearItems}>
             목록 지우기
             <MdDelete className='btn-icon'/>
         </button>
      )}
     
      </>
    )
  
}

export default ExpenseList