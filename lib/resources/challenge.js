/**
 * Challenge
 * @constructor
 * @return {Challenge}
 */
function Challenge() {

  if( !(this instanceof Challenge) )
    return new Challenge()

}

/**
 * Challenge prototype
 * @type {Object}
 * @ignore
 */
Challenge.prototype = {

  constructor: Challenge,

}

// Exports
module.exports = Challenge
