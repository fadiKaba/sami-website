export const state = () => ({
    layoutStateNave: false,
    layoutState: false,
    runLoadingPage: true
})

export const mutations = {
    setLayoutState: function(state){
       state.layoutState = !state.layoutState;
    },
    setLayoutNav: function(state){
       state.layoutStateNave = !state.layoutStateNave;
    },
    setRunLoadingPage: function(state){
        state.runLoadingPage = false;
    }
}