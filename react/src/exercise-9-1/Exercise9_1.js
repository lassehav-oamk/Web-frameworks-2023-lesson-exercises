import React from 'react'

export default function Exercise9_1() {
  /*
  Create a controlled form that collects user information, 
  including name, email, and password. 
  
  Display the entered information in real-time as the user types. 
  */
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');


  return (
    <div>
      <div>
        Name: <input type="text" value={ userName } onChange={ event => setUserName(event.target.value)}/>
      </div>
      <div>
        Email: <input type="text" value={ userEmail } onChange={ event => setUserEmail(event.target.value)}/>
      </div>
      <div>
        Password: <input type="password" value={ userPassword } onChange={ event => setUserPassword(event.target.value)}/>
      </div>


      <div style={{marginTop: '20px'}}>
        <div>
          Your name is: { userName }
        </div>
        <div>
          Your email is: { userEmail }
        </div>
        <div>
          Your password is: { userPassword }
        </div>
      </div>
    </div>
  
  )
}
