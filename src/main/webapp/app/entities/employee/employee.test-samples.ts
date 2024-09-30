import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 11547,
};

export const sampleWithPartialData: IEmployee = {
  id: 16566,
  lastName: 'Stamm',
  email: 'Derick59@gmail.com',
  phoneNumber: 'middle readily',
};

export const sampleWithFullData: IEmployee = {
  id: 21364,
  firstName: 'Alexandria',
  lastName: 'Batz',
  email: 'Isaias_Mayert88@hotmail.com',
  phoneNumber: 'order except',
  hireDate: dayjs('2024-09-29T14:48'),
  salary: 12290,
  commissionPct: 11047,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
