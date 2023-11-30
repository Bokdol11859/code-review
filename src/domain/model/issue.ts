export interface Issue {
  id: Brand<number, Issue>;
  title: string;
  isOpen: boolean;
  createdAt: Date;
}
