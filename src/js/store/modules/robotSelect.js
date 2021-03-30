export default {
  state: {
    roboType: 'Front',
    roboGender: 'Male',
    roboStatus: '_disable',
  },

  getters: {
    roboType(state) {
      return state.roboType;
    },
    roboGender(state) {
      return state.roboGender;
    },
    roboStatus(state) {
      return state.roboStatus;
    },
    selectedRobot(state) {
      return state.roboType + state.roboGender;
    },
  },

  mutations: {
    setRoboType(state, type) {
      return state.roboType = type;
    },
    setRoboGender(state, gender) {
      return state.roboGender = gender;
    },
    setRoboStatus(state, status) {
      return state.roboStatus = status;
    },
  },
};
