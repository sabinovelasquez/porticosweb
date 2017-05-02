export default ngModule => {
  require('./attendees.scss');

  ngModule.directive('attendees', function attendees(welcuApiService) {
    return {
      template: require('./attendees.jade'),
      scope: {},
      controllerAs: 'attendees',
      controller: function attendeesCtrl() {
        this.isLoading = true;
        welcuApiService.getAttendees().then( (resp) => {
          this.isLoading = false;
          this.rowCollection = resp.data;
        });
      },
    };
  });
};
