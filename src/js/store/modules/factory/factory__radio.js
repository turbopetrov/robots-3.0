export default{
  state:{
    roboType: 'Front',
    roboGender: 'Male',
  },

  getters:{
    roboType(state){
      return state.roboType
    },
    roboGender(state){
      return state.roboGender
    },
    selectedRobot(state){
      return state.roboType + state.roboGender;
    }
  },

  mutations:{
    setRoboType(state,type){
      return state.roboType = type
    },
    setRoboGender(state, gender){
      return state.roboGender = gender
    }
  }
}