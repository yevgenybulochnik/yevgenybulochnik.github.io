import React from 'react'
import { useRouteData } from 'react-static'
import convert from 'htmr'
import './Post.scss'

export default () => {
  const data = useRouteData()
  return (
    <div className='post'>
      {convert(data.contents)}
    </div>
  )
}
