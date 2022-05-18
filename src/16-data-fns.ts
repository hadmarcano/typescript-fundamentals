import {subDays, format} from 'date-fns';

const date = new Date(1998,1,28); // 0 = january, 1 = february...
const rta = subDays(date,3);
const str = format(rta,'MM/dd/yyyy');

console.log(str);


