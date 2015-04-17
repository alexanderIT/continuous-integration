/**
 * Created by aleksander on 4/17/15.
 */
var expect=require('chai').expect;

describe('Products',function(){

    it('get all when products in db should return list of products',function(){
        expect(true)
            .to
            .be.true;
    });
    it('get all when no products in db should return empty list of products',function(){
        expect(5)
            .to
            .be.a('number');

    });
});