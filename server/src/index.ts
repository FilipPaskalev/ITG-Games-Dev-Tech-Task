// TODO (when finish with implementation of front-end)
// !: implement API KEY
// !: add Jest tests
// !: remove http://localhost:3000/users after tests
// !: Make root dir like old file server style (add html with access folders instead just print)
// !: remove Dev note for activation

// TODO create GET IMAGE BY ID

import express, { Application, NextFunction, Request, Response } from 'express'
import fs from 'fs'

// * * COMPONENTS
import Multipliers from './components/multipliers'

// * * ENUMS
import EnumRootParams from './enums/eRootParams'
import EnumRoots from './enums/eRoots'

// * * MOCK DB
import USERS from './dbMock/users'
import MULTIPLIERS from './dbMock/multipliers'
import GAME_CONFIGURATION from './dbMock/gameConfig'

export const SERVER: Application = express()

export const PROTOCOL: string = 'http'
export const HOST: string = 'localhost'
export const PORT: string | number = process.env.PORT || 3000

export const DOMAIN: string = PROTOCOL + '://' + HOST + ':' + PORT

let assets: Array<string> = new Array()

// fill assets
fs.readdir(__dirname + EnumRoots.ASSETS, (err, files) => {
  files.forEach((file) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }
    assets.push(file.toString())
  })
})

// * * Add PROXY (to avoid Access-Control-Allow-Origin error on local developing)
// TODO -> solution is taken from (https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9), dig deeper to understand it
// ?: Is it avoiding necessary
// !: check API KEY implementation and removing PROXY (CORS error)
SERVER.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// * * Access to images => static / public
SERVER.use(EnumRoots.ASSETS, express.static(__dirname + EnumRoots.ASSETS))
SERVER.use(express.static('public'))

// // !: remove root after finish with implementation
// // * * ROOT
// // localhost:3000/
// // SERVER.get('/', (req: Request, res: Response, next: NextFunction) => {
// //   let availableDirectories: string = 'Available directories: \n '
// //     .concat(DOMAIN + EnumRoots.ASSETS + '\n')
// //     .concat(DOMAIN + EnumRoots.CONFIG + '\n')
// //     .concat(DOMAIN + EnumRoots.MULTIPLIERS + '\n')
// //     .concat(DOMAIN + EnumRoots.USER + '/:' + EnumRootParams.USER_ID + '\n')
// //   res.send(availableDirectories)
// // })

// TODO SEARCH ASSET BY KEY(ID)

// * * CONFIGURATIONS
// http://localhost:3000/configuration
SERVER.get(EnumRoots.CONFIG, (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(GAME_CONFIGURATION)
})

// * * MULTIPLIERS
// localhost:3000/multipliers
SERVER.get(EnumRoots.MULTIPLIERS, (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json')
  res.json(Multipliers.get().options(3, MULTIPLIERS))
})

// * * USER BY ID
// localhost:3000/user/:userID
SERVER.get(EnumRoots.USER + EnumRootParams.USER_ID, (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json')
  res.json(USERS[parseInt(req.params.userID)])
})

// // !: To remove it after finish with developing
// // * * USERS
// // localhost:3000/users
// // SERVER.get(EnumRoots.USERS, (req: Request, res: Response, next: NextFunction) => {
// //  res.setHeader('Content-Type', 'application/json')
// //  return res.json(USERS)
// // })

// * * ASSETS
// localhost:3000/assets
SERVER.get(EnumRoots.ASSETS, (req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(assets)
})

// // !: To remove it after finish with coding
// // * * ACCESSES
// // localhost:3000/accesses
// // SERVER.get('/accesses', (req: Request, res: Response, next: NextFunction) => {
// //   res.setHeader('Content-Type', 'application/json')
// //   return res.json(Object.values(EnumRoots))
// // })

// !: To remove it after finish with developing
// * * Dev note
SERVER.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`)
  console.log('Access on ' + DOMAIN)
})
