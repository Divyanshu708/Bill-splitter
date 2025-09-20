import logo from "../src/assets/Vector.svg";
import del from "../src/assets/del.svg";
function UserList({ id, name, amount, onChange, onDelete }) {
  return (
    <div className=" flex justify-around h-15  ">
      <form className=" flex justify-between w-[100dvh] sm:w-[100dvh] items-center ml-2 mt-4 mr-2 sm:m-4 h-12 rounded-lg bg-sky-900/90 ">
        <div className="flex flex-row items-center w-full gap-3 ">
          <img
            src={logo}
            className="scale-60 sm:scale-75 w-7 ml-0.5 sm:ml-2 shrink-0 text-white"
          />
          <input
            type="text"
            className="-ml-3 sm:ml-0 pl-3 sm:pl-4 rounded-md flex-1 w-0 bg-white h-9.5 sm:h-10 placeholder:font-normal placeholder:text-sm  sm:placeholder:text-lg placeholder:text-slate-300  focus:outline-none text-sm sm:text-base text-sky-800"
            placeholder="Name"
            onChange={(e) => onChange(id, "name", e.target.value)}
            value={name}
            required
          />
        </div>
        <p className="ml-1 mr-1 font-bold text-base sm:text-xl text-slate-100 shrink-0">
          =
        </p>
        <input
          type="text"
          className="p-3 mr-2 rounded-md h-9.5 sm:h-10 flex-1 min-w-17 sm:min-w-27 placeholder:font-medium placeholder:text-xl bg-white placeholder:text-slate-300 font-semibold  focus:outline-none text-sm sm:text-base text-sky-800 numFont"
          onChange={(e) => onChange(id, "amount", e.target.value)}
          value={amount}
          placeholder="$"
        />
      </form>
      <img
        src={del}
        className="w-5 sm:w-4.5 mt-7 sm:mt-7 -ml-0.5 sm:-ml-2 mr-2 sm:mr-3 shrink-0 h-6 scale-100 sm:scale-120 cursor-pointer sm:hover:scale-130 transition-all"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}

export default UserList;
