import Button from '../../../../../common-ui/button';
import LabelIcon from '../../../../../common-ui/label-icon';
import Menus from '../../../../../common-ui/menus';
import RadioButton from '../../../../../common-ui/radio-button';
import Table from '../../../../../common-ui/table';
import useLabels from '../../../../label/use-labels';
import useSearchParamsHandlers from '../../../use-search-params-handlers';

function LabelFilterMenu() {
  const { labels } = useLabels();

  const { setLabelSearchParam, isUnLabeld, getLabelSearchParam } =
    useSearchParamsHandlers();

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
            <Menus.Button onClick={() => setLabelSearchParam('none')}>
              <div className="flex gap-2 items-center">
                <span className="grow">레이블이 없는 이슈</span>
                <RadioButton checked={isUnLabeld} />
              </div>
            </Menus.Button>
          </Table.Row>

          {labels?.map(({ id, title, backgroundColor }) => (
            <Table.Row key={id}>
              <Menus.Button onClick={() => setLabelSearchParam(title)}>
                <div className="flex gap-2 items-center">
                  <LabelIcon backgroundColor={backgroundColor} />
                  <span className="grow">{title}</span>
                  <RadioButton checked={getLabelSearchParam() === title} />
                </div>
              </Menus.Button>
            </Table.Row>
          ))}
        </Table>
      </Menus.Window>
    </>
  );
}
export default LabelFilterMenu;
