const express = require("express");
const personRepo = require('../repo/personRepo');
const request = require('supertest');
const spy = require('spy');
const {  mockResponse } = require('mock-req-res');
const sinon = require('sinon');
var api = require('../routes/api/personRoute');

const celebrityList=[
{
    "firstName":"Usain",  
    "lastName":"Bolt",
    "profession":"Field Athlete"
  }, 
]

var data= 
{ 
    status: 200,
    statusDesc:"succesful", 
    data:celebrityList, 
    message: 'Service Request list fetched Successfully' 
}

describe('CelebrityRoute Test', function() 
{
    let status, send, res, req;
     req = {"params":{"id":1}};
    
    it('test for celebrityRoute', function() 
    {
        // Stub getAllList function and make it return data always
        const getAllStub = sinon.stub(personRepo, "people").returns(data);
        options={
            send: spy(),
            status: spy(),
        }

        const res = mockResponse(options)
        request(api)
        .get('/celebrity/getAll',req,res)
        .expect(200)
    });
});

