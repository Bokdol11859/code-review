import { Label } from '../model/label';

export interface LabelRepository {
  getLabels(): Promise<Label[]>;
}
