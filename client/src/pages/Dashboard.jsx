import { StatsWidget, Notification } from "../components";
import { dash } from "../assets";
import { insights1, insights2, notif, } from "../data/dash";

const Dashboard = () => {
  return (
    <div className="bg-[#EEEFFF] p-8">
      <div className="flex flex-row">
        <div className="flex flex-row gap-4 justify-center text-[#707895] text-[16px] font-semibold">
          <img src={dash} alt="dash icon" />
          <h1>DASHBOARD</h1>
        </div>
        <select></select>
      </div>
      <div className="flex flex-row gap-7">
        <div className="flex flex-col gap-6">
          <div className="h-[22.68rem] min-w-[43.62rem] rounded-3xl bg-mainboard">
         <div className="flex flex-row justify-center gap-5">
          {insights1.map((data) => (
            <StatsWidget
              key={data.id}
              icon={data.icon}
              number={data.number}
              text={data.text}
            />
          ))}
          </div>
          </div>
          <div className="h-[20.5rem] min-w-[43.62rem] rounded-3xl bg-white">
            <div className="h-[70px] bg-[#F9F9FF] flex items-center rounded-t-3xl justify-between px-6 ">
              <h1 className="text-[20px] text-[#69789F] font-medium">Notifications</h1>
              <span className="text-[#2C67FF] underline decoration-[#2C67FF] underline-offset-8 text-[14px] font-medium">View All</span>
            </div>
            {notif.map((data) => (
            <Notification
              key={data.id}
              pfp={data.pfp}
              name={data.name}
              task={data.task}
              time={data.time}
            />
          ))}
          </div>
        </div>
        <div className="h-[43.9rem] w-[19.6rem] bg-insights rounded-3xl">
          fdaf
        </div>
        <div className="flex flex-col gap-4">
          {insights2.map((data) => (
            <StatsWidget
              key={data.id}
              icon={data.icon}
              number={data.number}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
