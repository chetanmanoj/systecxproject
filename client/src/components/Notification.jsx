import React from 'react'

const Notification = (props) => {
  return (
    <div className='flex flex-row py-2'>
        <div className='flex flex-row'>
            <img src={props.pfp} alt='picture' className='h-14 rounded-3xl'/>
            <div className='flex flex-col'>
                <span>{props.name} has update {props.task}</span>
            </div>
        </div>
        <span>{props.time} ago</span>
    </div>
  )
}

export default Notification