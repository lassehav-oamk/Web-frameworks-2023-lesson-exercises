import React from 'react'

export default function MainCoursePizza() {
  return (
    <div>
        <h1>Pizzas</h1>
        <table className={"menuTable"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Margharita</td>
            <td>8.5</td>
          </tr>
          <tr>
            <td>Quattro</td>
            <td>6.7</td>
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
