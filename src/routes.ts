import { Router } from 'express'

import { categoryRoutes } from './modules/categories/category.routes'

export const routes = Router()

routes.get('/', (req, res) =>
  res.json({
    categories: 'http://localhost:3001/categories'
  })
)
routes.use('/categories', categoryRoutes)
