export default {
  state: {
    roboType: 'Front',
    roboGender: 'Male',
    roboStatus: '_disable',
  },

  getters: {
    roboStatus(state) {
      return state.roboStatus;
    },
    selectedRobot(state) {
      return state.roboType + state.roboGender;
    },
  },

  mutations: {
    setRoboType(state, type) {
      state.roboType = type;
    },
    setRoboGender(state, gender) {
      state.roboGender = gender;
    },
    setRoboStatus(state, status) {
      state.roboStatus = status;
    },
  },
};
