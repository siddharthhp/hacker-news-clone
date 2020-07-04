import React, {useContext} from 'react'
import {LineChart} from 'react-chartkick'
import 'chart.js'
import StoriesContext from '../context/stories'

export const BulletinChart = () => {
  const {stories} = useContext(StoriesContext)
  const initialValue = {}
  const chartData = stories.reduce((obj, item) => {
    return {
      ...obj,
      [item['objectID']]: item.points,
    }
  }, initialValue)
  return <LineChart xtitle="ID" ytitle="Votes" data={chartData} />
}
