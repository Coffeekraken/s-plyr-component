# Coffeekraken s-plyr-component <img src=".resources/coffeekraken-logo.jpg" height="25px" />

<p>
	<!-- <a href="https://travis-ci.org/coffeekraken/s-plyr-component">
		<img src="https://img.shields.io/travis/coffeekraken/s-plyr-component.svg?style=flat-square" />
	</a> -->
	<a href="https://www.npmjs.com/package/coffeekraken-s-plyr-component">
		<img src="https://img.shields.io/npm/v/coffeekraken-s-plyr-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-plyr-component/blob/master/LICENSE.txt">
		<img src="https://img.shields.io/npm/l/coffeekraken-s-plyr-component.svg?style=flat-square" />
	</a>
	<!-- <a href="https://github.com/coffeekraken/s-plyr-component">
		<img src="https://img.shields.io/npm/dt/coffeekraken-s-plyr-component.svg?style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-plyr-component">
		<img src="https://img.shields.io/github/forks/coffeekraken/s-plyr-component.svg?style=social&label=Fork&style=flat-square" />
	</a>
	<a href="https://github.com/coffeekraken/s-plyr-component">
		<img src="https://img.shields.io/github/stars/coffeekraken/s-plyr-component.svg?style=social&label=Star&style=flat-square" />
	</a> -->
	<a href="https://twitter.com/coffeekrakenio">
		<img src="https://img.shields.io/twitter/url/http/coffeekrakenio.svg?style=social&style=flat-square" />
	</a>
	<a href="http://coffeekraken.io">
		<img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=flat-square&label=coffeekraken.io&colorB=f2bc2b&style=flat-square" />
	</a>
</p>

