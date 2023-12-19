import { LabelAPIEntity } from '../entity/label-api-entity';

export default interface LabelDataSource {
  getLabels(): Promise<LabelAPIEntity[]>;
}
