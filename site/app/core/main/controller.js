export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl() {
    // this.parallaxBg = '../core/img/header.jpg';
  });
  ngModule.controller('EventCtrl', function MainCtrl(firebaseAPIService) {
    this.devices = firebaseAPIService.getDevices();
  });
};
