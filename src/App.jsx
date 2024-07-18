import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import TransactionsList from "./components/TransactionsList";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  const saveTransaction = (text, amount) => {
    setTransactions([
      { id: crypto.randomUUID(), text, amount: parseInt(amount) },
      ...transactions,
    ]);
    toast.success("Transaction Success!!");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));

    toast.error("Transaction Deleted!!");
  };

  const editTransaction = (transaction) => {
    setEdit({
      transaction: transaction,
      isEdit: true,
    });
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((item) =>
        item.id === updatedTransaction.id ? updatedTransaction : item
      )
    );

    setEdit({ transaction: {}, isEdit: false });

    toast.success("Transaction Updated!!");
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <Form
          saveTransaction={saveTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <Dashboard transactions={transactions} />
        <TransactionsList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
