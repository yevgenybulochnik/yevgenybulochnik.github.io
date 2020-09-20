import React from 'react'
import { useRouteData } from 'react-static'
import './index.scss'

import Headshot from 'components/headshot'
import WorksList from 'components/workslist'

export default () => {

  const { articles, projects } = useRouteData()
  console.log(articles)
  console.log(projects)

  return (
    <div className='home'>
      <div className='intro'>
        <h2>
          Hi! Welcome to my site. I am <em>Passionate</em> about healthcare and technology. A <em>Pharmacist</em> by trade with the knowledge of a <br/> <em>FullStack Developer</em>.
        </h2>
      </div>
      <div className='sidebar'>
        <Headshot
          name='Yevgeny (Eugene) Bulochnik'
          credentials='PharmD 340B ACE CACP'
          src='https://avatars0.githubusercontent.com/u/12432798?s=460&u=38bd314c0d984f572f817ed291d57a81eea2e3d3&v=4'
          height='300px'
        />
      </div>
      <div className='intro-paragraph'>
        <p>
          It is exciting and empowering to be a clinician with patient care experience, while also having programming knowledge.
        </p>
        <p>
          Can you think of the last time you spoke to a local pharmacist or primary care doctor about <a href='https://kubernetes.io/'>Kubernetes</a> or the newest javascript framework to pop up? Whether its <a href='https://reactjs.org/'>React</a> for frontend development, <a href='https://www.ansible.com/'>Ansible</a> for devops or data manipulation with python <a href='https://pandas.pydata.org/'>Pandas</a>, I am engaged!
        </p>
        <p>
          I believe having clinicians who understand the development cycle, who understand how developers approach problems and can actively contribute to a codebase are extremely valuable.
        </p>
      </div>
      <div className="home-content">
        <h2>Recent Work</h2>
        <WorksList title="Projects" works={projects} rootPath='/projects' />
        <WorksList title="Articles" works={articles} rootPath='/articles' />
      </div>
    </div>
  )
}
