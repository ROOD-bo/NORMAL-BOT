const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || ' BWM-XMD;;;H4sIAAAAAAAAA5VUy46jRhT9lai2pmMMNgZLLQVjt41f2OC2saNZlKGAMk9DAcatXkRRVtl0S1lELfkDMomUbDLKaJRNPiVf4E+IaHerZ5GZdJBKlG5VnTp1z7n3BgQhTtAQFaB1A6IYZ5CgckqKCIEWaKeWhWJAARMSCFpgqAhalRYqWy5byFdkXNs5cz3xe6ayXZi9gy5lorrb1FiZXV2CWwpE6cbDxmcAe5sDrohiu5ooa1riBNQN2CuDVANtSYqhEEdtbSNzFdYPri/BbYkIcYwDuxs5yEcx9IaomEIcv46+MVkERtBLjDFThNZMG6sMHfULT7SI6a+r1x43t/qTUO3q9Ovoi6rvVrxd5OuiMOD1miaKDYnjBW+pHvyN3svpasfP5UEjT870E2wHyJRNFBBMilfnvTutXKmModJpZ78brLztXNcXqo3XaRFtnAqaeLFDD50t49dfR5yYrm3nDQ4ZB2UcTKSBo7OOZ8brddudVOer1dKMRlxa1HX+Y+LT+Nkr7v/JO5o2BqnqhlUpcvIYifkaF0mlwVY7EzMudMbKFs1ZdS6NWON19NNhahrRwnU04WBLjggZoRvhYmE1ElgZjWR7NbzmFH1Q88UX+pCk8edY7vll4uCxvYiDhuTuHVofjJiVW0wrdDGZ9y1mt3EnU6Mzyp1cjVkmH+xcFuuKKWFTVl2tuvS3W3c5W5qpNxnNslqxCsX88vFFLipkE7RqtxSIkY0TEkOCw6CMNQUKQDPTkBEj8phdUINwsJSVXY8no6603WdhOFKNzAiH9f4gb8grgxd91DZZ3bgEFIji0EBJgsw+TkgYF2OUJNBGCWh9/YYCAdqTs27lbWyNAhaOE3IdpJEXQvNZ1OdFaBhhGhCtCAypnKAYtOiXMCIEB3ZSpjENYGw4OEOSA0kCWhb0EnRLARNl2EAlHsA1u3nh+8J831tJgry8OGhknpeUnTA4b2nyLF8XauYFh5BwUa/z3AVEhnDBcgzD0Dxfg5YJKICfSqY880kFlSnkNz6sd/vuPE2Znk1v6Yys7OrQflThnHoUIxO0SJwiCmyg4abRPHRR8BncoK/27Stlyy3SpGIhZ4FZZrKkE77Gf4R7lhS0bl7alBSaJd6qyS+vmvwYUMB/dCAuX96gBbbZYISaUG81m18lX+ZlHmEUfRkgAigQwHIzOB3v356O9+9Px/tfTsf7P0/H+99Ox/sPp+P9uy9Ox4c/TseHn8//ux/LwNvT8eHX87j7tgz8dDre/XA6Pnx4Gr+fN919dzrefV+e+uv939+8Kx/ypHJJ0UQEYi8BLSCNFMkf1vvdsSYGMd3riV1blGwRvLjiubrO9h1vvXBXleEgtHYTs5MEK662Y6Kh7HlBZvcqbhBulK2LTdy9/BcQ0AIVUvWyjpo5zMEKGSiLcuHUm1puNY1tNsY9bcd4HO747JXCb5cVtmFVpkldMNLmdmlH/c6hjUQpj9twqegJYnwl2m/as8vytrM7P77swGRhnlp1jjN5puMygnB9kPZDqY9dbsjZSdwly43EeEw/1atFu12dqUGsWpZ2tRhYhrEeSZnEa73mxMorbNWPp1OFlmbnun/sO95Tv8ePJXnz5GULo8f2+STzf7nhparoW+ojiKd+/AnntudyAw6zoodhn9vqs+aAUQgkOw0P1utmvZ1FA653CBtysHLA7e0bCkQeJFYY+6AFEn8DAQU8mBDxpSvMsY8SAv0ItGpNVqBZmqMFCviFGEUageS5mQCx/MYQgdt/ACf+ZCFnCAAA ',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Rood",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " +50937529194",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || yes,
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'yes',
    CHATBOT : process.env.CHATBOT || 'yes',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





