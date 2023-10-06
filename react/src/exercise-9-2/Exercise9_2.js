import React from 'react'

export default function Exercise9_2() {
  /* 
      Develop an uncontrolled form that gathers user contact information, including first name,
      last name, phone number, and address. Display the entered information when the user clicks a "Submit" button. 
  */


  const formSubmit = (e) => {
    // prevent the default form submit action
    e.preventDefault();
    console.log('form submitted');

    // get the form data
    const formData = new FormData(e.target);
    console.log(formData);

    // read the form data
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const phoneNumber = formData.get('phoneNumber');
    const address = formData.get('address');
    
    console.log(firstName, lastName, phoneNumber, address);
    
  }


  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName"/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName"/>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" name="phoneNumber"/>
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address"/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>        
      </form>
    </div>
  )
}
