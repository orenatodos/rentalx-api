import categoriesRepository from '../categories.repository'
import { CreateCategoryService } from '../services/create-category.service'
import { ListCategoriesService } from '../services/list-categories.service'

import { CreateCategoryController } from './create-category.controller'
import { ListCategoriesController } from './list-categories.controller'

const createCategoryService = new CreateCategoryService(categoriesRepository)
const listCategoriesService = new ListCategoriesService(categoriesRepository)

const createCategoryController = new CreateCategoryController(
  createCategoryService
)

const listCategoriesController = new ListCategoriesController(
  listCategoriesService
)

export { createCategoryController, listCategoriesController }
