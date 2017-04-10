import React from 'react'

let AppLayout = function(props) {
  return (
    <div>
      <header>
        <h1>Renovation Search Results</h1>
      </header>
      <main>{props.children}</main>
    </div>
  )
}

export default AppLayout