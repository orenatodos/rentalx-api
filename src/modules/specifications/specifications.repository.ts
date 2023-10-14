import { ICreateSpecificationDto } from './dtos/create-specification.dto'
import { ISpecificationsRepository } from './interface/ispecifications.repository'
import { Specification } from './specification.model'

class SpecificationsRepository implements ISpecificationsRepository {
  constructor(private specifications: Specification[] = []) {}

  list() {
    return this.specifications
  }

  create({ description, name }: ICreateSpecificationDto) {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description
    })

    this.specifications.push(specification)
  }

  findByName(name: string) {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    )

    return specification
  }
}

export default new SpecificationsRepository()
