import { Category } from './category.model'
import { ICreateCategoryDto } from './dtos/create-category.dto'
import { ICategoriesRepository } from './interfaces/icategories.repository'

class CategoriesRepository implements ICategoriesRepository {
  constructor(private categories: Category[] = []) {}

  create({ description, name }: ICreateCategoryDto) {
    const category = new Category()

    Object.assign(category, {
      name,
      description
    })

    this.categories.push(category)
  }

  list() {
    return this.categories
  }

  findByName(name: string) {
    const category = this.categories.find((category) => category.name === name)

    return category
  }
}

export default new CategoriesRepository()
