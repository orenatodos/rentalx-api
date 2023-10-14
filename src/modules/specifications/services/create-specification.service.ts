import { ICreateSpecificationDto } from '../dtos/create-specification.dto'
import { ISpecificationsRepository } from '../interface/ispecifications.repository'

export class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  run({ description, name }: ICreateSpecificationDto) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
