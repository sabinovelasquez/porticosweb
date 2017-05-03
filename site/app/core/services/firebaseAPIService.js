export default ngModule => {
  ngModule.service('firebaseAPIService', ($firebaseObject) => {
    const firebase = require('firebase');
    const service = {
      getDevices: () => {
        const firebaseClient = firebase.database().ref();
        const devices = $firebaseObject(firebaseClient);
        return devices;
      },
    };
    return service;
  });
};
