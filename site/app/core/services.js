export default ngModule => {
  require('./services/welcuApiService')(ngModule);
  require('./services/firebaseAPIService')(ngModule);
};
