

const StatsWidget = (props) => {
  return (
    <div className='w-[12.5rem] h-[14rem] bg-white flex flex-col justify-between rounded-3xl p-4'>
        <img src={props.icon} alt="Insight" className="w-12 h-12"/>
        <div className="flex flex-col">
            <span className="text-[36px] text-[#383874]">{props.number}</span>
            <span className="text[12px] text-[#969FB6]">{props.text}</span>
        </div>
    </div>
  )
}

export default StatsWidget

