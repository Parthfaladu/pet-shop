import { getters, mutations } from './product'

describe('getters', () => {
    it('getProducts', () => {
        // mock state
        const state = {
            productsData: { "current_page": 1, "data": [{ "category_uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans", "uuid": "ade384a0-7bc4-39f2-8cf7-179a37a06702", "price": 38.32, "description": "Repudiandae qui amet sit cumque sit. Voluptatem esse numquam sapiente porro est eius impedit ex. Earum aut dignissimos quod illo ut quidem quia sapiente. Consectetur et modi rerum dicta. Similique impedit dolorem quis. Aliquam doloribus doloremque esse ea est tempore nam nostrum. Dolore natus occaecati in maxime qui eos fuga. Expedita ipsam commodi excepturi nihil excepturi. Dolorem harum qui nihil aliquid tempora atque.", "metadata": { "brand": "914eee39-6590-3880-b225-7166850bad69", "image": "81e4c080-2fee-3dc3-8da0-f493c4dfe8c6" }, "created_at": "2022-03-19T00:00:29.000000Z", "updated_at": "2022-03-19T00:00:29.000000Z", "deleted_at": null, "category": { "uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "wet pet food", "slug": "wet-pet-food", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }, "brand": { "uuid": "914eee39-6590-3880-b225-7166850bad69", "title": "acana", "slug": "acana", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" } }], "first_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "from": 1, "last_page": 1, "last_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "links": [{ "url": null, "label": "&laquo; Previous", "active": false }, { "url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "label": "1", "active": true }, { "url": null, "label": "Next &raquo;", "active": false }], "next_page_url": null, "path": "https://pet-shop.buckhill.com.hr/api/v1/products", "per_page": 15, "prev_page_url": null, "to": 5, "total": 5 }
        }
        // get the result from the getter
        const result = getters.getProducts(state)

        // assert the result
        expect(result).toStrictEqual([{ "category_uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans", "uuid": "ade384a0-7bc4-39f2-8cf7-179a37a06702", "price": 38.32, "description": "Repudiandae qui amet sit cumque sit. Voluptatem esse numquam sapiente porro est eius impedit ex. Earum aut dignissimos quod illo ut quidem quia sapiente. Consectetur et modi rerum dicta. Similique impedit dolorem quis. Aliquam doloribus doloremque esse ea est tempore nam nostrum. Dolore natus occaecati in maxime qui eos fuga. Expedita ipsam commodi excepturi nihil excepturi. Dolorem harum qui nihil aliquid tempora atque.", "metadata": { "brand": "914eee39-6590-3880-b225-7166850bad69", "image": "81e4c080-2fee-3dc3-8da0-f493c4dfe8c6" }, "created_at": "2022-03-19T00:00:29.000000Z", "updated_at": "2022-03-19T00:00:29.000000Z", "deleted_at": null, "category": { "uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "wet pet food", "slug": "wet-pet-food", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }, "brand": { "uuid": "914eee39-6590-3880-b225-7166850bad69", "title": "acana", "slug": "acana", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" } }])
    })

    it('getProductsData', () => {
        // mock state
        const state = {
            productsData: { "current_page": 1, "data": [{ "category_uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans", "uuid": "ade384a0-7bc4-39f2-8cf7-179a37a06702", "price": 38.32, "description": "Repudiandae qui amet sit cumque sit. Voluptatem esse numquam sapiente porro est eius impedit ex. Earum aut dignissimos quod illo ut quidem quia sapiente. Consectetur et modi rerum dicta. Similique impedit dolorem quis. Aliquam doloribus doloremque esse ea est tempore nam nostrum. Dolore natus occaecati in maxime qui eos fuga. Expedita ipsam commodi excepturi nihil excepturi. Dolorem harum qui nihil aliquid tempora atque.", "metadata": { "brand": "914eee39-6590-3880-b225-7166850bad69", "image": "81e4c080-2fee-3dc3-8da0-f493c4dfe8c6" }, "created_at": "2022-03-19T00:00:29.000000Z", "updated_at": "2022-03-19T00:00:29.000000Z", "deleted_at": null, "category": { "uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "wet pet food", "slug": "wet-pet-food", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }, "brand": { "uuid": "914eee39-6590-3880-b225-7166850bad69", "title": "acana", "slug": "acana", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" } }], "first_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "from": 1, "last_page": 1, "last_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "links": [{ "url": null, "label": "&laquo; Previous", "active": false }, { "url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "label": "1", "active": true }, { "url": null, "label": "Next &raquo;", "active": false }], "next_page_url": null, "path": "https://pet-shop.buckhill.com.hr/api/v1/products", "per_page": 15, "prev_page_url": null, "to": 5, "total": 5 }
        }
        // get the result from the getter
        const result = getters.getProductsData(state)

        // assert the result
        expect(result).toStrictEqual({ "current_page": 1, "data": [{ "category_uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans", "uuid": "ade384a0-7bc4-39f2-8cf7-179a37a06702", "price": 38.32, "description": "Repudiandae qui amet sit cumque sit. Voluptatem esse numquam sapiente porro est eius impedit ex. Earum aut dignissimos quod illo ut quidem quia sapiente. Consectetur et modi rerum dicta. Similique impedit dolorem quis. Aliquam doloribus doloremque esse ea est tempore nam nostrum. Dolore natus occaecati in maxime qui eos fuga. Expedita ipsam commodi excepturi nihil excepturi. Dolorem harum qui nihil aliquid tempora atque.", "metadata": { "brand": "914eee39-6590-3880-b225-7166850bad69", "image": "81e4c080-2fee-3dc3-8da0-f493c4dfe8c6" }, "created_at": "2022-03-19T00:00:29.000000Z", "updated_at": "2022-03-19T00:00:29.000000Z", "deleted_at": null, "category": { "uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "wet pet food", "slug": "wet-pet-food", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }, "brand": { "uuid": "914eee39-6590-3880-b225-7166850bad69", "title": "acana", "slug": "acana", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" } }], "first_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "from": 1, "last_page": 1, "last_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "links": [{ "url": null, "label": "&laquo; Previous", "active": false }, { "url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "label": "1", "active": true }, { "url": null, "label": "Next &raquo;", "active": false }], "next_page_url": null, "path": "https://pet-shop.buckhill.com.hr/api/v1/products", "per_page": 15, "prev_page_url": null, "to": 5, "total": 5 })
    })

    it('getLimit', () => {
        // mock state
        const state = {
            limit: 15
        }
        // get the result from the getter
        const result = getters.getLimit(state)

        // assert the result
        expect(result).toStrictEqual(15)
    })

    it('getPage', () => {
        // mock state
        const state = {
            page: 1
        }
        // get the result from the getter
        const result = getters.getPage(state)

        // assert the result
        expect(result).toStrictEqual(1)
    })

    it('getSort', () => {
        // mock state
        const state = {
            desc: false
        }
        // get the result from the getter
        const result = getters.getSort(state)

        // assert the result
        expect(result).toStrictEqual(false)
    })

    it('getSelectedBrand', () => {
        // mock state
        const state = {
            selectedBrand: { "uuid": "ec7b9f1c-7e08-39e1-8c2a-551f9ce38624", "title": "pet clean-up and odor control", "slug": "pet-clean-up-and-odor-control", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }
        }
        // get the result from the getter
        const result = getters.getSelectedBrand(state)

        // assert the result
        expect(result).toStrictEqual({ "uuid": "ec7b9f1c-7e08-39e1-8c2a-551f9ce38624", "title": "pet clean-up and odor control", "slug": "pet-clean-up-and-odor-control", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" })
    })

    it('getPrice', () => {
        // mock state
        const state = {
            price: 100
        }
        // get the result from the getter
        const result = getters.getPrice(state)

        // assert the result
        expect(result).toStrictEqual(100)
    })

    it('getTitle', () => {
        // mock state
        const state = {
            title: 'testing'
        }
        // get the result from the getter
        const result = getters.getTitle(state)

        // assert the result
        expect(result).toStrictEqual('testing')
    })
})

describe('mutations', () => {
    it('SET_PRODUCTS', () => {
        const data = { "current_page": 1, "data": [{ "category_uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "Purina Fancy Feast Gravy Wet Cat Food Variety Pack, Seafood Grilled Collection - (24) 3 oz. Cans", "uuid": "ade384a0-7bc4-39f2-8cf7-179a37a06702", "price": 38.32, "description": "Repudiandae qui amet sit cumque sit. Voluptatem esse numquam sapiente porro est eius impedit ex. Earum aut dignissimos quod illo ut quidem quia sapiente. Consectetur et modi rerum dicta. Similique impedit dolorem quis. Aliquam doloribus doloremque esse ea est tempore nam nostrum. Dolore natus occaecati in maxime qui eos fuga. Expedita ipsam commodi excepturi nihil excepturi. Dolorem harum qui nihil aliquid tempora atque.", "metadata": { "brand": "914eee39-6590-3880-b225-7166850bad69", "image": "81e4c080-2fee-3dc3-8da0-f493c4dfe8c6" }, "created_at": "2022-03-19T00:00:29.000000Z", "updated_at": "2022-03-19T00:00:29.000000Z", "deleted_at": null, "category": { "uuid": "30c77ffd-4469-380c-991e-ff3e274dca99", "title": "wet pet food", "slug": "wet-pet-food", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }, "brand": { "uuid": "914eee39-6590-3880-b225-7166850bad69", "title": "acana", "slug": "acana", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" } }], "first_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "from": 1, "last_page": 1, "last_page_url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "links": [{ "url": null, "label": "&laquo; Previous", "active": false }, { "url": "https://pet-shop.buckhill.com.hr/api/v1/products?page=1", "label": "1", "active": true }, { "url": null, "label": "Next &raquo;", "active": false }], "next_page_url": null, "path": "https://pet-shop.buckhill.com.hr/api/v1/products", "per_page": 15, "prev_page_url": null, "to": 5, "total": 5 }

        // mock state
        const state = {
            productsData: null
        }
        // get the result from the getter
        mutations.SET_PRODUCTS(state, data)

        // assert the result
        expect(state.productsData).toStrictEqual(data)
    })

    it('SET_CATEGORY_UID', () => {
        const data = "ec7b9f1c-7e08-39e1-8c2a-551f9ce38624"

        // mock state
        const state = {
            currentCategoryUid: null
        }
        // get the result from the getter
        mutations.SET_CATEGORY_UID(state, data)

        // assert the result
        expect(state.currentCategoryUid).toStrictEqual(data)
    })

    it('SET_LIMIT', () => {
        const data = 10

        // mock state
        const state = {
            limit: null
        }
        // get the result from the getter
        mutations.SET_LIMIT(state, data)

        // assert the result
        expect(state.limit).toStrictEqual(data)
    })

    it('SET_PAGE', () => {
        const data = 2

        // mock state
        const state = {
            page: null
        }
        // get the result from the getter
        mutations.SET_PAGE(state, data)

        // assert the result
        expect(state.page).toStrictEqual(data)
    })

    it('SET_SORT', () => {
        const data = true

        // mock state
        const state = {
            desc: null
        }
        // get the result from the getter
        mutations.SET_SORT(state, data)

        // assert the result
        expect(state.desc).toStrictEqual(data)
    })

    it('SET_SELECTED_BRAND', () => {
        const data = { "uuid": "ec7b9f1c-7e08-39e1-8c2a-551f9ce38624", "title": "pet clean-up and odor control", "slug": "pet-clean-up-and-odor-control", "created_at": "2022-03-19T00:00:27.000000Z", "updated_at": "2022-03-19T00:00:27.000000Z" }

        // mock state
        const state = {
            selectedBrand: null
        }
        // get the result from the getter
        mutations.SET_SELECTED_BRAND(state, data)

        // assert the result
        expect(state.selectedBrand).toStrictEqual(data)
    })

    it('SET_PRICE', () => {
        const data = 200

        // mock state
        const state = {
            price: null
        }
        // get the result from the getter
        mutations.SET_PRICE(state, data)

        // assert the result
        expect(state.price).toStrictEqual(data)
    })

    it('SET_TITLE', () => {
        const data = 'testing'

        // mock state
        const state = {
            title: null
        }
        // get the result from the getter
        mutations.SET_TITLE(state, data)

        // assert the result
        expect(state.title).toStrictEqual(data)
    })
})