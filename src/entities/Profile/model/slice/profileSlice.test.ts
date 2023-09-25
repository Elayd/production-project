import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'asdaa',
    first: 'asdasda',
    city: 'dadas',
    currency: Currency.RUB,
};

describe('profileSlice.test', () => {
    test('test set age', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
        };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ age: 11 }),
        )).toEqual({ form: { age: 11 } });
    });

    test('test set first', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
});
