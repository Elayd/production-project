import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from 'entities/Profile';

describe('getProfileIsLoading.test.ts', () => {
    test('should return isLoading', () => {
        const store: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(store as StateSchema)).toEqual(true);
    });
    test('should work with empty store', () => {
        const store: DeepPartial<StateSchema> = {};

        expect(getProfileIsLoading(store as StateSchema)).toEqual(undefined);
    });
});
