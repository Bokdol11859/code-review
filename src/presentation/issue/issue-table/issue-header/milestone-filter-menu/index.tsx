import Button from '../../../../../common-ui/button';
import Menus from '../../../../../common-ui/menus';
import Table from '../../../../../common-ui/table';
import useMilestones from '../../../../milestone/use-milestones';

function MilestoneFilterMenu() {
  const { milestones } = useMilestones();

  return (
    <>
      <Menus.OpenButton id="마일스톤필터" windowPosition="center">
        <Button variant="ghosts" size="M" flexible>
          <span>마일스톤</span>
          <img src="/public/chevron-down.svg" alt="마일스톤필터" />
        </Button>
      </Menus.OpenButton>

      <Menus.Window id="마일스톤필터">
        <Table columns="1fr" size="S">
          <Table.Header>마일스톤 필터</Table.Header>
          <Table.Row>
            <Menus.Button>마일스톤이 없는 이슈</Menus.Button>
          </Table.Row>
          {milestones?.map(({ id, title }) => (
            <Table.Row key={id}>
              <Menus.Button>{title}</Menus.Button>
            </Table.Row>
          ))}
        </Table>
      </Menus.Window>
    </>
  );
}
export default MilestoneFilterMenu;
