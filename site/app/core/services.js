export default ngModule => {
  require('./services/welcuApiService')(ngModule);
  require('./services/firebaseApiService')(ngModule);
};
