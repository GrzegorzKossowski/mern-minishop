// import colors library
const colors = require('colors')

// set colors theme
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

// set status
exports.status = {
    DEBUG: 'DEBUG',
    INFO: 'INFO',
    WARN: 'WARN',
    ERROR: 'ERROR',
    FATAL: 'FATAL',
}

/**
 * Prints console message in different colors, accorditg to status code
 * @param {string} message 
 * @param {enum} status status of log message
 */
exports.logger = (message = 'No msg', status = 'DEBUG') => {
    const now = new Date().toISOString()
    const date = now.split('T')[0]
    const time = now.split('T')[1].slice(0, 12)
    switch (status) {
        case 'DEBUG':
            console.log(`DEBUG: ${date} ${time} - ${message}`.debug);
            break
        case 'INFO':
            console.log(`INFO: ${date} ${time} - ${message}`.info);
            break
        case 'WARN':
            console.log(`WARN: ${date} ${time} - ${message}`.warn);
            break
        case 'ERROR':
            console.log(`ERROR: ${date} ${time} - ${message}`.error);
            break
        default:
            console.log(`LOG: ${date} ${time} - ${message}`.silly);

    }
}