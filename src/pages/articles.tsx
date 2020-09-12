import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
// import { Post } from 'types'

export default () => {
  const { articles }= useRouteData()

  return (
    <div>
      <ul>
        {articles.map((article: any, i: number) => (
          <li key={i}>
            <Link to={`/articles/${article.slug}`}>{article.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
