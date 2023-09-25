import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { profileActions, ValidateProfileErrors } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'asdaa',
    first: 'asdasda',
    city: 'dadas',
    currency: Currency.RUB,
};

const dataWithError = {
    username: 'admin',
    country: Country.Russia,
    lastname: 'asdaa',
    first: 'asdasda',
    city: 'dadas',
    currency: Currency.RUB,
};
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('error', async () => {
        const result = validateProfileData(dataWithError);

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });
});
