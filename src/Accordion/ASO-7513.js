import React, { useState } from 'react';
import { DSDataGrid } from '@elliemae/ds-datagrids';
import { DSAccordion, DSAccordionItem } from '@elliemae/ds-basic';
import { randomGroupedEntities } from '../utils/randomData';

const groupedRows = randomGroupedEntities(5);

const columns = [
  {
    property: 'name',
    label: 'NAME',
    searchable: true,
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    property: 'group',
    label: 'GROUP',
    searchable: true,
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    property: 'position',
    label: 'position',
    searchable: true,
    sortable: true,
    resizable: true,
    width: 200,
  },
  {
    type: 'number',
    property: 'price',
    label: 'PRICE',
    searchable: true,
    sortable: true,
    resizable: true,
    editable: true,
  },
];

export default () => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <p>Height grid remain after filter</p>
      <DSAccordion
        activeValue={selected}
        allowMultipleOpen={false}
        containerProps={{ id: 'my-custom-id' }}
        onChange={(e) => setSelected(e)}
      >
        <DSAccordionItem key={0} title="Accordion Item 0" value={0}>
          <DSDataGrid
            columns={columns}
            rows={groupedRows}
            searchFilters
            sortable
            selectable
            autoHeight
            resizeableColumns
          />
        </DSAccordionItem>

        <DSAccordionItem key={1} title="Accordion Item 1" value={1}>
          <p>Item 1</p>
        </DSAccordionItem>
      </DSAccordion>
    </div>
  );
};
