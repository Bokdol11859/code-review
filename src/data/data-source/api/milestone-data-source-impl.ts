import MilestoneDataSource from '../milestone-data-source';
import supabase from './supabase-db/supabase';

export default class MilestoneDataSourceImpl implements MilestoneDataSource {
  async getLabels() {
    const { data, error } = await supabase.from('milestones').select('*');

    if (error) throw new Error('마일스톤을 불러오지 못했습니다.');

    return data;
  }
}
