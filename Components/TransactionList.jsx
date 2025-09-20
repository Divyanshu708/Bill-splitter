function TransactionList({ transactions }) {
  return transactions.msg ? (
    <div className="border-2 w-full p-2 items-start justify-start rounded-md border-blue-400 font-semibold text-sm text-blue-700">
      <p className="pl-3">
        <span className="text-green-700 ">{transactions.msg}</span>
      </p>
    </div>
  ) : (
    <div className="border w-fit min-w-full shrink-0 p-0.2 sm:p-1.5 items-start justify-start rounded-md border-blue-200 font-semibold text-sm text-blue-200 ">
      <div className="pl-3 flex grow gap-1 sm:gap-3 items-center ">
        <div className="flex items-center gap-1 sm:gap-3 min-w-0">
          <span className="text-lime-300 text-xs sm:text-sm">
            {transactions.from}
          </span>
          <span className=" text-2xl mb-2 sm:mb-1.5 scale-120 sm:scale-130 ">
            &#8594;
          </span>
          <span className="text-amber-200 text-xs sm:text-sm whitespace-nowrap">
            {transactions.to} :{" "}
          </span>
        </div>
        <span className="text-slate-200 numFont text-sm sm:text-base whitespace-nowrap pr-3">
          $ {transactions.amount.toFixed(1)}
        </span>
      </div>
    </div>
  );
}

export default TransactionList;
