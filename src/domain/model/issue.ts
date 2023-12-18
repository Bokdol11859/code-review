type IssueId = Brand<number, 'IssueId'>;
type IssueTitle = Brand<string, 'IssueTitle'>;
type IssueContents = Brand<string, 'IssueContents'>;
type IssueIsOpen = Brand<boolean, 'IssueIsOpen'>;
type IssueCreatedAt = Brand<Date, 'IssueCreatedAt'>;

export interface Issue {
  id: IssueId;
  title: IssueTitle;
  contents: IssueContents;
  isOpen: IssueIsOpen;
  createdAt: IssueCreatedAt;
}
