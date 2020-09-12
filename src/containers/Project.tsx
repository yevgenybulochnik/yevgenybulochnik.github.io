import React from 'react'
import { useRouteData } from 'react-static'
import convert from 'htmr'
import './Project.scss'

export default () => {
  const { project } = useRouteData()
  return (
    <div className='project'>
      {convert(project.contents)}
    </div>
  )
}
