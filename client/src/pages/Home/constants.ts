const components = [
  {
    id: 'sdsd1',
    row: 'A',
    order: 0,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd2',
    row: 'A',
    order: 1,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd2',
    row: 'A',
    order: 2,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd3',
    row: 'A',
    order: 4,
    unit: 2,
    type: 'food',
  },
  {
    id: 'sdsd4',
    row: 'B',
    order: 0,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd5',
    row: 'B',
    order: 1,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd5',
    row: 'B',
    order: 4,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd1',
    row: 'C',
    order: 0,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd2',
    row: 'C',
    order: 1,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd2',
    row: 'C',
    order: 2,
    unit: 1,
    type: 'seat',
  },
  {
    id: 'sdsd3',
    row: 'C',
    order: 3,
    unit: 2,
    type: 'food',
  },
];

const renderRow = (row: string) => {
  const rowComponents = components.filter((component) => component.row === row);
  return rowComponents;
};

export { components, renderRow };
