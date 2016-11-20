/**
 * Directory
 * @constructor
 * @return {Directory}
 */
function Directory() {

  if( !(this instanceof Directory) )
    return new Directory()

  /** @type {String} */
  this['new-authz'] = undefined
  /** @type {String} */
  this['new-cert'] = undefined
  /** @type {String} */
  this['new-reg'] = undefined
  /** @type {String} */
  this['revoke-cert'] = undefined
  /** @type {String} */
  this['key-change'] = undefined

  /**
   * @type {Object}
   * @property {String} [terms-of-service]
   * @property {String} [website]
   * @property {Array<String>} [caa-indentities]
   */
  this['meta'] = {
    'terms-of-service': undefined,
    'website': undefined,
    'caa-identities': [],
  },

}

/**
 * Creates a Directory resource from JSON data
 * @param  {(String|Object)} value
 * @return {Directory}
 */
Directory.fromJSON = function( value ) {

  var data = typeof value !== 'string' ?
    value : JSON.parse( value )

  return Object.assign( new Directory(), data )

}

/**
 * Directory prototype
 * @type {Object}
 * @ignore
 */
Directory.prototype = {

  constructor: Directory,

}

// Exports
module.exports = Directory
