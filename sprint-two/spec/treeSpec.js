describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });
  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  describe('extra credit', function () {
    beforeEach(function() {
      tree = Tree();
    });
    
    it('should have method named "traverse"', function() {
      expect(tree.traverse).to.be.a("function");
    });

    it('should call a cb function on every value contained in tree', function() {
      var results = [];
      var cbDouble = function (value) {
        results.push(value * 2);
      };
      tree.addChild(2);
      tree.addChild(8);
      tree.addChild(27);
      tree.addChild(3);
      tree.traverse(cbDouble)
      expect(results[0]).to.equal(4);
      expect(results[1]).to.equal(16);
      expect(results[2]).to.equal(54);
      expect(results[3]).to.equal(6);
    });
    
    it('should be able to traverse on trees that have nested trees', function() {
      var results = [];
      var cbDouble = function (value) {
        results.push(value * 2);
      };
      tree.addChild(5);
      tree.addChild(6);
      tree.children[0].addChild(7);
      tree.children[1].addChild(8); 
      tree.traverse(cbDouble);
      expect(results[0]).to.equal(10);
      expect(results[1]).to.equal(14);
      expect(results[2]).to.equal(12);
      expect(results[3]).to.equal(16);    
    });
  });
  
});

