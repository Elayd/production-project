import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors, ValidateProfileErrors } from 'entities/Profile';

describe('getProfileValidateErrors.test.ts', () => {
    test('should return validateErrors', () => {
        const store: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileErrors.SERVER_ERROR, ValidateProfileErrors.NO_DATA],
            },
        };
        expect(getProfileValidateErrors(store as StateSchema)).toEqual([ValidateProfileErrors.SERVER_ERROR, ValidateProfileErrors.NO_DATA]);
    });
    test('should work with empty store', () => {
        const store: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(store as StateSchema)).toEqual(undefined);
    });
});
