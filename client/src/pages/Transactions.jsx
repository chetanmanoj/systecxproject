import { dash } from "../assets";

const Transactions = () => {
  return (
    <div className="bg-[#EEEFFF] p-8 flex flex-col gap-6 font-gilroy">
    <div className="flex flex-row">
      <div className="flex flex-row gap-4 justify-center text-[#707895] text-[16px] font-semibold">
        <img src={dash} alt="dash icon" />
        <h1 className="text-[#707895] font-bold">TRADES TRANSACTIONS</h1>
      </div>
      
    </div>
   
  </div>
  )
}

export default Transactions