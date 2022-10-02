import React from 'react'
import { TeachersrewardStyles } from './TeachersrewardStyles'
import TeachersReward from '../../assets/TeachersReward.png'

const Teachersreward = () => {
  return (
    <TeachersrewardStyles>
        <div className="left-side">
            <h1>The teacher's reward should no longer be in heaven.</h1>
            <h2>The teacher <b>motivates</b></h2>
            <h2>The teacher <b>inspires</b></h2>
            <h2>The teacher <b>equips</b></h2>
            <h2>The teacher <b>loves</b></h2>
        </div>
        <div className="right-side">
            <img src={TeachersReward} alt="Teachers" />
        </div>
    </TeachersrewardStyles>
  )
}

export default Teachersreward
