import jdown from 'jdown'
import chokidar from 'chokidar'
import { rebuildRoutes } from 'react-static/node'
import path from 'path'
import hljs from 'highlight.js'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

let areRoutesBuilt = false

if (process.env.NODE_ENV === 'development') {
  chokidar.watch('src/content').on('all', () => areRoutesBuilt && rebuildRoutes())
}

export default {
  siteRoot: 'https://yevgenybulochnik.com',
  devServer: {
    host: '0.0.0.0',
  },
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    areRoutesBuilt = true
    const props = await jdown('src/content', {
      markdown: {
        highlight: (code) => {
          return hljs.highlightAuto(code).value
        }
      }
    })

    let { articles, projects } = props

    return [
      {
        path: '/',
        getData: () => ({
          articles,
          projects,
        })
      },
      {
        path: '/programming',
        template: 'src/pages/programming',
        getData: () => ({
          articles,
          projects
        }),
        children: [
          ...articles.map(article => ({
            path: `/articles/${article.slug}`,
            template: 'src/containers/Post',
            getData: () => article,
          })),
          ...projects.map(project => ({
            path: `/projects/${project.slug}`,
            template: 'src/containers/Post',
            getData: () => project,
          }))
        ]
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-mdx',
    'react-static-plugin-sass',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
