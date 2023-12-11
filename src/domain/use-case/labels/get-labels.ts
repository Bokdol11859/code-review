import { inject, injectable } from 'inversify';
import { Label } from '../../model/label';
import type { LabelRepository } from '../../repository/label-repository';
import { TYPES } from '../../../di/types';

export interface GetLabelsUseCase {
  invoke: () => Promise<Label[]>;
}

@injectable()
export class GetLabels implements GetLabelsUseCase {
  private _labelRepo: LabelRepository;

  constructor(@inject(TYPES.LabelRepository) issueRepo: LabelRepository) {
    this._labelRepo = issueRepo;
  }

  async invoke() {
    return this._labelRepo.getLabels();
  }
}
