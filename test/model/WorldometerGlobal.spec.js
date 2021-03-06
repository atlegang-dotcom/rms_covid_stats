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
    describe('WorldometerGlobal', function() {
      beforeEach(function() {
        instance = new RmsCovidStatsCal.WorldometerGlobal();
      });

      it('should create an instance of WorldometerGlobal', function() {
        // TODO: update the code to test WorldometerGlobal
        expect(instance).to.be.a(RmsCovidStatsCal.WorldometerGlobal);
      });

      it('should have the property totalConfirmed (base name: "totalConfirmed")', function() {
        // TODO: update the code to test the property totalConfirmed
        expect(instance).to.have.property('totalConfirmed');
        // expect(instance.totalConfirmed).to.be(expectedValueLiteral);
      });

      it('should have the property totalDeaths (base name: "totalDeaths")', function() {
        // TODO: update the code to test the property totalDeaths
        expect(instance).to.have.property('totalDeaths');
        // expect(instance.totalDeaths).to.be(expectedValueLiteral);
      });

      it('should have the property totalRecovered (base name: "totalRecovered")', function() {
        // TODO: update the code to test the property totalRecovered
        expect(instance).to.have.property('totalRecovered');
        // expect(instance.totalRecovered).to.be(expectedValueLiteral);
      });

      it('should have the property totalNewCases (base name: "totalNewCases")', function() {
        // TODO: update the code to test the property totalNewCases
        expect(instance).to.have.property('totalNewCases');
        // expect(instance.totalNewCases).to.be(expectedValueLiteral);
      });

      it('should have the property totalNewDeaths (base name: "totalNewDeaths")', function() {
        // TODO: update the code to test the property totalNewDeaths
        expect(instance).to.have.property('totalNewDeaths');
        // expect(instance.totalNewDeaths).to.be(expectedValueLiteral);
      });

      it('should have the property totalActiveCases (base name: "totalActiveCases")', function() {
        // TODO: update the code to test the property totalActiveCases
        expect(instance).to.have.property('totalActiveCases');
        // expect(instance.totalActiveCases).to.be(expectedValueLiteral);
      });

      it('should have the property totalCasesPerMillionPop (base name: "totalCasesPerMillionPop")', function() {
        // TODO: update the code to test the property totalCasesPerMillionPop
        expect(instance).to.have.property('totalCasesPerMillionPop');
        // expect(instance.totalCasesPerMillionPop).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

    });
  });

}));
