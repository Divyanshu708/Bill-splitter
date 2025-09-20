import UserList from "../Components/UserList";

function Layout({
  handleTransaction,
  addUser,
  total,
  user,
  handleChange,
  handleDelete,
}) {
  return (
    <div className="bg-slate-200  h-[70%] sm:h-[70%] w-[20rem] sm:w-[32rem] rounded-xl border-sky-2\300  flex flex-col items-center mb-15">
      <h1 className="font-bold text-xl sm:text-xl p-4 text-sky-900">
        Bill Splitter
      </h1>
      <div className=" list w-full h-full overflow-auto border-0 rounded-lg scrollbar-hide">
        {user.map((e, i) => (
          <UserList
            key={e.id}
            id={e.id}
            name={e.name}
            amount={e.amount}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <div className="w-full h-[8%] flex items-center border-t-2 border-sky-900 justify-between pt-8 p-5">
        <button
          className="sm:ml-3 bg-sky-800 hover:scale-105 transition-all cursor-pointer hover:bg-sky-900 font-bold w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex justify-center items-center pt-0.5 sm:pt-0  text-xl sm:text-2xl text-white"
          onClick={addUser}
        >
          +
        </button>
        <div className="flex flex-row gap-1">
          <h1 className="text-md sm:text-lg font-bold flex items-center text-sky-950">
            Total
          </h1>
          <h1 className="text-lg sm:text-xl font-bold flex items-center text-sky-950 sm:mb-1">
            :
          </h1>
          <input
            type="number"
            placeholder="Total"
            className="numFont pl-3 text-base sm:text- rounded-md w-28 flex-grow bg-white border-1 sm:border-2 border-sky-800 h-9 sm:h-10 placeholder:font-semibold placeholder:text-lg placeholder:text-sky-200 focus:outline-none font-semibold text-sky-800"
            disabled={true}
            value={total}
          />
        </div>
      </div>
      <button
        className="w-26 sm:w-34 h-13 sm:h-15 font-bold text-white mb-5 mt-2 bg-sky-800  hover:bg-sky-900 text-sm sm:text-lg rounded-full hover:scale-105 transition-all cursor-pointer"
        onClick={handleTransaction}
      >
        Calculate
      </button>
    </div>
  );
}

export default Layout;
