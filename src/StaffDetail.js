import React from 'react'
import {useParams, Link} from "react-router-dom"
import Title from './Title'

export default function StaffDetail() {

    let params = useParams()
  return (
    
    <div>
        <Title  mainTitle={params.id+'Staff Detail'}/>
        StaffDetail
        #{params.id}

        <button><Link to="/">Staff List</Link></button>
    </div>
  )
}
