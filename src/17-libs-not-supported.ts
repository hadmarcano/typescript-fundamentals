// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'Hector',
    role: 'customer'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Karina',
    role: 'seller'
  }
];

const dataGroupByRole = _.groupBy(data, (item)=>item.role);

console.log(dataGroupByRole);


