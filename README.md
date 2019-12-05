# socialyou-javascript

SocialYou Technical Test (Javascript)

Create a function called `model`. The `model` function allows you to control how you interact with a collection of objects that are stored in the array called `DB`. Model imposes conditions on the properties of the collection, for example which keys are allowed.

This `model` function uses the definitions of a predefined object called `schema` to assert the keys that each object in a collection that are allowed. The `model` function can take 3 arguments: the first is the type of the operation we want to execute on the db and the second is the data we need to execute it, and the third one would be our `schema` array defining the pattern or template for what data is valid for adding to the DB.  

For now we only define an operation called 'add'.

> If the argument `add` is not present then nothing should be added.

Example schema:

`schema = ["id", "name", "age"]`

> Please note the schema is only an example here, your function should work with any valid array provided as a schema.
> Define you DB array inside the function to avoid issues.

Your function should take three arguments: an action, an object and a schema.

Example:  

```js
var DB = []

model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"}, schema)
DB // [{id: 1, name: "Joe", age: 32}] => Address was not added because not allowed by the schema  

model("add", {id: 1, age: 32, address: "Muntaner 262, Barcelona"}, schema)
DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schema  
```

===
