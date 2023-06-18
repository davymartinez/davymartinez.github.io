---
title: "Partial application of functions in JavaScript"
categories:
    - blog
tags:
    - partial-application
    - higher-order-functions
    - functional-programming
    - javascript
---
![Source: https://unsplash.com/es/fotos/P0excOzTFhg](/assets/images/posts/marcin-simonides-P0excOzTFhg-unsplash.jpg)

As I continue on my journey with Scrimba's [Frontend Developer Career Path](https://scrimba.com/learn/frontend), and after finishing the Basic React module, I took a slight [detour](https://scrimba.com/learn/javascript) from that path in order to revise some fundamental as well as more advanced JavaScript concepts (then it will be back to the path, to delve into advanced React topics).

One of the advanced concepts I found more interesting was that of "partial application" of functions.

[Partial application](https://www.digitalocean.com/community/tutorials/javascript-functional-programming-explained-partial-application-and-currying) is a technique from the domain of functional programming that involves creating a new function by fixing a subset of the arguments of an existing function. Since functions are "[first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen)" in JavaScript, we can assign them to variables, pass them as arguments, and return them as values. This is what allows us to apply partial applications to functions in the language.

Up to this point, all of the above might still sound a bit abstract, but bear with me. We'll get there.

When we apply a partial application to a function, it returns a new function that takes fewer arguments than the original function. This new function "remembers" the fixed arguments and can be invoked with the remaining arguments at a later time. This technique allows us to create specialized functions from more general ones, which promotes code reusability and enhances readability.

Let's take a look at an example to take this from concept to practice:

```javascript
// the code below comes straight from the section on "Partial Application for Single-Responsibility Functions"
// on Scrimba's JS Deep Dive course:

const getData = baseUrl => route => callback =>
    fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data))
```

The code above it's just one of those fetch calls which we can use to get data from an API. Now, notice we're returning two anonymous functions in sequence, one with `route` and the other with `callback` as arguments. And above all, there's the `baseUrl` argument.

We could use this function to fetch endpoints such as posts or comments from an API, for example. In this case, let's use the [JSON Placeholder API](https://jsonplaceholder.typicode.com) to picture this:

```javascript
getData("https://jsonplaceholder.typicode.com", "/posts")       // returns a list of posts
getData("https://jsonplaceholder.typicode.com", "/comments")    // returns a list of comments
```

As we can see from the example above, we're passing `"https://jsonplaceholder.typicode.com"` as `baseUrl` and either `"/posts"` or `"/comments"` as `route`. And that's cool, except for those use cases when we have many different endpoints, in which case we'd end up duplicating our efforts and re-typing the same base URL over and over again.

And this is where we can implement the partial application technique. Check the code below:

```javascript
const getSocialMediaData = getData("https://jsonplaceholder.typicode.com")

const getSocialMediaPosts = getSocialMediaData("/posts")
const getSocialMediaComments = getSocialMediaData("/comments")
```

So, what happened above?

We declared a `getSocialMediaData` function that calls `getData()` with only its `baseUrl` argument. And since this `getData()` function, in turn, returns another function, we're saving the result of calling `getSocialMediaData()` into two other variables, `getSocialMediaPosts` and `getSocialMediaComments`. Each one of these only accepts a single argument, but still "remembers" the `baseUrl` one, because inner functions have access to all the values in their parent functions, giving what is known as a [closure](https://www.w3schools.com/js/js_function_closures.asp).

Again, partial application of functions allows us to easily create variations of existing functions by fixing specific arguments, leading to more modular and composable code.

In addition to this, partial application promotes functional programming principles such as immutability and function purity, which can lead to code that is easier to reason about and test.

Hopefully this post made the concept clear, but there surely are more concepts to explore in relation to this topic, such as higher order functions, currying, and closures. So stay tuned for more posts on these and thanks for making it to the end!
