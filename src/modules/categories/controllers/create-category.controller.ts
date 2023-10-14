import { Request, Response } from 'express'

import { CreateCategoryService } from '../services/create-category.service'

export class CreateCategoryController {
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body

    this.createCategoryService.run({ name, description })

    res.sendStatus(201)
  }
}
