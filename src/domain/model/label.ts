type LabelId = Brand<number, 'LabelId'>;
type LabelTitle = Brand<string, 'LabelTitle'>;
type LabelTextColor = Brand<string, 'LabelTextColor'>;
type LabelBackgroundColor = Brand<string, 'LabelBackgroundColor'>;
type LabelCreatedAt = Brand<string, 'LabelCreatedAt'>;
type LabelDescription = Brand<string | null, 'LabelDescription'>;

export interface Label {
  id: LabelId;
  title: LabelTitle;
  textColor: LabelTextColor;
  backgroundColor: LabelBackgroundColor;
  createdAt: LabelCreatedAt;
  description: LabelDescription;
}
