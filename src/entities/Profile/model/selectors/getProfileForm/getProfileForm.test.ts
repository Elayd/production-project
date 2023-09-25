import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from 'entities/Profile';

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const form = {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'asdaa',
            first: 'asdasda',
            city: 'dadas',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty store', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
