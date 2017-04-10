import React from 'react'
import Company from './Company'
import { getCompanies } from '../xhr'

let Companies = React.createClass({

  getInitialState: function() {
    return {
      companies: []
    }
  },

  componentDidMount: function(){
    getCompanies().then(results => {
      console.log(results)
      this.setState({
        companies: results
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>Search Results: </h3>
        {this.state.companies.map(company => {
        return (
          <Company 
            name={company.name} 
            id={company.id}
            key={company.id} 
            rating={company.avg_rating_cache}
          />
        )
        })}
      </div>
    )
  }
})

export default Companies