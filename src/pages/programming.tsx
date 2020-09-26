import React from 'react'
import { useRouteData } from 'react-static'
import WorksList from 'components/workslist'

export default () => {
  const { articles, projects }= useRouteData()

  return (
    <div>
      <h2 style={{marginLeft: '1em'}}>Projects</h2>
      <WorksList
        title=''
        works={projects}
        rootPath='/programming/projects'
      />
      <h2 style={{marginLeft: '1em'}}>Articles</h2>
      <WorksList
        title=''
        works={articles}
        rootPath='/programming/articles'
      />
    </div>
  )
}
