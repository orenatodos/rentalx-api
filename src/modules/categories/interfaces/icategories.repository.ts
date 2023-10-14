import { Category } from '../category.model'
import { ICreateCategoryDto } from '../dtos/create-category.dto'

export interface ICategoriesRepository {
  create(createCategoryDto: ICreateCategoryDto): void
  list(): Category[]
  findByName(name: string): Category | undefined
}
