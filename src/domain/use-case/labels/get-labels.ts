import { Label } from '../../model/label';
import { LabelRepository } from '../../repository/label-repository';

export interface GetLabelsUseCase {
  invoke: () => Promise<Label[]>;
}

export class GetLabels implements GetLabelsUseCase {
  private labelRepo: LabelRepository;
  constructor(_labelRepo: LabelRepository) {
    this.labelRepo = _labelRepo;
  }

  async invoke() {
    return this.labelRepo.getLabels();
  }
}
