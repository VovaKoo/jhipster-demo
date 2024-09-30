import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 25874,
};

export const sampleWithPartialData: IJobHistory = {
  id: 5986,
  language: 'SPANISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 6136,
  startDate: dayjs('2024-09-29T14:57'),
  endDate: dayjs('2024-09-29T02:56'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
