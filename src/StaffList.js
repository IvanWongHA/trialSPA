import React from 'react'
import style from './StaffList.module.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Title from './Title'

export default function StaffList() {
 
  let StaffList = [
    {"id" : 1, "name" : "Ivan", "post":"CJP", "img":"ivan.jpg"},
    {"id" : 2, "name" : "Tempo", "post":"P", "img":"tempo.jpg"}
  ] 



  //let staff = '員工'

  const[showStaff, setShowStaff] = useState(false)
    

 
  return (
    <div>
        <Title mainTitle="Please select a staff."/>
        <div><h3>HA Staff List</h3></div>
        {!showStaff && <button onClick={()=>{setShowStaff(true)}}>Show Staff</button>}
        {showStaff &&<button onClick={()=>{setShowStaff(false)}}>Hide Staff</button>}
        <div>
          {
            showStaff && StaffList.map(staff=>(
              <div className={style.staffBorder} key={staff.id}>
                {staff.id}<br/>
                {staff.name}<br/>
                {staff.post}<br/>
               <Link to={'/staffdetail/'+staff.id}><img src={process.env.PUBLIC_URL+'/img/'+staff.img}/><br/><br/></Link>
                </div>
              )
            )
          }
          
        </div>
        
    </div>
    
  )
}
