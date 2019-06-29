import debug = require('debug')
import { red } from 'colors'
import { randomBytes } from 'crypto'

const logger = debug('ring-alarm')

export function delay(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

export function logInfo(message: any) {
  logger(message)
}

export function logError(message: any) {
  logger(red(message))
}

export function generateRandomId() {
  const id = randomBytes(16).toString('hex')
  return (
    id.substr(0, 8) +
    '-' +
    id.substr(8, 4) +
    '-' +
    id.substr(12, 4) +
    '-' +
    id.substr(16, 4) +
    '-' +
    id.substr(20, 12)
  )
}
