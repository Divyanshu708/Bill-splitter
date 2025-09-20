import TransactionList from "./TransactionList";

function Transaction({ transactions, handleModal }) {
  return (
    <div className="h-[26rem] sm:h-1/2 w-[22rem] sm:w-[26rem]  xl:min-w-[30rem] flex flex-col gap-5 items-center pt-5 bg-sky-950 rounded-2xl border-2 border-slate-300/15 absolute ">
      <div className="w-full flex justify-between pl-10 pr-10 ">
        <p className="text-xl sm:text-2xl font-semibold text-slate-300 sticky">
          Balances{" "}
        </p>
        <p
          className="transition-all text-slate-300 font-normal text-3xl sm:text-4xl -mt-1  sm:-mt-2 cursor-pointer hover:scale-105 "
          onClick={(e) => handleModal(e)}
        >
          &times;
        </p>
      </div>

      <div className=" tList w-full mb-6  overflow-auto  h-96 flex flex-col  gap-2 itemsList px-7 items-start">
        {transactions?.map((e, i) => (
          <TransactionList key={i} transactions={e} />
        ))}
      </div>
    </div>
  );
}

export default Transaction;
