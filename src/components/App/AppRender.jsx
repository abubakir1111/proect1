import React, { Fragment } from 'react'
import Main from '../page1/Main/main.jsx'
import Header from '../page1/header.jsx'

function AppRender() {
  return (
    <div className='app-container'>
      <Header />
      <Main />
    </div>
  )
}

export default AppRender