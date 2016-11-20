/**
 * Registration
 * @constructor
 * @return {Registration}
 */
function Registration() {

  if( !(this instanceof Registration) )
    return new Registration()

  /**
   * The public key of the account key pair,
   * encoded as a JSON Web Key
   * @see RFC 7517
   * @type {JSONWebKey}
   */
  this.key = null

  /**
   * Status of authorization,
   * "good" or "deactivated"
   * @type {String}
   */
  this.status = null

  /**
   * An array of URIs that the server can use to
   * contact the client for issues related to this authorization.
   * @type {(Array<String>|Undefined)}
   */
  this.contact = null

  /**
   * A URI referring to a subscriber agreement or
   * terms of service provided by the server.
   * NOTE: Including this field indicates the client's
   * agreement with the referenced terms.
   * @type {String}
   */
  this.agreement = null

  /**
   * A URI from which a list of authorizations
   * submitted by this account can be fetched.
   * @type {String}
   */
  this.applications = null

  /**
   * A URI from which a list of certificates issued
   * for this account can be fetched via a GET request
   * @type {String}
   */
  this.certificates = null

  /**
   * Deprecated form of `this.applications`
   * @type {String}
   * @deprecated
   */
  this.authorizations = null

}

/**
 * Possible values for registration status
 * @type {Object}
 */
Registration.STATUS = {
  GOOD: 'good',
  DEACTIVATED: 'deactivated',
}

/**
 * Creates a Registration resource from JSON data
 * @param  {(String|Object)} value
 * @return {Registration}
 */
Registration.fromJSON = function( value ) {

  var data = typeof value !== 'string' ?
    value : JSON.parse( value )

  return Object.assign( new Registration(), data )

}

/**
 * Registration prototype
 * @type {Object}
 * @ignore
 */
Registration.prototype = {

  constructor: Registration,

}

// Exports
module.exports = Registration
