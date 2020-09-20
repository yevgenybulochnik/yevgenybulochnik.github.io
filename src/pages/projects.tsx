import React from 'react'
import { useRouteData } from 'react-static'
import WorksList from 'components/workslist'

export default () => {
  const { projects }= useRouteData()

  return (
    <div>
      <h2 style={{marginLeft: '1em'}}>Projects</h2>
      <WorksList
        title=''
        works={projects}
        rootPath='/projects'
      />
    </div>
  )
}
