'use strict';

describe('Welcome module', function() {
  beforeEach(module('generalaApp'));

  describe('WelcomeCtrl', function(){
    it('should ....', inject(function($controller) {
      //spec body
      var welcomeCtrl = $controller('WelcomeCtrl');
      expect(welcomeCtrl).toBeDefined();
    }));

  });
});