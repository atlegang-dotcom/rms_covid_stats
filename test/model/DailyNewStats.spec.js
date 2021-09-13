/*
 * RMS_covid_stats_cal
 * returns covid data, such as daily confirmed cases, total deaths, total active cases, total cases, etc.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RmsCovidStatsCal);
  }
}(this, function(expect, RmsCovidStatsCal) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DailyNewStats', function() {
      beforeEach(function() {
        instance = new RmsCovidStatsCal.DailyNewStats();
      });

      it('should create an instance of DailyNewStats', function() {
        // TODO: update the code to test DailyNewStats
        expect(instance).to.be.a(RmsCovidStatsCal.DailyNewStats);
      });

      it('should have the property mAXAcCountryCode (base name: "MAX(ac.country_code)")', function() {
        // TODO: update the code to test the property mAXAcCountryCode
        expect(instance).to.have.property('mAXAcCountryCode');
        // expect(instance.mAXAcCountryCode).to.be(expectedValueLiteral);
      });

      it('should have the property lat (base name: "lat")', function() {
        // TODO: update the code to test the property lat
        expect(instance).to.have.property('lat');
        // expect(instance.lat).to.be(expectedValueLiteral);
      });

      it('should have the property lng (base name: "lng")', function() {
        // TODO: update the code to test the property lng
        expect(instance).to.have.property('lng');
        // expect(instance.lng).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property dailyCases (base name: "daily_cases")', function() {
        // TODO: update the code to test the property dailyCases
        expect(instance).to.have.property('dailyCases');
        // expect(instance.dailyCases).to.be(expectedValueLiteral);
      });

      it('should have the property dailyDeaths (base name: "daily_deaths")', function() {
        // TODO: update the code to test the property dailyDeaths
        expect(instance).to.have.property('dailyDeaths');
        // expect(instance.dailyDeaths).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdated (base name: "last_updated")', function() {
        // TODO: update the code to test the property lastUpdated
        expect(instance).to.have.property('lastUpdated');
        // expect(instance.lastUpdated).to.be(expectedValueLiteral);
      });

    });
  });

}));
