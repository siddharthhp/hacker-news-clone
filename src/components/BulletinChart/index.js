import React from 'react'
import {LineChart} from 'react-chartkick'
import 'chart.js'

export const BulletinChart = ({data}) => {
  return <LineChart xtitle="ID" ytitle="Votes" data={data} />
}
