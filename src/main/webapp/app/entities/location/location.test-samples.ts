import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 17638,
};

export const sampleWithPartialData: ILocation = {
  id: 20087,
  streetAddress: 'vastly horde frantically',
  postalCode: 'ick',
};

export const sampleWithFullData: ILocation = {
  id: 22637,
  streetAddress: 'fray far ouch',
  postalCode: 'yowza',
  city: 'Christiansenboro',
  stateProvince: 'provided likewise warmly',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
