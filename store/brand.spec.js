import { getters, mutations } from './brand'

describe('getters', () => {
    it('getBrands', () => {
        // mock state
        const state = {
            brands: [{"uuid":"7f626f8c-7a01-3711-a731-a420eaa5680f","title":"royal canin","slug":"royal-canin","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"1fa54cdd-3954-39a1-9eba-b1c7e07ddcec","title":"blue","slug":"blue","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c76b61ba-9a7e-3946-99f7-a0b2208075a2","title":"petsafe","slug":"petsafe","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"914eee39-6590-3880-b225-7166850bad69","title":"acana","slug":"acana","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"58bc2c27-9e40-3dcc-a123-4dbc096a0299","title":"manapro","slug":"manapro","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c2e30412-ffce-3f3a-a96f-8e1482f39c3c","title":"iris","slug":"iris","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"3bc3b15d-0a86-303a-b7d6-e1ec2c755e2e","title":"frontline","slug":"frontline","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"998492cc-3532-3596-8d4f-24fb7c353b94","title":"kitzy","slug":"kitzy","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"6e4c4b70-e8a1-347d-b3d4-41297c49725a","title":"wag","slug":"wag","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"71ba525e-51d2-3648-b1f4-1ac5f014ea58","title":"hills","slug":"hills","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"}]
        }
        // get the result from the getter
        const result = getters.getBrands(state)

        // assert the result
        expect(result).toStrictEqual([{"uuid":"7f626f8c-7a01-3711-a731-a420eaa5680f","title":"royal canin","slug":"royal-canin","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"1fa54cdd-3954-39a1-9eba-b1c7e07ddcec","title":"blue","slug":"blue","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c76b61ba-9a7e-3946-99f7-a0b2208075a2","title":"petsafe","slug":"petsafe","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"914eee39-6590-3880-b225-7166850bad69","title":"acana","slug":"acana","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"58bc2c27-9e40-3dcc-a123-4dbc096a0299","title":"manapro","slug":"manapro","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c2e30412-ffce-3f3a-a96f-8e1482f39c3c","title":"iris","slug":"iris","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"3bc3b15d-0a86-303a-b7d6-e1ec2c755e2e","title":"frontline","slug":"frontline","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"998492cc-3532-3596-8d4f-24fb7c353b94","title":"kitzy","slug":"kitzy","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"6e4c4b70-e8a1-347d-b3d4-41297c49725a","title":"wag","slug":"wag","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"71ba525e-51d2-3648-b1f4-1ac5f014ea58","title":"hills","slug":"hills","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"}])
    })
})

describe('mutations', () => {
    it('SET_BRANDS', () => {
        const data = [{"uuid":"7f626f8c-7a01-3711-a731-a420eaa5680f","title":"royal canin","slug":"royal-canin","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"1fa54cdd-3954-39a1-9eba-b1c7e07ddcec","title":"blue","slug":"blue","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c76b61ba-9a7e-3946-99f7-a0b2208075a2","title":"petsafe","slug":"petsafe","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"914eee39-6590-3880-b225-7166850bad69","title":"acana","slug":"acana","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"58bc2c27-9e40-3dcc-a123-4dbc096a0299","title":"manapro","slug":"manapro","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"c2e30412-ffce-3f3a-a96f-8e1482f39c3c","title":"iris","slug":"iris","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"3bc3b15d-0a86-303a-b7d6-e1ec2c755e2e","title":"frontline","slug":"frontline","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"998492cc-3532-3596-8d4f-24fb7c353b94","title":"kitzy","slug":"kitzy","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"6e4c4b70-e8a1-347d-b3d4-41297c49725a","title":"wag","slug":"wag","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"},{"uuid":"71ba525e-51d2-3648-b1f4-1ac5f014ea58","title":"hills","slug":"hills","created_at":"2022-03-19T00:00:27.000000Z","updated_at":"2022-03-19T00:00:27.000000Z"}]

        // mock state
        const state = {
            brands: null
        }
        // get the result from the getter
        mutations.SET_BRANDS(state, data)

        // assert the result
        expect(state.brands).toStrictEqual(data)
    })
})