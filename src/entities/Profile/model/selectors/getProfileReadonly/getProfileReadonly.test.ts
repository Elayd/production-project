import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from 'entities/Profile';

describe('getProfileReadonly.test.ts', () => {
    test('should return readonly', () => {
        const store: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(store as StateSchema)).toEqual(true);
    });
    test('should work with empty store', () => {
        const store: DeepPartial<StateSchema> = {};

        expect(getProfileReadonly(store as StateSchema)).toEqual(undefined);
    });
});
