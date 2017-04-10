import React from 'react'
import { Link } from 'react-router'

let Company = function(props) {
    return (
      <div className="company">
        <div className="company-name"><Link to={"/profile/" + props.id}>{props.name}</Link></div>
        <div className="company-rating"><em>Average Rating:</em> {props.rating}</div>
      </div>
    )
}

export default Company