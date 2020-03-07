import React from 'react'

function SignUp() {
  return(
    <div>
      <form>
          <label>User Name</label>
          <input type="text"/>
          <label>Email</label>
          <input type="text"/>
          <label>Number</label>
          <input type="number"/>
          <label>password</label>
          <input type="password" />
          <input type="submit" />
        </form>
    </div>
  )
}

export default SignUp