import React, { Fragment } from 'react'
import Nav from '../../Nav'
import Sidebar from '../../Sidebar'
import Contents from '../../Contents'


export default function Dashboard () {
  return (
    <Fragment>
        <Nav />
        <Sidebar />
        <Contents/>
        
    </Fragment>
  )
}
