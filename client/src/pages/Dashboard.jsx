import { StatsWidget, Notification } from "../components";
import { dash } from "../assets";
import { insights1, insights2, notif, user, trades } from "../data/dash";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Dashboard = () => {
  return (
    <div className="bg-[#EEEFFF] p-8 flex flex-col gap-6 font-gilroy">
      <div className="flex flex-row">
        <div className="flex flex-row gap-4 justify-center text-[#707895] text-[16px] font-semibold">
          <img src={dash} alt="dash icon" />
          <h1 className="text-[#707895] font-bold">DASHBOARD</h1>
        </div>
        <select></select>
      </div>
      <div className="flex flex-row gap-7">
        <div className="flex flex-col gap-6">
          {/* MAIN WIDGET */}
          <div className="flex flex-col justify-center gap-4 h-[22.68rem] max-w-[43.62rem] rounded-3xl bg-mainboard px-8">
            {user.map((data) => (
              <div className="flex flex-row gap-4">
                <img
                  src={data.pfp}
                  alt="User"
                  className="h-14 rounded-3xl bg-[#FFCE22]"
                />
                <div className="flex flex-col">
                  <span className="text-[#9FADC7] text-[17px]">
                    Good Morning,
                  </span>
                  <span className="text-[#69789F] text-[22px]">
                    {data.name}
                  </span>
                </div>
              </div>
            ))}
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
          <div className="h-[20.5rem] max-w-[43.62rem] rounded-3xl bg-white">
            <div className="h-[70px] bg-[#F9F9FF] flex items-center rounded-t-3xl justify-between px-6 ">
              <h1 className="text-[20px] text-[#69789F] font-medium">
                Notifications
              </h1>
              <span className="text-[#2C67FF] underline decoration-[#2C67FF] underline-offset-8 text-[14px] font-medium">
                View All
              </span>
            </div>
            <div className="flex flex-col gap-4 font-poppins">
              {notif.map((data) => (
                <Notification
                  key={data.id}
                  pfp={data.pfp}
                  name={data.name}
                  task={data.task}
                  tag={data.tag}
                  time={data.time}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="h-[43.9rem] w-[19.6rem] bg-divisions rounded-3xl"></div>
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
      <span className="text-[22px] text-[#69789F]">TRADES OVERVIEW</span>
      <div className="flex flex-col w-[78.3rem] h-[25.3rem] bg-tradesboard rounded-3xl p-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-[12px] text-[#9FADC7] ">TOTAL TRADES</span>
            <span className="text-[#383874] text-[3rem] font-gilroy">3586</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] text-[#9FADC7] ">
              TOTAL REVENUE OF TRADES
            </span>
            <div className="flex flex-row items-center justify-center gap-1">
              <span className="text-[3rem] font-gilroy text-[#69789F]">
                $<span className="text-[#383874]">3,945.07</span>
              </span>
              <div className="bg-[#12948C] text-white text-[20px] h-[32px] w-[82px] text-center rounded-[5px]">
                10.2%
                <ArrowUpwardIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
        {trades.map((data) => (
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
