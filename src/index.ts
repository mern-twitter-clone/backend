import Express from 'express'
import Http from 'http'
import { PORT, PROTOCOL } from './core'
import MongoService from './core/mongo'
import Logger from './logger'

const app: Express.Application = Express()
const server: Http.Server = Http.createServer(app)

server.listen(PORT, () => {
    Logger.log({
        message: `Server Listening`,
        level: 'info',
        label: PROTOCOL,
        meta: {
            port: PORT,
            protocol: PROTOCOL
        }
    })

    MongoService
        .connect()
        .then(() => {
            Logger.log({
                level: 'info',
                message: 'Database Connected',
                label: 'mongoose',
            })
        })
        .catch(error => {
            Logger.log({
                level: 'warn',
                message: error.message,
                label: 'mongoose',
            })
        })
})