import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import { FocusStyleManager } from '@blueprintjs/core'
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
    </Root>
  )
}

export default App
