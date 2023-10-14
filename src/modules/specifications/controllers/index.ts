import { CreateSpecificationService } from '../services/create-specification.service'
import { ListSpecificationsService } from '../services/list-specifications.service'
import specificationsRepository from '../specifications.repository'

import { CreateSpecificationController } from './create-specification.controller'
import { ListSpecificationsController } from './list-specifications.controller'

const createSpecificationService = new CreateSpecificationService(
  specificationsRepository
)
const listSpecificationsService = new ListSpecificationsService(
  specificationsRepository
)

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
)
const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsService
)

export { createSpecificationController, listSpecificationsController }
