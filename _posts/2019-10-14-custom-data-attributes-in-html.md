---
title: "Understanding custom data attributes in HTML"
categories:
    - blog
tags:
    - custom-data-attributes
    - html
---
The other day I started practicing Javascript with Wes Bos' [Javascript 30](https://javascript30.com/), a free online set of coding challenges which I highly recommend.

The very first of those 30 challenges is a cool exercise called "The Javascript Drum Kit", an HTML+CSS+JS implementation of a drum machine. Really neat, if you ask me, and not complicated at all.

However, this piece of code caught my attention, in a total "wait what" fashion:

```html
<audio data-key="65" src="assets/sounds/clap.wav">Clap</audio>
<audio data-key="83" src="assets/sounds/hihat.wav">HiHat</audio>
<audio data-key="68" src="assets/sounds/kick.wav">Kick</audio>
<audio data-key="70" src="assets/sounds/openhat.wav">OpenHat</audio>
<audio data-key="71" src="assets/sounds/boom.wav">Boom</audio>
<audio data-key="72" src="assets/sounds/ride.wav">Ride</audio>
<audio data-key="74" src="assets/sounds/snare.wav">Snare</audio>
<audio data-key="75" src="assets/sounds/tom.wav">Tom</audio>
<audio data-key="76" src="assets/sounds/tink.wav">Tink</audio>
```

<div style="text-align:center" markdown="1">
![Wait, what?](https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif)
</div>

What was that `data-key` thing? I don't claim to know every possible HTML attribute in the book, but I was fairly certain I hadn't seen that one before.

So I set out to search for it and found out about [HTML custom data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes). _Seek and thou shalt find_.

From that link at MDN we learn that:

> [data-* attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-dataset) allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM, or [Node.setUserData()](https://developer.mozilla.org/en-US/docs/Web/API/Node/setUserData).

So, custom data attributes are used to store additional information within our HTML markup, just that.

In the case of our Javascript drum kit, `data-key` was meant to reference actual Javascript [key codes](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes), that is, every `<audio>` element was bound to a specific keyboard key that would trigger a sound specified by the `src` attribute.

Then, inside the Javascript code, those `data-key` attributes are used in a querySelector() method to define an `audio` const that will in turn play the sound of each key:

```javascript
function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    if (!audio) return; // stop the function from running altogether
    audio.currentTime = 0; // rewinds
    audio.play();
    key.classList.add('playing');
  }
```

Without these `data-key` attributes, this HTML+JS drum machine would have needed more complicated code to achieve the same results.

To learn more and see additional examples of custom data attributes in HTML, make sure to also check out the W3Schools entry on [HTML data-* attributes](https://www.w3schools.com/tags/att_global_data.asp), as well as this post on Mozilla Hacks explaining [how to use data-* attributes in Javascript and CSS](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).

Thanks for reading and see you in my next post!
