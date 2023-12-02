import { Tables } from '../supabase-db/database.types';

interface LabelInfo
  extends Pick<
    Tables<'labels'>,
    'id' | 'title' | 'text_color' | 'background_color'
  > {}

interface MilestoneInfo extends Pick<Tables<'milestones'>, 'id' | 'title'> {}

export interface IssueAPIEntity extends Omit<Tables<'issues'>, 'milestone_id'> {
  labels: LabelInfo[];
  milestones: MilestoneInfo | null;
}
