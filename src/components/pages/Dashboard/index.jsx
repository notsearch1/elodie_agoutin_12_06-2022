import React, { Fragment } from 'react'
import Nav from '../../Nav'
import Sidebar from '../../Sidebar'
import Contents from '../../Contents'
import { useFetch } from "../../../utils/hooks";

export default function Dashboard () {
  const { data, error, isLoading } = useFetch(`http://localhost:3000/user/12`);
  return (
    <Fragment>
        <Nav />
        <Sidebar />
        <Contents data={data} />
        
    </Fragment>
  )
}
