import React from 'react'
import { getCompany } from '../xhr'

let CompanyProfile = React.createClass({

	getInitialState: function() {
		return {
			name: null,
			profile: null,
			logo: null,
      avg_rating_cache: null,
      services: null, 
      url: null
		}
	},

  componentDidMount: function() {
    getCompany(Number(this.props.params.id)).then(results => {

      this.setState({
        name: results.name,
        profile: results.profile,
        logo: results.logo,
        avg_rating_cache: results.avg_rating_cache,
        services: results.services,
        url: results.url
      })
    })
  },

  render: function() {
    return (
      <div className="companyProfile">
        <h2 className="comp-prof-hdr">{this.state.name}</h2>
        <div className="left-col">
          <img className="comp-prof-logo" src={this.state.logo} alt="company logo"/>
          <a className="comp-prof-link" href={this.state.url}target="_blank">visit company site</a>
        </div>
        <div className="right-col">
          <div className="comp-prof-txt">{this.state.profile}</div>
          <div><em>Average Rating:</em> {this.state.avg_rating_cache}</div>
          <div className="comp-prof-serv"><em>Services:</em> {this.state.services}</div>
        </div>
      </div>
    )
  }

})

export default CompanyProfile