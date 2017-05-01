export default ngModule => {
  require('./attendees.scss');

  ngModule.directive('attendees', function attendees(welcuApiService) {
    return {
      template: require('./attendees.jade'),
      scope: {},
      controllerAs: 'attendees',
      controller: function attendeesCtrl() {
        welcuApiService.getAttendees().then( (resp) => {
          this.attendees = resp.data;
        });
      },
    };
  });
};
