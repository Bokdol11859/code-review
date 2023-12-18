import { Issue } from '../model/issue';
import { Label } from '../model/label';
import { Milestone } from '../model/milestone';

export interface IssuesSummary {
  data: (Pick<Issue, 'id' | 'title' | 'isOpen' | 'createdAt'> & {
    label: Pick<Label, 'id' | 'title' | 'textColor' | 'backgroundColor'> | null;
    milestone: Pick<Milestone, 'id' | 'title'> | null;
  })[];
  openIssueCount: number;
  closeIssueCount: number;
}

export interface IssueFilterOptions {
  isOpen?: boolean;
  labelTitle?: string;
  milestoneTitle?: string;
  likes?: string[];
}

export interface IssueCreationData {
  title: string;
  contents?: string;
  labelId?: Label['id'];
  milestoneId?: Milestone['id'];
}

export interface IssueRepository {
  getIssues(filterOptions: IssueFilterOptions): Promise<IssuesSummary>;
  openIssues(ids: Issue['id'][]): Promise<void>;
  closeIssues(ids: Issue['id'][]): Promise<void>;
  createIssue(newIssue: IssueCreationData): Promise<void>;
}
