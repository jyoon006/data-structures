describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });
  
    describe('extra credit', function () {
      
      beforeEach(function() {
        set = Set();
      });
      
      it('should be able to add numbers', function() {
        set.add(14);
        set.add(27);
        expect(set.contains(14)).to.equal(true);
        expect(set.contains(25)).to.equal(false);
        expect(set.contains(27)).to.equal(true);
      });
      
      it('should be able to handle number 0', function() {
        set.add(5);
        set.add(10);
        set.add(0);
        set.add(4);
        expect(set.contains(0)).to.equal(true);
      });
  
      it('should be able to handle objects', function () {
        set.add({a: 1});
        set.add({b: 43});
        expect(set.contains({a: 1})).to.equal(true);
        expect(set.contains({a: 2})).to.equal(false);
        expect(set.contains({b: 43})).to.equal(true);
      });
      
      it('should not add empty object', function() {
        set.add({a: 1});
        set.add({b: 43});
        set.add({});
        expect(set.contains({a: 1})).to.equal(true);
        expect(set.contains({a: 2})).to.equal(false);
        expect(set.contains({})).to.equal(false);
      });  
      
  });

});
