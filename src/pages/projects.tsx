import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
// import { Post } from 'types'


export default () => {
  const { projects }= useRouteData()

  return (
    <div>
      <ul>
        {projects.map((projects: any, i: number) => (
          <li key={i}>
            <Link to={`/projects/${projects.slug}`}>{projects.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
