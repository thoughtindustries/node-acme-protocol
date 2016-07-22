/**
 * Application
 * @return {Application}
 */
function Application() {

  if( !(this instanceof Application) )
    return new Application()

  /**
   * The status of this authorization.
   * Possible values are: "unknown", "pending", "processing", "valid", and "invalid".
   * @type {String}
   */
  this.status = null
  /**
   * The timestamp after which the server will consider
   * this application invalid, encoded in the format specified in RFC 3339
   * NOTE: This field is REQUIRED for objects with
   * "pending" or "valid" in the status field.
   * @type {(String|Undefined)}
   * @see RFC 3339
   */
  this.expires = null

  this.csr = null
  this.notBefore = null
  this.notAfter = null
  this.requirements = null
  this.certificate = null

}

/**
 * Application prototype
 * @type {Object}
 */
Application.prototype = {

  constructor: Application,

}

// Exports
module.exports = Application
