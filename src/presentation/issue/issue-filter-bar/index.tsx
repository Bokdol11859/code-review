import { useRef } from 'react';
import Button from '../../../common-ui/button';
import FilterBar from '../../../common-ui/filter-bar';
import Menus from '../../../common-ui/menus';
import Table from '../../../common-ui/table';
import usePlaceholder from './use-placeholder';
import RadioButton from '../../../common-ui/radio-button';
import useSearchParamsHandlers from '../use-search-params-handlers';

function IssueFilterBar() {
  const {
    setOpenStatusSearchParam,
    applySearchQuery,
    isOpenStatus,
    isCloseStatus,
  } = useSearchParamsHandlers();
  const placeholder = usePlaceholder();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key !== 'Enter') return;

    applySearchQuery((e.target as HTMLInputElement).value);
    inputRef.current?.blur();
  }

  return (
    <FilterBar>
      <FilterBar.SearchFilter>
        <Menus>
          <Menus.OpenButton id="필터" windowPosition="left">
            <Button
              size="M"
              variant="ghosts"
              flexible
              className="px-6 text-neutral-text-weak"
            >
              <span>필터</span>
              <img src="/public/chevron-down.svg" alt="마일스톤필터" />
            </Button>
          </Menus.OpenButton>

          <Menus.Window id="필터">
            <Table columns="1fr" size="S">
              <Table.Header>이슈 필터</Table.Header>

              <Table.Row>
                <Menus.Button onClick={() => setOpenStatusSearchParam(true)}>
                  <div className="flex gap-2 items-center">
                    <span className="grow">열린 이슈</span>
                    <RadioButton checked={isOpenStatus} />
                  </div>
                </Menus.Button>
              </Table.Row>

              <Table.Row>
                <Menus.Button onClick={() => setOpenStatusSearchParam(false)}>
                  <div className="flex gap-2 items-center">
                    <span className="grow">닫힌 이슈</span>
                    <RadioButton checked={isCloseStatus} />
                  </div>
                </Menus.Button>
              </Table.Row>
            </Table>
          </Menus.Window>
        </Menus>
      </FilterBar.SearchFilter>

      <FilterBar.Divider />

      <FilterBar.Input
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </FilterBar>
  );
}
export default IssueFilterBar;
