---
title: "Understanding object destructuring in JavaScript with five easy, short examples"
categories:
    - blog
tags:
    - object-destructuring
    - javascript
---
![Source: https://www.ctrl.blog/entry/deploy-javascript-source-maps.html](/assets/images/posts/javascript-minified-source.avif)

When you're learning front-end development with JavaScript, your first encounters with the concept of "object destructuring" might be a bit confusing. The term itself might look intimidating, but it really isn't hard to grasp as it's actually meant to make life easier for developers. In short, destructuring is a technique that makes it much easier to extract properties from objects and assign them to variables in a concise and easy-to-read way.

In this article, we'll explore the basics of object destructuring in JavaScript and see some typical use cases to see how it works and how important and practical it can be. Let's dive in!

## What is object destructuring?

Object destructuring is a technique that allows you to extract properties from an object and assign them to variables in a single line of code. With destructuring, you don't need to access each property of an object using dot or bracket notations. This can be a huge time saver when you're working with complex objects or when you're dealing with functions that return objects.

One of the most basic use cases for Object Destructuring is to extract properties from an object and assign them to variables. Consider the following object:

```javascript
const person = {
  firstName: 'David',
  lastName: 'Martinez',
  age: 45,
  city: 'Buenos Aires'
};
```

If you want to extract just the `firstName` and `age` properties and assign them to variables, you can use object destructuring like this:

```javascript
const { firstName, age } = person;
console.log(firstName); // "David"
console.log(age); // 45
```

As you can see, destructuring allows you to extract multiple properties from an object in *a single line of code*.

## Object destructuring with functions

Another example where object destructuring can be useful is when you're working with functions that return objects. Instead of accessing each property of the returned object using dot or bracket notations, you can use destructuring to extract the properties you need and assign them to variables.

Consider the following function:

```javascript
function getPerson() {
  return {
    firstName: 'Ellen',
    lastName: 'Norris',
    age: 34,
    city: 'Austin'
  };
}
```

As with the previous example, if you want to extract the `firstName` and `age` properties from the object returned by the `getPerson()` function and assign them to variables, you could destructure them like this:

```javascript
const { firstName, age } = getPerson();
console.log(firstName); // "Ellen"
console.log(age); // 34
```

So, this is an easy way to work with functions that return objects.

## Object destructuring with default values

Object Destructuring can also be used to provide default values for properties that may not exist in an object. Consider the following one:

```javascript
const person = {
  firstName: 'Frank',
  age: 23
};
```

If you want to extract the `lastName` property from the `person` object and assign it to a variable, but the `lastName` property doesn't exist in the object, you can use object destructuring with a default value:

```javascript
const { lastName = 'Orbison' } = person;
console.log(lastName); // "Orbison"
```

And there you go: object destructuring lets you to provide a default value for a property that may not exist in an object.

## Renaming properties with object destructuring

In addition to extracting properties from an object, object destructuring can also be used to rename properties. For example:

```javascript
const person = {
  firstName: 'Gloria',
  lastName: 'Pereira',
  age: 56,
  city: 'Rio De Janeiro'
};
```

If you want to extract the `firstName` property from the `person` object and assign it to a variable with a different name, you could use object destructuring with a renamed variable as follows:

```javascript
const { firstName: name } = person;
console.log(name); // "Gloria"
```

## Accessing nested properties inside objects

Extracting nested properties from objects can cumbersome sometimes. But object destructuring provides an advanced and rather convenient way to access those pesky nested properties. Take a look at the following example:

```javascript
const user = {
  name: {
    first: 'Alice',
    last: 'Smith'
  },
  age: 27,
  location: {
    city: 'New York',
    state: 'NY'
  }
};
```

If you want to extract the first name and city properties from the `user` object and assign them to variables, you could use object destructuring as follows:

```javascript
const { name: { first }, location: { city } } = user;
console.log(first); // "Alice"
console.log(city); // "New York"
```

## In a nutshell

To summarize, object destructuring is a powerful feature of JavaScript that can save you a lot of time and make your code more concise and easy to read.

With object destructuring, you can:

* Extract properties from an object and assign them to variables
* Provide default values for properties that may not exist in an object
* Rename properties, and
* Extract nested properties from an object

Keep in mind that you can also use array destructuring to extract values from an array and assign them to variables (a use case which I might cover on a later post).

So, by using object destructuring, you can write cleaner and more readable code that is easier to maintain and debug, making you a more productive and effective front-end developer.
