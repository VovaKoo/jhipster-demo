import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 30794,
};

export const sampleWithPartialData: IJob = {
  id: 31537,
  jobTitle: 'Forward Configuration Producer',
  minSalary: 25952,
};

export const sampleWithFullData: IJob = {
  id: 13337,
  jobTitle: 'Legacy Research Designer',
  minSalary: 29652,
  maxSalary: 20728,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
