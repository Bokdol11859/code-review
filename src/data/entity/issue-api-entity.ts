export interface IssueSummaryEntity {
  data: {
    id: number;
    title: string;
    is_open: boolean;
    created_at: string;
    labels: {
      id: number;
      title: string;
      text_color: string;
      background_color: string;
    } | null;
    milestones: {
      id: number;
      title: string;
    } | null;
  }[];
  openIssueCount: number;
  closeIssueCount: number;
}

export interface IssueDetailEntity {
  data: {
    id: number;
    title: string;
    contents: string;
    is_open: boolean;
    created_at: Date;
    labels: {
      id: number;
      title: string;
      text_color: string;
      background_color: string;
    } | null;
    milestones: {
      id: number;
      title: string;
    } | null;
  };
}
