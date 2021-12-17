/**
 * @author Ilia Kamilov <https://github.com/IliaKamilov>
 * @description This is the core file where all the envirnoment variables are exported
 */
import { config } from 'dotenv'

config()

// Exports server port 
export const PORT: number = parseInt(<string>process.env.PORT) || 4000

const protocols = ['http', 'https'] as const

type Protocol = typeof protocols[number]

export const PROTOCOL: Protocol = protocols.includes(process.env.PROTOCOL as Protocol) ? process.env.PROTOCOL as Protocol : 'http'

// Database 

export const MONGO_URI: string | undefined = process.env.MONGO_URI