---
title: "How to setup your own website using GitHub Pages, Jekyll, and Namecheap"
categories:
    - blog
tags:
    - how-to
    - github
    - github-pages
    - jekyll
    - namecheap
---
Let's make this quick'n'dirty. Kind of.

What you'll need:

1. Your own domain, for which I recommend Namecheap.

2. A GitHub account, to be able to use GitHub Pages to host your site.

3. Jekyll, to generate and manage your static site.

So far, so good. Let's dive in a bit deeper.

## Getting your domain

There is no shortage of domain name suppliers. However, I recommend [Namecheap](https://www.namecheap.com/) because their prices are really good and you get a pretty decent dashboard to manage your domain(s). From my experience with Namecheap I can say they care about quality and security.

![namecheap page](/assets/images/posts/Namecheap.png)

As with many other domain name providers, you can search for domain availability and experiment with name variations. You can also input your full name and they'll give you a list of available domains based on all sorts of variations of it, along with any available offers.

Just browse around their site if you want to know more about what they offer. Once you're sure about the domain you want, purchasing/registering it is usually a quick, frictionless experience: you get your order confirmation email as well as a domain verification one, required to activate your newly acquired domain.

Once everything is in order, it's time to get your GitHub Pages setup rolling.

## Hosting through GitHub Pages

First thing you need is a GitHub account: head over to the site and create one if you haven't already. Once the account is ready, the process is pretty straightforward. All directions are available right there in the [GitHub Pages home](https://pages.github.com/).

<iframe width="853" height="480" src="https://www.youtube.com/embed/2MsN8gpT6jY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Basically, the steps are:

1. Create a repository, with the form username.github.io (username being your GitHub user name)

2. Clone the repository via the git clone command, as in

    ```bash
    ~ $ git clone https://github.com/username/username.github.io
    ```

3. At this point you should add your custom domain. GitHub Pages provides [extensive reference for this process](https://help.github.com/en/articles/using-a-custom-domain-with-github-pages), which if I try to replicate here would make this post far too long. So just head over to the [official docs on GitHub Pages](https://help.github.com/en/categories/github-pages-basics) for more detailed information on how to safely configure your custom domain.

4. Go to your [Namecheap dashboard](https://ap.www.namecheap.com/) and link your domain to GitHub Pages. This is another multi-step process, which is better followed through by reading the [official Namecheap knowledgebase](https://www.namecheap.com/support/knowledgebase/). So make sure you read it carefully and learn how to manage your domain settings and create your CNAME and A records. There's also a waiting time involved here, usually 30 minutes or less, before the records take effect, so keep that in mind. Again, all the info is right there in Namecheap.

5. Now, head to your local folder on your computer, where you cloned your repo as per step #2 and create an index.html file.

6. Git add / commit / push as in:

    ```bash
    ~ $ git add --all
    ~ $ git commit -m "Initial commit"
    ~ $ git push -u origin master
    ```

7. Profit!!! Your newly hosted (albeit extremely basic) website should be available at your own domain with [https://github.com/username/username.github.io](https://github.com/username/username.github.io) redirecting to it.

## Generating and customizing your website with Jekyll

So far, what we have is a barebones page. Real stuff starts to happen when you add your content to a styled page. That's where Jekyll enters into the fray.

![Jekyll logo](/assets/images/posts/jekyll_logo.png)

### How to install Jekyll

Installing Jekyll is pretty straightforward. As the [official docs](https://jekyllrb.com/docs/) point out:

1. Install a [Ruby development environment](https://jekyllrb.com/docs/installation/).

2. Run `gem install jekyll bundler` -- this installs both Jekyll itself and the Bundler to manage dependencies.

3. Create your Jekyll site with `jekyll new mysite` at `./mysite`.

4. Run `cd mysite`.

5. Run `bundle exec jekyll serve`.

6. Go to [http://localhost:4000](http://localhost:4000).

Your newly deployed site should be available for you to check on your local server.

### Post-installation steps

Jekyll is a powerful site generator, with plenty of useful features, which means there's a lot to tweak if you want to go the extra mile.

Odds are if you're reading a tutorial like this you want to have more than a basic, default site. That's why you need to get familiar with things like [Jekyll's folder structure](https://jekyllrb.com/docs/structure/). Check out the previous link to learn more about each folder's purpose. It'll save you lots of time later on if, like me, you're sometimes impatient to get things rolling fast!

Make sure to head over to [Jekyll docs](https://jekyllrb.com/docs/) and read carefully everything on the right sidebar under "Content" and "Site Structure" to really get the hang of how Jekyll sites work.

### Customizing

Detailed steps for customizing your Jekyll site go beyond the scope of this post. However and as expected, the official docs offer a nice starting point to get into [Jekyll theming](https://jekyllrb.com/docs/themes/). Read it thoroughly and make sure you understand how gem-based themes work.

![Jekyll themes portfolio](/assets/images/posts/jekyll_themes.png)

Once you're ready to install a theme, you'll surely find lots of great ones out there. To start looking, you can head out to:

1. [RubyGems Jekyll theme search](https://rubygems.org/search?utf8=%E2%9C%93&query=jekyll-theme)

2. [Jekyll themes curated directory](https://jekyllthemes.io/)

3. [Jekyll themes on GitHub](https://github.com/topics/jekyll-themes)

4. [Jekyll Theme Showcase](https://talk.jekyllrb.com/t/jekyll-theme-showcase-share-your-jekyll-themes/1382)

## Summing up

Installing your own static site with Jekyll and hosting it with GitHub Pages isn't that complicated. It surely is a multi-step affair but all the resources are out there. This post is just a rough guide for you to start digging deeper into your own Jekyll site deployment.

A final recommendation: check out [Mike Dane's YouTube tutorials on Jekyll](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB). They're easy to follow, spot-on, no fluff, and guaranteed to get your site running.

<iframe width="560" height="315" src="https://www.youtube.com/embed/T1itpPvFWHI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Thanks for reading and see you on my next post!
