import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const expenseAddHandler = (addedExpense) => {
    const newExpense = {
      ...addedExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseAdd={expenseAddHandler} />
    </div>
  );
}
