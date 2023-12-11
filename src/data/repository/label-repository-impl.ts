import { inject, injectable } from 'inversify';
import { Label } from '../../domain/model/label';
import { LabelRepository } from '../../domain/repository/label-repository';
import { LabelAPIEntity } from '../data-source/api/entity/label-api-entity';
import type LabelDataSource from '../data-source/label-data-source';
import { TYPES } from '../../di/types';

@injectable()
export class LabelRepositoryImpl implements LabelRepository {
  private _datasource: LabelDataSource;

  constructor(@inject(TYPES.LabelDataSource) dataSource: LabelDataSource) {
    this._datasource = dataSource;
  }

  async getLabels() {
    const data = await this._datasource.getLabels();

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
