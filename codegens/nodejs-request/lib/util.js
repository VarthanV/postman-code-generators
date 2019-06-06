
/**
 * sanitizes input string by handling escape characters eg: converts '''' to '\'\''
 * and trim input if required
 * 
 * @param {String} inputString
 * @param {Boolean} [trim] - indicates whether to trim string or not
 * @returns {String} 
 */
function sanitize (inputString, trim) {
    if (typeof inputString !== 'string') {
        return '';
    }
    (trim) && (inputString = inputString.trim());
    return inputString.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');
}
module.exports = {
    sanitize: sanitize
};
