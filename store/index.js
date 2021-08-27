export const state = () => ({
    layoutState: false
})

// export const getters = {
//     getLayoutState: (state) => {
//         return state.layoutState + 'fdsf';
//     }
// }

export const mutations = {
    setLayoutState: function(state){
       state.layoutState = !state.layoutState
    }
}