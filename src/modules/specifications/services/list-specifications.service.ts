import { ISpecificationsRepository } from '../interface/ispecifications.repository'

export class ListSpecificationsService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  run() {
    return this.specificationsRepository.list()
  }
}
