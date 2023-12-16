import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../../common-ui/input';
import Menus from '../../../common-ui/menus';
import Button from '../../../common-ui/button';
import SideBar from '../../../common-ui/side-bar';
import { Milestone } from '../../../domain/model/milestone';
import useMilestones from '../../milestone/use-milestones';
import Table from '../../../common-ui/table';
import RadioButton from '../../../common-ui/radio-button';
import useLabels from '../../label/use-labels';
import { Label as LabelModel } from '../../../domain/model/label';
import Label from '../../../common-ui/label';
import TextArea from '../../../common-ui/text-area';
import Divder from '../../../common-ui/divider';
import useCreateIssue from '../use-create-issue';

interface FormType {
  title: string;
  description: string;
  milestone: Milestone | null;
  label: LabelModel | null;
}

function CreateIssueForm() {
  const { milestones } = useMilestones();
  const { labels } = useLabels();
  const { control, handleSubmit, setValue, watch } = useForm<FormType>({
    defaultValues: {
      title: '',
      description: '',
      milestone: null,
      label: null,
    },
  });
  const { createIssue } = useCreateIssue();

  const selectedLabel = watch('label');
  const selectedMilestone = watch('milestone');

  function addLabel(label: LabelModel) {
    if (label.id === selectedLabel?.id) {
      setValue('label', null);
      return;
    }

    setValue('label', label);
  }

  function addMilestone(milestone: Milestone) {
    if (milestone.id === selectedMilestone?.id) {
      setValue('milestone', null);
      return;
    }

    setValue('milestone', milestone);
  }

  const onSubmit: SubmitHandler<FormType> = ({
    title,
    description,
    label,
    milestone,
  }) => {
    createIssue({
      title,
      description,
      labelId: label?.id,
      milestoneId: milestone?.id,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grow flex flex-col gap-6"
      >
        <div className="grid grid-cols-[19fr_6fr] gap-6">
          <div className="flex flex-col gap-2">
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Input
                    id="issueTitle"
                    label="제목"
                    labelPosition="top"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') e.preventDefault();
                    }}
                    {...field}
                  />
                );
              }}
            />

            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <TextArea
                    id="issueDescription"
                    label="코멘트를 입력하세요"
                    className="h-[436px]"
                    {...field}
                  />
                );
              }}
            />
          </div>

          <Menus>
            <SideBar>
              <>
                <Menus.OpenButton id="addLabel" windowPosition="center">
                  <Button
                    variant="ghosts"
                    size="M"
                    flexible
                    className="w-full"
                    type="button"
                  >
                    <span className="grow text-left">라벨</span>
                    <img src="/public/chevron-down.svg" alt="라벨추가" />
                  </Button>
                </Menus.OpenButton>
                {selectedLabel && (
                  <Label
                    backgroundColor={selectedLabel.backgroundColor!}
                    textColor={selectedLabel.textColor!}
                  >
                    {selectedLabel.title}
                  </Label>
                )}
              </>

              <>
                <Menus.OpenButton id="addMilestone" windowPosition="center">
                  <Button
                    variant="ghosts"
                    size="M"
                    flexible
                    className="w-full"
                    type="button"
                  >
                    <span className="grow text-left">마일스톤</span>
                    <img src="/public/chevron-down.svg" alt="마일스톤추가" />
                  </Button>
                </Menus.OpenButton>
                {selectedMilestone && (
                  <span className="text-S text-neutral-text-strong">
                    {selectedMilestone.title}
                  </span>
                )}
              </>
            </SideBar>

            <Menus.Window id="addLabel">
              <Table columns="1fr" size="S">
                {labels?.map((label) => (
                  <Table.Row key={label.id}>
                    <Menus.Button onClick={() => addLabel(label)}>
                      <div className="flex gap-2 items-center">
                        <span className="grow">{label.title}</span>
                        <RadioButton checked={label.id === selectedLabel?.id} />
                      </div>
                    </Menus.Button>
                  </Table.Row>
                ))}
              </Table>
            </Menus.Window>

            <Menus.Window id="addMilestone">
              <Table columns="1fr" size="S">
                {milestones?.map((milestone) => (
                  <Table.Row key={milestone.id}>
                    <Menus.Button onClick={() => addMilestone(milestone)}>
                      <div className="flex gap-2 items-center">
                        <span className="grow">{milestone.title}</span>
                        <RadioButton
                          checked={milestone.id === selectedMilestone?.id}
                        />
                      </div>
                    </Menus.Button>
                  </Table.Row>
                ))}
              </Table>
            </Menus.Window>
          </Menus>
        </div>

        <Divder />

        <div className="flex justify-end items-center gap-8">
          <Button size="M" variant="ghosts" flexible>
            <img src="/public/close-icon.svg" alt="작성 취소" />
            <span>작성 취소</span>
          </Button>

          <Button size="L" variant="contained">
            완료
          </Button>
        </div>
      </form>
    </>
  );
}
export default CreateIssueForm;
