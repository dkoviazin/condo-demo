
// TODO(zuch): use pino

class Logger {

    info (message, data) {
        console.log(message, data)
    }

    error (message, data) {
        console.log(message, data)
    }

    debug (message, data) {
        console.log(message, data)
    }

}

module.exports = {
    Logger,
}