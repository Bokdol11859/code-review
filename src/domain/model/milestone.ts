export interface Milestone {
  id: number;
  title: string;
  description: string | null;
  dueDate: Date | null;
  isOpen: boolean;
  createdAt: Date;
}
