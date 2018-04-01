/**
 *  Class provides the checks for API endpoint : BESTBUY API 
 *  @author Trisha Chetani
 */
'use strict'

var bestBuyAPI = require('../api/bestbuyAPI.js');
var common = require('../api/common.js')


var chai = require('chai');
var assert = chai.assert; // Using Assert style



/**
 * provides checks for httpbin
 */
describe("GET: http://bestBuy/", function() {
    /**
     * provides check for successfully calling api with query param @products
     * @return total no of products address
     * @ verify response is in json
     */
    it("should return successful response with query param products AND GET request", function(done) {
        bestBuyAPI.products(common.baseurl)
            .expect('Content-Type', /json/)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @products
     * @return failure as post request
     */
    it("should return failure response with query param products AND POST request", function(done) {
        bestBuyAPI.postProducts(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @products
     * @return failure as put request
     */
    it("should return failure response with query param products AND PUT request", function(done) {
        bestBuyAPI.putProducts(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @products
     * @return failure as delete request
     */
    it("should return failure response with query param products AND DELETE request", function(done) {
        bestBuyAPI.deleteProducts(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @categories
     * @return categories
     */
    it("should return successful response with query param categories and GET request", function(done) {
        bestBuyAPI.categories(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @categories
     * @return failure as put
     */
    it("should return failure response with query param categories and PUT request", function(done) {
        bestBuyAPI.putCategories(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @categories
     * @return failure as post
     */
    it("should return failure response with query param categories AND POST REQUEST", function(done) {
        bestBuyAPI.postCategories(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @categories
     * @return failure as delete
     */
    it("should return failure response with query param categories AND DELETE request", function(done) {
        bestBuyAPI.deleteCategories(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });


    /**
     * provides check for successfully calling api with query param @stores
     * @return all information
     */
    it("should return success response with query param stores AND GET request", function(done) {
        bestBuyAPI.stores(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @stores
     * @return failure as as post request
     */
    it("should return failure response with query param stores AND POST request", function(done) {
        bestBuyAPI.postStores(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @stores
     * @return failure as as put request
     */
    it("should return failure response with query param stores AND PUT request", function(done) {
        bestBuyAPI.putStores(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @stores
     * @return failure as as delete request
     */
    it("should return failure response with query param stores AND DELETE request", function(done) {
        bestBuyAPI.deleteStores(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @services
     * @return all information
     */
    it("should return success response with query param services AND GET request", function(done) {
        bestBuyAPI.services(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @services
     * @return failure as as post request
     */
    it("should return failure response with query param services AND POST request", function(done) {
        bestBuyAPI.postServices(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @services
     * @return failure as as put request
     */
    it("should return failure response with query param services AND PUT request", function(done) {
        bestBuyAPI.putServices(common.baseurl)
            .then(function(response) {
                common.failStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @services
     * @return failure as as delete request
     */
    it("should return failure response with query param services AND DELETE request", function(done) {
        bestBuyAPI.deleteServices(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @version
     * @return all information
     */
    it("should return success response with query param version AND GET request", function(done) {
        bestBuyAPI.version(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });

    /**
     * provides check for successfully calling api with query param @healthcheck
     * @return all information
     */
    it("should return success response with query param healthcheck AND GET request", function(done) {
        bestBuyAPI.healthcheck(common.baseurl)
            .then(function(response) {
                common.successStatus(response);
                done();
            });
    });
});