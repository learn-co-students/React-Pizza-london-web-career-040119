import React from "react"

const Pizza = ({pizza, editClickHandler}) => {
  const {id, topping, size, vegetarian} = pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => editClickHandler(id)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
