/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

const qualityType = {
  0: 'Backup and Recovery',
  1: 'Big Data',
  2: 'Converged Infrastructure'
};

const testType = {
  0: 'Healthcare',
  1: 'Cloud/Hosting',
  2: 'Education',
  3: 'Automotive'
};

function addProducts(quantity) {
  const startId = products.length;
  const startDate = new Date(2015, 0, 1);
  const endDate = new Date();
  for (let i = 0; i < quantity; i++) {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      quality: i % 3,
      test: i % 4,
      price: Math.floor((Math.random() * 100) + 1),
      inStockDate: date
    });
  }
}

addProducts(70);

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function dateFormatter(cell, row) {
  return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
}

const nameFilterStyle = {
  borderColor: 'black'
};

const qualityFilterStyle = {
  borderColor: 'red'
};

const priceFilterStyle = {
  number: {
    backgroundColor: 'antiquewhite'
  },
  comparator: {
    border: '#0000FF 2.5px solid'
  }
};

const dateFilterStyle = {
  date: {
    backgroundColor: 'antiquewhite'
  },
  comparator: {
    border: '#0000FF 2.5px solid'
  }
};

export default class CsFilters extends React.Component {
  render() {
    return (
      <BootstrapTable ref='table' pagination data={ products }>
        <TableHeaderColumn dataField='id' isKey={ true }>
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn ref='name1' dataField='name' filter={ { type: 'TextFilter', style: nameFilterStyle } }>Product Name</TableHeaderColumn>
        <TableHeaderColumn ref='quality' dataField='quality' filter={ { type: 'SelectFilter', options: qualityType, style: qualityFilterStyle } } dataFormat={ enumFormatter } formatExtraData={ qualityType }>Solutions</TableHeaderColumn>
        <TableHeaderColumn ref='test' dataField='test' filter={ { type: 'SelectFilter', options: testType, style: qualityFilterStyle } } dataFormat={ enumFormatter } formatExtraData={ testType }>Industry</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
