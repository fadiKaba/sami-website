export const state = () => ({
    layoutStateNave: false,
    layoutState: false
})

export const mutations = {
    setLayoutState: function(state){
       state.layoutState = !state.layoutState;
    },
    setLayoutNav: function(state){
       state.layoutStateNave = !state.layoutStateNave;
    }
}