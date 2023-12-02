import { LabelAPIEntity } from './api/entity/label-api-entity';

export default interface LabelDataSource {
  getLabels(): Promise<LabelAPIEntity[]>;
}
