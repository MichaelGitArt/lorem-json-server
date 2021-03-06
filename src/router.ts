import { Router } from 'express'

import * as pieceController from './controllers/piece'
import * as authController from './controllers/auth'
import * as apiController from './controllers/api'

const router = Router()

router.get('/', (req, res) => {
  res.send(`
    <a href="/pieces">Pieces</a>
  `)
})

// External usage routes
router.get('/api/piece/:id', apiController.getPiece)

// Piece routes
router.post('/get-pieces', pieceController.getPieces)
router.post('/create-piece', pieceController.createPiece)
router.post('/delete-piece', pieceController.deletePiece)
router.post('/get-piece', pieceController.getPiece)
router.post('/update-piece', pieceController.updatePiece)

// Auth routes
router.post('/login', authController.login)
router.post('/register', authController.register)

export {
  router,
}
