import { injectable } from 'inversify';
import LabelDataSource from '../label-data-source';
import { LabelAPIEntity } from './entity/label-api-entity';
import supabase from './supabase-db/supabase';

@injectable()
export default class LabelDataSourceImpl implements LabelDataSource {
  async getLabels(): Promise<LabelAPIEntity[]> {
    const { data, error } = await supabase.from('labels').select('*');

    if (error) throw new Error('라벨을 불러오지 못했습니다.');

    return data;
  }
}
