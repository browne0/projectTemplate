# A Solid Web Development Project Template

This is the project template I use everytime I am learning something new, or working on a project. Speeds up my workflow by a ton, and proofchecks everything I do!

# File Structure

<p align='center'>
<img src="http://i.imgur.com/4951IoP.png">
</p>
## Getting Started

This project assumes that you already know:

1. How to use Sass
2. A basic understanding of navigating a CLI. (command line interface)

In order to use this template, you will need three things installed on your device:

1. [Node.js](https://nodejs.org/en/download), a very powerful JavaScript runtime.
2. [Node Package Manager](https://docs.npmjs.com/getting-started/installing-node), popularly known as npm.
3. [Grunt CLI](http://gruntjs.com/getting-started) The command line interface for Grunt, a popular automated task runner.

The package.json file as of right now comes with five dev dependencies/modules: 

* grunt v1.0.1
* grunt-contrib-jshint v1.0.0
* grunt-contrib-watch v1.0.0
* grunt-sass v1.2.1
* node-bourbon v4.2.8

### Please note that this is for development purposes, this template will not minify your files for you!

## Installing Node Modules

In order to install these modules in your project follow these steps: 

1. Traverse to the root of your project in your CLI.
 
 - If you're not sure which one that is, it's the folder with *package.json* in it.
 
2. Type in the following into your CLI

 <pre><b>npm install -g grunt-cli</b></pre> 

 - This will install Grunt globally on your computer, allowing you to call Grunt from any directory on your system.

3. Type in the following into your CLI. Node will take care of the rest:

 <pre><b>npm install -g grunt-cli</b></pre> 

4. Finally type in this last line of code. This will make sure that all the modules 

## Grunt Capabilities

If you didn't check out the link above, Grunt is a task manager that allows developers to automate their workflow to their max potential. The gruntfile.js file I provided comes with three tasks programmed in:

1. [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) - JavaScript File Checker
2. [Sass Compiler, C++ version](https://github.com/sindresorhus/grunt-sass) - Popular CSS Precompiler
3. [Grunt Watch](https://github.com/gruntjs/grunt-contrib-watch) - Run tasks whenever file patterns are added, changed or deleted.
..* Watch has livereload! [Livereload](http://livereload.com) is a feature that automatically refreshes your browser when a change is detected in your files. To learn more about LiveReload, look at the LiveReload section below.

## Using Grunt

This is the awesome part, since the gruntfile.js is already created, all you have to do is type in:

<pre><b>grunt</b></pre>

Grunt Watch will be triggered, and it will now wait for any changes you make showing you the following output:

<pre>Running "watch" task <br>Waiting...</pre>

### Please note that it's not broken, it's simply just waiting for you to make a change :)

## Installing LiveReload on your Browser

[Livereload](http://livereload.com) is currently available and functional on the following browsers:

- Google Chrome
- Firefox
- Safari

The only thing we need to do to get LiveReload to work, is to download the extension on the browser of your choice. Once it's downloaded, all you have to do is:

1. Open up your index.html file (or navigate to it if you're using a server)
2. Click the button right next to your address bar. <img src="http://i.imgur.com/Y6xfV0D.png">

I will place the links for each browser below:

- [Safari](http://download.livereload.com/2.1.0/LiveReload-2.1.0.safariextz)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/livereload)
- [Google Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

## Important things to know

- You can fork this repository into as many projects as you want and just rename it! Then you can just clone it onto your computer. It works for me, and I hope you can get some use out of it as well.
- You do not need to install npm for every project you create.
- You do not need to install Node for every project you create.
- The node_modules folder is big. A good practice is to add it to your .gitignore, so that you have it on your machine, but not up on Github.

## FAQ

### I will fill these out as people have questions on why I chose certain things over others! If you have a question, feel free to drop an issue on this repo!

## Authors

* **Malik Browne** - Current freelance web developer, and creator of this template.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to a bunch of my friends for helping me see why this was so important. I thought it was awesome so I thought I'd share it with everyone. If it helps one person learn web development, it's worth it for me. Cheers!
