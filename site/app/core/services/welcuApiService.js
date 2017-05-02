export default ngModule => {
  ngModule.service('welcuApiService', ($http) => {
    const service = {
      getAttendees: () => {
        return $http({
          url: `attendes.json`,
        });
      },
    };
    return service;
  });
};
