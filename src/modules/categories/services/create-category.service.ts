import { ICreateCategoryDto } from '../dtos/create-category.dto'
import { ICategoriesRepository } from '../interfaces/icategories.repository'

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  run({ description, name }: ICreateCategoryDto) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`)
    }

    this.categoriesRepository.create({ name, description })
  }
}
