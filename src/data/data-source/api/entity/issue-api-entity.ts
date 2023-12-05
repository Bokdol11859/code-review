interface LabelInfo {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
}

interface MilestoneInfo {
  id: number;
  title: string;
}

export interface IssueAPIEntity {
  data: {
    id: number;
    title: string;
    is_open: boolean;
    created_at: string;
    labels: LabelInfo | null;
    milestones: MilestoneInfo | null;
  }[];
  openIssueCount: number;
  closeIssueCount: number;
}
