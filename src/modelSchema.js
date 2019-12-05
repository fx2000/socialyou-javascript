// Schema array
const schema = [
  'id',
  'name',
  'age'
];

// Model function
const model = (action, object, schema) => {
  const DB = [];

  // Add action
  const add = (object) => {
    const valid = {};
    // Iterate through schema
    for (let key of schema) {
      // Compare schema to object
      if (key in object) { valid[key] = object[key] }
    }
    // Push valid values into db array
    DB.push(valid);
    return DB;
  }

  // Check schema for allowed properties
  const checkProperty = (object) => {
    const errors = [];
    const invalid = Object.keys(object).filter(
      element => !schema.includes(element)
    );
    for (let error of invalid) {
      errors.push(`The parameter ${error} was not added because it was no allowed by the schema`)
    }
    return errors;
  }

  switch (action) {
    case 'add':
      const response = {
        Database: add(object),
        Errors: checkProperty(object)
      }
      return response;
    default:
      return 'Action not allowed';
  }
}
