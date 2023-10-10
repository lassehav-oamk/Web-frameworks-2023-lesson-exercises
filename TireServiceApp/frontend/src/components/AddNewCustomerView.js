import React, { useState } from 'react'

export default function AddNewCustomerView() {
  const [customerName, setCustomerName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [tireManufacturer, setTireManufacturer] = useState('');
  const [tireSize, setTireSize] = useState('');
  const [tiresInSet, setTiresInSet] = useState('');
  const [warehouseName, setWarehouseName] = useState('');

  const saveToApi = (event) => {
    event.preventDefault();

    


  }

  return (
    <div>
      <h1>AddNewCustomerView</h1>
      <div>
        <form>
          <div className="formField">
            <div><label htmlFor="customerName">Customer name</label></div>
            <div><input type="text" value={customerName} id="customerName" onChange={(event) => {setCustomerName(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="registrationNumber">Registration number</label></div>
            <div><input type="text" value={registrationNumber } id="registrationNumber" onChange={(event) => {setRegistrationNumber(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="carModel">Car model</label></div>
            <div><input type="text" value={carModel} id="carModel" onChange={(event) => {setCarModel(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="tireManufacturer">Tire manufacturer</label></div>
            <div><input type="text" value={tireManufacturer} id="tireManufacturer" onChange={(event) => {setTireManufacturer(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="tireSize">Tire size</label></div>
            <div><input type="text" value={tireSize}  id="tireSize" onChange={(event) => {setTireSize(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="tiresInSet">Tires in set</label></div>
            <div><input type="number" value={tiresInSet} id="tiresInSet" onChange={(event) => {setTiresInSet(event.target.value)}}/></div>
          </div>
          <div className="formField">
            <div><label htmlFor="warehouseName">Warehouse name</label></div>
            <div><input type="text" value={warehouseName} id="warehouseName" onChange={(event) => {setWarehouseName(event.target.value)}}/></div>
          </div>


          <button onClick={saveToApi}>Save new Customer</button>
          
          

        </form>
      </div>
    </div>
  )
}
