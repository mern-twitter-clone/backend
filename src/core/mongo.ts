import Mongoose from 'mongoose'
import { MONGO_URI } from '.'
import Logger from '../logger'

const MongoService = {
    connect: () => {
        if (!MONGO_URI) return Promise.reject(Error('Database uri not provided.'))

        Logger.log({
            level: 'info',
            message: 'Connecting',
            label: 'mongoose',
        })
        return Mongoose.connect(MONGO_URI)
    }
}

export default MongoService