request = require('supertest-as-promised')

//GET: http://localhost:3030/products/ 
exports.products = function(baseurl) {
    return request(baseurl)
        .get('/products')
};

//GET : http://localhost:3030/categories
exports.categories = function(baseurl) {
    return request(baseurl)
        .get('/categories')
};
// GET : http://localhost:3030/stores
exports.stores = function(baseurl) {
    return request(baseurl)
        .get('/stores')
};

//GET: http://localhost:3030/services/ 
exports.services = function(baseurl) {
    return request(baseurl)
        .get('/services')
};

//GET: http://localhost:3030/version 
exports.version = function(baseurl) {
    return request(baseurl)
        .get('/version')
};

//GET: http://localhost:3030/healthcheck 
exports.healthcheck = function(baseurl) {
    return request(baseurl)
        .get('/healthcheck')
};

/******** POST verification *******/

//post: http://localhost:3030/products/ 
exports.postProducts = function(baseurl) {
    return request(baseurl)
        .post('/products')
};

//post : http://localhost:3030/categories
exports.postCategories = function(baseurl) {
    return request(baseurl)
        .post('/categories')
};
// post: http://localhost:3030/stores
exports.postStores = function(baseurl) {
    return request(baseurl)
        .post('/stores')
};

//post: http://localhost:3030/services/ 
exports.postServices = function(baseurl) {
    return request(baseurl)
        .post('/services')
};


//post: http://localhost:3030/healthcheck 
exports.postHealthcheck = function(baseurl) {
    return request(baseurl)
        .post('/healthcheck')
};

/****** PUT Verification **********/

//PUT: http://localhost:3030/products/ 
exports.putProducts = function(baseurl) {
    return request(baseurl)
        .put('/products')
};

//PUT : http://localhost:3030/categories
exports.putCategories = function(baseurl) {
    return request(baseurl)
        .put('/categories')
};
// PUT: http://localhost:3030/stores
exports.putStores = function(baseurl) {
    return request(baseurl)
        .put('/stores')
};

//PUT: http://localhost:3030/services/ 
exports.putServices = function(baseurl) {
    return request(baseurl)
        .put('/services')
};


/******* DELETE VERIFICATION  *******/
//DELETE: http://localhost:3030/products/ 
exports.deleteProducts = function(baseurl) {
    return request(baseurl)
        .delete('/products')
};

//DELETE : http://localhost:3030/categories
exports.deleteCategories = function(baseurl) {
    return request(baseurl)
        .delete('/categories')
};
//DELETE: http://localhost:3030/stores
exports.deleteStores = function(baseurl) {
    return request(baseurl)
        .delete('/stores')
};

//DELETE: http://localhost:3030/services/ 
exports.deleteServices = function(baseurl) {
    return request(baseurl)
        .delete('/services')
};