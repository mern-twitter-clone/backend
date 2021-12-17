import Winston from 'winston'

const logConfiguration: Winston.LoggerOptions = {
    transports: [
        new Winston.transports.Console({
            level: 'silly'
        }),
    ],
    format: Winston.format.combine(
        Winston.format.timestamp(),
        Winston.format.colorize(),
        Winston.format.ms(),
        Winston.format.printf(info => {
            const params = info.meta ? Object.keys(info.meta).map(key => `\x1b[36m${key}\x1b[37m=\x1b[33m${info.meta[key]}\x1b[0m`) : []
            params.push(`\x1b[32m${info.ms}`)
            return `\x1b[36m${info.timestamp}\x1b[0m ${info.level} \x1b[34m[${info.label}]\x1b[0m ${info.message} ${params.join(' ')}`
        })
    )
}

const Logger: Winston.Logger = Winston.createLogger(logConfiguration)

export default Logger