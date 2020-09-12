import React from 'react'
import { useRouteData } from 'react-static'
import './Article.scss'
import convert from 'htmr'

export default () => {
  const { article } = useRouteData()
  console.log(article)
  return (
    <div className='article'>
      {convert(article.contents)}
    </div>
  )
}
