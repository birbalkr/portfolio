import React from 'react'
import Home from './Home/Home'
import { About, Project } from '.'
import { CodeBracketIcon, GlobeAltIcon, ServerStackIcon, WrenchScrewdriverIcon } from '@heroicons/react/16/solid'
import Skills from './Skill/Skills'

function MainPage() {
    return (
        <div>
            <Home />
            <About/>
            <Project />
          <Skills/>
        </div>
    )
}

export default MainPage
