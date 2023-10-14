import { ICreateSpecificationDto } from '../dtos/create-specification.dto'
import { Specification } from '../specification.model'

export interface ISpecificationsRepository {
  create(createSpecificationDto: ICreateSpecificationDto): void
  list(): Specification[]
  findByName(name: string): Specification | undefined
}
