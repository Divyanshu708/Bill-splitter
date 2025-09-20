import { useState } from "react";
import OutputSharing from "../utils/OutputSharing";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast, Bounce, Flip, Slide } from "react-toastify";
import Overlay from "../Components/Overlay";
import Transaction from "../Components/Transaction";
import Footers from "../Components/Footer";
import Layout from "../Components/Layout";

function App() {
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const notify = (message, type = "default") => {
    toast(message, {
      type,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };

  function addUser() {
    setUser([...user, { id: uuidv4(), name: "", amount: 0 }]);
  }

  function handleDelete(id) {
    const users = [...user];
    const deletedList = users.filter((e) => e.id !== id);
    setUser(deletedList);
    const total = deletedList
      .map((e) => e.amount)
      ?.reduce((sum, u) => sum + u, 0);
    setTotal(total);
  }

  function handleChange(id, field, value) {
    const updatedUser = user.map((item) =>
      item.id === id
        ? {
            ...item,
            [field]: field == "amount" ? Number(value) : value,
          }
        : item
    );

    setUser(updatedUser);
    const total = updatedUser.map((e) => e.amount).reduce((sum, u) => sum + u);
    setTotal(total);
  }

  function handleTransaction() {
    toast.dismiss();
    toast.clearWaitingQueue();
    const output = OutputSharing(total, user);
    const ifNameEmpty = user.every((e) => e.name === "");
    const ifAnyNameEmpty = user.some((e) => e.name === "");
    const ifAmountEmpty = user.every((e) => e.amount === 0);
    const toastOptions = {
      position: "top",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };

    if (user.length == 1) {
      notify("Need more then one user", "error");
    } else if (ifNameEmpty || ifAnyNameEmpty) {
      notify("Fill All the Names", "error");
      return;
    } else if (ifAmountEmpty) {
      notify("All Amounts are Zero", "warning");
      return;
    } else {
      setTransactions(output);
      setShowModel(true);
    }
  }

  function handleModal(e) {
    setShowModel(false);
  }

  return (
    <div className="bg-sky-950  h-[100dvh] w-screen flex justify-center items-center flex-col gap-2 ">
      <Layout
        handleTransaction={handleTransaction}
        addUser={addUser}
        total={total}
        user={user}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />

      {showModel ? (
        <>
          <Overlay handleModal={handleModal} />
          <Transaction transactions={transactions} handleModal={handleModal} />
        </>
      ) : (
        ""
      )}

      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={1800}
        newestOnTop={true}
        closeOnClick={true}
        theme="dark"
        limit={1}
        pauseOnFocusLoss={false}
      />

      <Footers />
    </div>
  );
}

export default App;
