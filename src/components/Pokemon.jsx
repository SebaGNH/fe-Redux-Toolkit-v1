import React from 'react'

export const Pokemon = ({pokemon}) => {
  return (
    <>
    <div className="card border-primary mb-3 bg-secondary" >
      <div className="card-header">{pokemon.name}</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </>
  )
}


//style="max-width: 20rem;"