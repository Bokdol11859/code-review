import { Label } from './label';
import { MileStone } from './milestone';

export interface Issue {
  id: Brand<number, Issue>;
  title: string;
  contents: string | null;
  isOpen: boolean;
  createdAt: Date;
  labels: Pick<Label, 'id' | 'title' | 'textColor' | 'backgroundColor'>[];
  milestone: Pick<MileStone, 'id' | 'title'> | null;
}
