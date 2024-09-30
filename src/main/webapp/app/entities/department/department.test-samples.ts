import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 16327,
  departmentName: 'willow',
};

export const sampleWithPartialData: IDepartment = {
  id: 26061,
  departmentName: 'honestly offensively',
};

export const sampleWithFullData: IDepartment = {
  id: 15704,
  departmentName: 'gosh',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'toady',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
