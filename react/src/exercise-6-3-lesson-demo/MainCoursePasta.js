import React from 'react'

export default function MainCoursePasta() {
  return (
    <div>
        <h1>Pasta</h1>
        <table className={"menuTable"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbonara</td>
            <td>11.90</td>
          </tr>
          <tr>
            <td>Bolognese</td>
            <td>17.50</td>
          </tr>
          <tr>
            <td>Pollo</td>
            <td>8.9</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
