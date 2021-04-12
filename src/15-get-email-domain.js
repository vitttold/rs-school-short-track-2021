/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.match(/@[a-z0-9-]{2,}.[a-z]{2,3}/).pop().slice(1);
}

module.exports = getEmailDomain;
