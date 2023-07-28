const request = require('supertest');
const assert = require('assert');
const app = require('../server/serve');

// Optional: Define a time to wait for the response
const RESPONSE_TIMEOUT = 10000; // 5 seconds
let CUSTOMER_ID = '';

describe('Customer Routes Test', function () {
  // Increase the timeout for the entire test suite
  this.timeout(RESPONSE_TIMEOUT);

  // Test case for customer signup
  it('should signup a new customer', function (done) {
    const userData = {
      email: "bitweb24@gmail.com",
      password: '12345',
    };

    request(app)
      .post('/api/v1/signup')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.body.message, 'Customer registered successfully');
        console.log(res.body.message);
        done();
      });
  });

  // Test case for customer login
  it('should login an existing customer', function (done) {
    const loginCredentials = {
      email: "bitweb24@gmail.com",
      password: '12345',
    };

    request(app)
      .post('/api/v1/login')
      .send(loginCredentials)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.equal(res.body.message, 'Login successful');
        assert.ok(res.body.customer);
        assert.ok(res.body.customer._id);

        CUSTOMER_ID = res.body.customer._id;

        console.log(res.body.message);
        console.log(res.body.customer);
        console.log(CUSTOMER_ID);
        done();
      });
  });

  // Test case for getting customer details
  it('should get customer details', function (done) {
    request(app)
      .get(`/api/v1/account/${CUSTOMER_ID}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.equal(res.body.message, 'Customer Found');
        console.log(res.body.message);

        assert.ok(res.body.customer);
        console.log(res.body.customer);
        done();
      });
  });

  // Test case for adding an item to orders
  it('should add an item to orders', function (done) {
    const PRODUCT_ID = '649fd198952839ecd16c43d7';
    request(app)
      .post(`/api/v1/account/${CUSTOMER_ID}/orders`)
      .send({PRODUCT_ID})
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.body.message, 'Order created successfully');
        assert.ok(res.body.orders);

        console.log("ORDERS: ", res.body.orders);
        done();
      });
  });

  // // Test case for getting all orders
  // it('should get all orders', function (done) {
  //   request(app)
  //     .get(`/api/v1/account/${CUSTOMER_ID}/orders`)
  //     .expect('Content-Type', /json/)
  //     .expect(200)
  //     .end((err, res) => {
  //       if (err) return done(err);

  //       assert.strictEqual(res.body.message, 'Fetching all orders');
  //       assert.ok(res.body.orders);
  //       done();
  //     });
  // });

  // Test case for deleting Customer Account
  it('should delete customer', function (done) {
    request(app)
      .delete(`/api/v1/account/${CUSTOMER_ID}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.body.message, 'Customer deleted successfully');
        assert.ok(res.body.customerId);

        console.log(res.body.customerId);

        done();
      });
  });

});