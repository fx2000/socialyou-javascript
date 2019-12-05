describe("Actions", function() {
  var validObject = {
    id: 1,
    name: "Test",
    age: 99
  };
  var invalidObject = {
    id: 1,
    name: "Test",
    age: 99,
    address: "Test address"
  };
  var validAction = "add";
  var invalidAction = "remove";
  var schema = [
    'id',
    'name',
    'age'
  ];

  it('Action should be a string', function () {
    expect(model(99, validObject, schema)).toEqual('Invalid input');
  });

  it('Object should be an object', function () {
    expect(model(validAction, "test", schema)).toEqual('Invalid input');
  });

  it('Schema should be an object', function () {
    expect(model(validAction, validObject, "test")).toEqual('Invalid input');
  });

  it('Action should be a string', function () {
    expect(model(99, validObject, schema)).toEqual('Invalid input');
  });

  it("Result should be an object", function () {
    expect(typeof (model(validAction, validObject, schema))).toBe("object");
  });

  it("Should return an invalid action error", function () {
    expect(model(invalidAction, validObject, schema)).toEqual('Action not allowed');
  });

  it("Should be able to add a valid record", function () {
    expect(model(validAction, validObject, schema)).toEqual(
      {
        Database: [ { id: 1, name: 'Test', age: 99 } ],
        Errors: []
      }
    )
  });

  it("Should reject parameters outside the schema", function () {
    expect(model(validAction, invalidObject, schema)).toEqual({
      Database: [{
        id: 1,
        name: 'Test',
        age: 99
      }],
      Errors: [
        'The parameter address was not added because it was not allowed by the schema'
      ]
    })
  });
});
