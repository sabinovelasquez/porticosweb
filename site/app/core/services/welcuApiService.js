export default ngModule => {
  ngModule.service('welcuApiService', ($http) => {
    const service = {
      getAttendees: () => {
        return $http({
          url: `http://www.sabino.cl/clients/welcuapi/attendes.json`,
        });
      },
    };
    return service;
  });
};
