import { Request, Response } from 'express'

import { ListCategoriesService } from '../services/list-categories.service'

export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  handle(req: Request, res: Response) {
    const categories = this.listCategoriesService.run()

    res.json(categories)
  }
}
