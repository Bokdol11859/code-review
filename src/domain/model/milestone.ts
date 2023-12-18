type MilestoneId = Brand<number, 'MilestoneId'>;
type MilestoneTitle = Brand<string, 'MilestoneTitle'>;
type MilestoneDescription = Brand<string | null, 'MilestoneDescription'>;
type MilestoneDueDate = Brand<Date | null, 'MilestoneDueDate'>;
type MilestoneIsOpen = Brand<boolean, 'MilestoneIsOpen'>;
type MilestoneCreatedAt = Brand<Date, 'MilestoneCreatedAt'>;

export interface Milestone {
  id: MilestoneId;
  title: MilestoneTitle;
  description: MilestoneDescription;
  dueDate: MilestoneDueDate;
  isOpen: MilestoneIsOpen;
  createdAt: MilestoneCreatedAt;
}
