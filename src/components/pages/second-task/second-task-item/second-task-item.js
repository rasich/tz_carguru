import React from 'react';

import './second-task-item.css';

// import {useSelector} from 'react-redux';

const PeriodsBlock = ({periods, parentKey}) => {
  return periods.map((period, index) => {
    const {time, cost} = period;
    const key = `${parentKey}${index}`;
    return (
      <div className="second-item__period" key={key}>
        <span>Time: {time}</span>
        <span>Cost: {cost}</span>
      </div>
    )
  })
}

const RateBlock = ({rate, parentKey}) => {
  return rate.map((item, index) => {
    const {driving, parkingDay, parkingNight, mileage, freeMileage, periods} = item;
    const key = `${parentKey}${index}`;
    return (
      <div className="second-rate__item" key={key}>
        <div>Driving: {driving}</div>
        <div>Parking day: {parkingDay}</div>
        <div>Parking night: {parkingNight}</div>
        <div>Mileage: {mileage}</div>
        <div>Free mileage: {freeMileage}</div>
        <div>
          <span>Periods:</span>
          <div className="second-item__periods">
            <PeriodsBlock periods={periods} parentKey={key}/>
          </div>
        </div>
      </div>
    )
  })
}

const SecondTaskItem = ({task}) => {
  const {id, title, rates} = task;

  const ratesBlock = rates.map((rate, index) => {
    return (
      <div className='second-rate' key={index}>
        {<RateBlock rate={rate} parentKey={index}/>}
      </div>
    )
  });

  return (
    <div className="second-item" key={id}>
      <h2 className="second-item__title">{title} <sup>(id: {id})</sup></h2>
      <div className='second-item__rates'>
        {ratesBlock}
      </div>
    </div>
  )
}

export default SecondTaskItem;