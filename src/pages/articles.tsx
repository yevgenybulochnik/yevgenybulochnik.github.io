import React from 'react'
import { useRouteData } from 'react-static'
import WorksList from 'components/workslist'

export default () => {
  const { articles }= useRouteData()

  return (
    <div>
      <h2 style={{marginLeft: '1em'}}>Articles</h2>
      <WorksList
        title=''
        works={articles}
        rootPath='/articles'
      />
    </div>
  )
}
