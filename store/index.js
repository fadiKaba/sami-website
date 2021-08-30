export const state = () => ({
    layoutStateNave: false,
    layoutState: false,
    runLoadingPage: true
})

export const mutations = {
    setLayoutState: function(state, payLoad){
       state.layoutState = payLoad;
    },
    setLayoutNav: function(state, payLoad){
       state.layoutStateNave =  payLoad;
    },
    setRunLoadingPage: function(state){
        state.runLoadingPage = false;
    }
}