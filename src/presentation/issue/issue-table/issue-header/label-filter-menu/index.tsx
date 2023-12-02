import Button from '../../../../../common-ui/button';
import Menus from '../../../../../common-ui/menus';
import Table from '../../../../../common-ui/table';
import useLabels from '../../../../label/use-labels';

function LabelFilterMenu() {
  const { labels } = useLabels();

  return (
    <>
      <Menus.OpenButton id="레이블필터" windowPosition="center">
        <Button variant="ghosts" size="M" flexible>
          <span>레이블</span>
          <img src="/public/chevron-down.svg" alt="레이블필터" />
        </Button>
      </Menus.OpenButton>

      <Menus.Window id="레이블필터">
        <Table columns="1fr" size="S">
          <Table.Header>레이블 필터</Table.Header>
          <Table.Row>
            <Menus.Button>레이블이 없는 이슈</Menus.Button>
          </Table.Row>
          {labels?.map(({ id, title }) => (
            <Table.Row key={id}>
              <Menus.Button>{title}</Menus.Button>
            </Table.Row>
          ))}
        </Table>
      </Menus.Window>
    </>
  );
}
export default LabelFilterMenu;
