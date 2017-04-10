import companiesResult from './companies.json';

let getCompanies = function() {
	return Promise.resolve(companiesResult);
}

let getCompany = function(id) {
	for (var i = 0, len = companiesResult.length; i < len; i++) {
	  let company = companiesResult[i];

	  if (company.id === id) {
	    return Promise.resolve(company);
	  }

	} 
	return Promise.reject('Company not found with id: ' + id);
}

export { getCompanies, getCompany }
