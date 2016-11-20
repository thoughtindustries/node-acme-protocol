/**
 * Certificate
 * @constructor
 * @return {Certificate}
 */
function Certificate() {

  if( !(this instanceof Certificate) )
    return new Certificate()

}

/**
 * Certificate prototype
 * @type {Object}
 * @ignore
 */
Certificate.prototype = {

  constructor: Certificate,

}

// Exports
module.exports = Certificate
