import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 31828,
};

export const sampleWithPartialData: ICountry = {
  id: 10184,
  countryName: 'question',
};

export const sampleWithFullData: ICountry = {
  id: 20125,
  countryName: 'plain what',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
