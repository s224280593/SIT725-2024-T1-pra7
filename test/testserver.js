const { expect } = require("chai");
let request = require("request");
let url = 'http://localhost:3000/api/places';
let cat = {paht:'',title:''}

describe('name', function() {
    it('description', function(done) {
        request(url, function(a,b,c){
            console.log(arguments);
            let responseObject = JSON.parse(c);
            expect(responseObject.data).to.be.a('array');
            done();
        });
    });
});

describe('name2', function() {
    it('it2', function(done){
        request.post({url:url,form:cat}, function(a,b,c){
            //todo assert here
            done();
        });
    });
});
// connect to the socket
let socket = io();
socket.on('number', (msg) => {
console.log('Random number: ' + msg);
})
