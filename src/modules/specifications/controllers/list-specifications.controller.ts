import { Request, Response } from 'express'

import { ListSpecificationsService } from '../services/list-specifications.service'

export class ListSpecificationsController {
  constructor(private listSpecificationsService: ListSpecificationsService) {}

  handle(req: Request, res: Response) {
    const specifications = this.listSpecificationsService.run()

    res.json(specifications)
  }
}
