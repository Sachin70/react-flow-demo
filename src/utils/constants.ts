export const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 0, y: 250 },
    },
    {
        id: '2',
        data: { label: 'Initiate Transaction' },
        position: { x: 150, y: 150 },
    },
    { id: '3', data: { label: 'Enter Details' }, position: { x: 300, y: 150 } },
    { id: '4', data: { label: 'Enter Amount' }, position: { x: 450, y: 150 } },
    {
        id: '5',
        data: { label: 'Select Bank Account' },
        position: { x: 600, y: 150 },
    },
    {
        id: '6',
        data: { label: 'Authenticate Transaction' },
        position: { x: 750, y: 150 },
    },
    {
        id: '7',
        data: { label: 'Transaction Processing' },
        position: { x: 900, y: 150 },
    },
    {
        id: '8',
        data: { label: 'Bank Validation' },
        position: { x: 1050, y: 150 },
    },
    {
        id: '9',
        data: { label: 'Transfer of Funds' },
        position: { x: 1200, y: 150 },
    },
    { id: '10', data: { label: 'Notification' }, position: { x: 1350, y: 150 } },
    { id: '11', data: { label: 'Completion' }, position: { x: 1500, y: 150 } },
    {
        id: '12',
        type: 'output',
        data: { label: 'End' },
        position: { x: 1650, y: 250 },
    },
    {
        id: '13',
        data: { label: 'Invalid Transaction' },
        position: { x: 1050, y: 50 },
    },
    {
        id: '14',
        data: { label: 'Retry Transaction' },
        position: { x: 1200, y: 50 },
    },
];

export const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e5-6', source: '5', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
    { id: 'e7-8', source: '7', target: '8', animated: true },
    { id: 'e8-9', source: '8', target: '9', animated: true },
    { id: 'e9-10', source: '9', target: '10', animated: true },
    { id: 'e10-11', source: '10', target: '11', animated: true },
    { id: 'e11-12', source: '11', target: '12', animated: true },
    { id: 'e8-13', source: '8', target: '13', animated: true, label: 'Invalid' },
    { id: 'e13-14', source: '13', target: '14', animated: true },
    { id: 'e14-2', source: '14', target: '2', animated: true },
];

export const defaultEdgeOptions = {
    animated: true,
    style: { stroke: 'black' },
};
