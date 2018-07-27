const account = require('../models').account;

module.exports = {
	list(req, res) {
	    return account.findAll()
	      .then((account) => res.status(200).send(account))
	      .catch((error) => { res.status(400).send(error); });
	  },

}