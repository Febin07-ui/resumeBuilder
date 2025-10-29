import React from "react"
import Preview from '../components/Preview'
import UserInput from '../components/UserInput'

function UserForm() {
  return (

    <div className='container'>


      <div className="row p-5">
        <div className="col-lg-6">
          <UserInput/>
        </div>
        <div className="col-lg-6">
          <Preview/>
        </div>
      </div>
    </div>
    
  )
}

export default UserForm