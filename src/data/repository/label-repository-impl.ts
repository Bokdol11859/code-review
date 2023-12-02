import { Label } from '../../domain/model/label';
import { LabelRepository } from '../../domain/repository/label-repository';
import { LabelAPIEntity } from '../data-source/api/entity/label-api-entity';
import LabelDataSource from '../data-source/label-data-source';

export class LabelRepositoryImpl implements LabelRepository {
  constructor(private datasource: LabelDataSource) {}

  async getLabels() {
    const data = await this.datasource.getLabels();

    return this.mapEntityToModel(data);
  }

  private mapEntityToModel(data: LabelAPIEntity[]): Label[] {
    return data.map(
      ({
        id,
        title,
        description,
        text_color,
        background_color,
        created_at,
      }) => {
        return {
          id,
          title,
          description,
          textColor: text_color,
          backgroundColor: background_color,
          createdAt: created_at,
        };
      }
    );
  }
}
