import { Router } from 'express'

import {
  createSpecificationController,
  listSpecificationsController
} from './controllers'

export const specificationRoutes = Router()

specificationRoutes.post('/', createSpecificationController.handle)
specificationRoutes.get('/', listSpecificationsController.handle)
