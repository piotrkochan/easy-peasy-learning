import {action, computed, thunk} from "easy-peasy";

const editorModel = () => ({
    criteria: '',
    products: [],
    searching: false,
    count: computed(state => state.products.length),
    clear: action((state, _) => {
        state.products = [];
    }),
    setCriteria: thunk(async (actions, payload) => {
        actions.clear();
        actions._setCriteria(payload);
        if (payload === "") {
            return
        }
        actions._searching(true);
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                actions._searching(false);
                actions._setProducts(json);
            })
    }),
    _searching: action((state, payload) => {
        state.searching = payload
    }),
    _setCriteria: action((state, payload) => {
        state.criteria = payload
    }),
    _setProducts: action((state, payload) => {
        state.products = payload
    }),
});

const storeModel = {
    left: editorModel(),
    right:  editorModel(),
};

export default storeModel;