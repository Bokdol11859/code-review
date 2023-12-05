import { Label } from './label';
import { Milestone } from './milestone';

export interface Issue {
  id: Brand<number, Issue>;
  title: string;
  isOpen: boolean;
  createdAt: Date;
  label: Pick<Label, 'id' | 'title' | 'textColor' | 'backgroundColor'> | null;
  milestone: Pick<Milestone, 'id' | 'title'> | null;
}

export interface IssueFilterOption<T, K extends keyof T> {
  property: K;
  value: T[K];
}
export interface IssueFilterOptions {
  isOpen?: boolean;
  label?: IssueFilterOption<Label, 'title'>;
  milestone?: IssueFilterOption<Milestone, 'title'>;
}
