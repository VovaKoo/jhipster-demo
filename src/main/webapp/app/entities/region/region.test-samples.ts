import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 6491,
};

export const sampleWithPartialData: IRegion = {
  id: 9791,
};

export const sampleWithFullData: IRegion = {
  id: 19119,
  regionName: 'huzzah',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