<p class="lead">Simple webcomponent wrapper around the nice [plyr](https://github.com/sampotts/plyr) library</p>

[![View demo](http://components.coffeekraken.io/assets/img/view-demo.png)](http://components.coffeekraken.io/app/s-plyr-component)

## Table of content

1. **[Demo](http://components.coffeekraken.io/app/s-plyr-component)**
2. [Install](#readme-install)
3. [Get Started](#readme-get-started)
4. [Base props](#readme-base-props)
5. [API](#readme-api)
6. [Getters/Setters](#readme-getters-setters)
7. [Javascript API](doc/js)
8. [SASS API](doc/sass)
9. [Sugar Web Components Documentation](https://github.com/coffeekraken/sugar/blob/master/doc/webcomponent.md)
10. [Browsers support](#readme-browsers-support)
11. [Code linting](#readme-code-linting)
12. [Contribute](#readme-contribute)
13. [Who are Coffeekraken?](#readme-who-are-coffeekraken)
14. [Licence](#readme-license)

<a name="readme-install"></a>

## Install

```
npm install coffeekraken-s-plyr-component --save
```

<a name="readme-get-started"></a>

## Get Started

First, import the component into your javascript file like so:

```js
import SPlyrComponent from "coffeekraken-s-plyr-component"
```

Then simply use it inside your html like so:

```html
<!-- HTML5 video -->
<s-plyr
  src="my-cool-video.mp4"
  poster="my-cool-poster.jpg"
  autoplay
  muted
></s-plyr>
<!-- Youtube -->
<s-plyr
  src="https://www.youtube.com/watch?v=8kVI621fZug"
  autoplay
  muted
></s-plyr>
<!-- Vimeo -->
<s-plyr src="https://player.vimeo.com/video/127200914" autoplay muted></s-plyr>
```

To load the CSS you have two choices. You can:

1. Set the `loadCss` prop to `true`.
   - This will load the standard plyr css from a CDN for your
2. Generate the css using sass by yourself like so:

```scss
@import "node_modules/coffeekraken-s-plyr-component/index";
@include s-plyr-classes($colors: default primary);
```

Then you will be able to set a color on your video player like so:

```html
<!-- default color -->
<s-plyr src="..."
  ><s-plyr>
    <!-- primary color -->
    <s-plyr src="..." color="primary"></s-plyr></s-plyr
></s-plyr>
```

<a id="readme-base-props"></a>

## Base props

This webcomponent support all the [options](https://github.com/sampotts/plyr#options) that plyr support. Their's a lot so here the most common ones:

#### `src`

- {String} - `null` **Required**

Specify the video source. Can be a local video file, a youtube or a vimeo url

#### `loadCss`

- {Boolean} - `false`

Specify if want to load the css of plyr from a cdn or not

#### `poster`

- {String} - `null`

Specify the poster image to use. This is usable only with local video. Youtube and vimeo will provide their own poster picture

#### `controls`

- {Array} - `['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']`

Specify the controls you want for your player

#### `autoplay`

- {Boolean} - `false`

Autoplay the media on load. This is generally advised against on UX grounds. It is also disabled by default in some browsers.

#### `volume`

- {Number} - `1`

A number, between 0 and 1, representing the initial volume of the player.

#### `muted`

- {Boolean} - `false`

Whether to start playback muted.

#### `ratio`

- {String} - `16:9`

The aspect ratio you want to use for embedded players.

#### `loop`

- {Boolean} - `false``

Whether to loop the current video.

<a id="readme-api"></a>

## API

The webcomponent expose some function for you to use. Here's the list:

- `play`
- `pause`
- `togglePlay(toggle)`
- `stop`
- `restart`
- `rewind(seetTime)`
- `forward(seekTime)`
- `increaseVolume(step)`
- `decreaseVolume(step)`
- `toggleCaptions(toggle)`
- `enterFullscreen`
- `exitFullscreen`
- `toggleFullscreen`
- `airplay`
- `toggleControls(toggle)`
- `on(event, callback)`: Listen to one of [these events](https://github.com/sampotts/plyr#events)
- `once(event, callback)`
- `off(event, callback)`
- `support(type)`
- `destroy`

<a id="readme-getters-setters"></a>

## Getters / Setters

The webcomponent proxies all these getters/setters from the plyr instance:

- `isHTML5`: getter
- `isEmbed`: getter
- `playing`: getter
- `paused`: getter
- `stopped`: getter
- `ended`: getter
- `buffered`: getter
- `currentTime`: getter/setter
- `seeking`: getter
- `duration`: getter
- `volume`: getter/setter
- `muted`: getter/setter
- `hasAudio`: getter
- `speed`: getter/setter
- `quality`: getter/setter
- `loop`: getter/setter
- `source`: getter/setter
- `poster`: getter/setter
- `autoplay`: getter/setter
- `currentTrack`: getter/setter
- `language`: getter/setter
- `fullscreenActive`: getter
- `fullscreenEnabled`: getter
- `pip`: getter/setter

<a id="readme-browsers-support"></a>

## Browsers support

| <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" /></br>Firefox | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" /></br>Chrome | <img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" /></br>Safari |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11+                                                                                                                                                              | last 2 versions                                                                                                                                                   | last 2 versions                                                                                                                                                | last 2 versions                                                                                                                                                |

> As browsers are automatically updated, we will keep as reference the last two versions of each but this component can work on older ones as well.

> The webcomponent API (custom elements, shadowDOM, etc...) is not supported in some older browsers like IE10, etc... In order to make them work, you will need to integrate the [corresponding polyfill](https://www.webcomponents.org/polyfills).

<a id="readme-code-linting"></a>

## Code linting

This package uses some code linting rules. Here's the list:

1. [StandardJS](https://standardjs.com/) for javascript files
2. [Stylelint](https://github.com/stylelint/stylelint) with [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) for `scss` files

> Your commits will not been accepted if the code style is not respected!

<a id="readme-contribute"></a>

## Contribute

This is an open source project and will ever be! You are more that welcomed to contribute to his development and make it more awesome every day.
To do so, you have several possibilities:

1. [Share the love ❤️](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-share-the-love)
2. [Declare issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-declare-issues)
3. [Fix issues](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-fix-issues)
4. [Add features](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-add-features)
5. [Build web component](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md#contribute-build-web-component)

<a id="readme-who-are-coffeekraken"></a>

## Who are Coffeekraken

We try to be **some cool guys** that build **some cool tools** to make our (and yours hopefully) **every day life better**.

#### [More on who we are](https://github.com/Coffeekraken/coffeekraken/blob/master/who-are-we.md)

<a id="readme-license"></a>

## License

The code is available under the [MIT license](LICENSE.txt). This mean that you can use, modify, or do whatever you want with it. This mean also that it is shipped to you for free, so don't be a hater and if you find some issues, etc... feel free to [contribute](https://github.com/Coffeekraken/coffeekraken/blob/master/contribute.md) instead of sharing your frustrations on social networks like an asshole...
