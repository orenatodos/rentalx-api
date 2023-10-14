import { Router } from 'express'

import { categoryRoutes } from './modules/categories/category.routes'
import { specificationRoutes } from './modules/specifications/specification.routes'

export const routes = Router()

routes.get('/', (req, res) =>
  res.json({
    categories: 'http://localhost:3001/categories',
    specifications: 'http://localhost:3001/specifications'
  })
)
routes.use('/categories', categoryRoutes)
routes.use('/specifications', specificationRoutes)
