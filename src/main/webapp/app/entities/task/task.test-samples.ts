import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 11445,
};

export const sampleWithPartialData: ITask = {
  id: 13444,
  title: 'substantiate greatly deficient',
};

export const sampleWithFullData: ITask = {
  id: 29417,
  title: 'galoshes',
  description: 'unlike seemingly every',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
