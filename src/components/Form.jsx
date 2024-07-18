import React, { useEffect, useState } from "react";

const Form = ({ saveTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransaction({
          id: edit.transaction.id,
          text: text,
          amount: +amount,
        })
      : saveTransaction(text, amount);

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="card p-3 rounded-0 shadow-sm">
      <h3 className="text-center text-secondary">Record Your Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          className="form-control my-2 rounded-0"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2 rounded-0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 rounded-0">
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
