import { Request, Response } from 'express'

import { CreateSpecificationService } from '../services/create-specification.service'

export class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body

    this.createSpecificationService.run({ name, description })

    res.sendStatus(201)
  }
}
