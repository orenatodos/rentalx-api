import { Router } from 'express'

import {
  createCategoryController,
  listCategoriesController
} from './controllers'

export const categoryRoutes = Router()

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoriesController.handle)
