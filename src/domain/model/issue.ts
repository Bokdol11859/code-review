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
