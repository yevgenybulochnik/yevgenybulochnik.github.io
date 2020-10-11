import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import { FocusStyleManager, Button } from '@blueprintjs/core'
import Nav from 'components/nav'

import './app.scss'
import "normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import "highlight.js//styles/atom-one-light.css"

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

FocusStyleManager.onlyShowFocusOnTabs()

function App() {
  return (
    <Root>
      <div className="page-container">
      <Nav
        branding="Yevgeny Bulochnik"
        config={[
          {to: '/', name: 'Home', icon: 'home'},
          {to: '/about', name: 'About', icon: 'person'},
          {to: '/programming', name: 'Programming', icon: 'applications'}
        ]}
      />
      <div className="content">
        <React.Suspense fallback={<div />}>
          <Router>
          <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <footer>
        <div className="icon-tray">
          <Button minimal>
            <a href="https://github.com/yevgenybulochnik">Github</a>
          </Button>
          <Button minimal>
            <a href="https://linkedin.com/in/yevgeny-eugene-bulochnik-b429a6155">
              LinkedIn
            </a>
          </Button>
          <Button minimal>
            <a href="/contact">Contact</a>
          </Button>
        </div>
      </footer>
     </div>
    </Root>
  )
}

export default App
