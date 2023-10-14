import { ICategoriesRepository } from '../interfaces/icategories.repository'

export class ListCategoriesService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  run() {
    return this.categoriesRepository.list()
  }
}
