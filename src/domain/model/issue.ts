import { Label } from './label';
import { MileStone } from './milestone';

export interface Issue {
  id: Brand<number, Issue>;
  title: string;
  contents: string | null;
  isOpen: boolean;
  createdAt: Date;
  labels: Label[];
  milestone: MileStone | null;
}
