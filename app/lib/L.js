/**
 * Matomo - Open source web analytics
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html Gpl v3 or later
 */

/**
 * Matomo - Web Analytics
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html Gpl v3 or later
 * @version $Id$
 */

var translation = require('Piwik/Locale/Translation');
    
function loadCurrentLanguage()
{
    translation.load();
}

Alloy.createCollection('AppSettings').settings().on('change:language', loadCurrentLanguage);

loadCurrentLanguage();

/**
 * Translation wrapper. Use this method if you want to translate any text within the application.
 *
 * @see      Piwik.Locale.Translation#getString
 * 
 * @param    {string}  key
 *
 * @example
 * L('General_Login') // outputs 'Login' if language is english.
 *
 * @returns  {string}  The translated key.
 */
function L (key) {

    return translation.getString(key);
}

module.exports = L;
