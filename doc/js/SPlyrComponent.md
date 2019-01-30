# Attributes

Here's the list of available attribute(s).

## src

Specify the video source. Can be a local video file, a youtube or a vimeo url

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**

## loadCss

Specify if want to load the css of plyr from a cdn or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## poster

Specify the poster image to use. This is usable only with local video. Youtube and vimeo will provide their own poster picture

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **null**

## enabled

Completely disable Plyr. This would allow you to do a User Agent check or similar to programmatically enable or disable Plyr for a certain UA. Example below.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## debug

Display debugging information in the console

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## controls

If a function is passed, it is assumed your method will return either an element or HTML string for the controls. Three arguments will be passed to your function; id (the unique id for the player), seektime (the seektime step in seconds), and title (the media title)

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) , [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**

Default : **['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']**

## settings

If you're using the default controls are used then you can specify which settings to show in the menu

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**

Default : **['captions', 'quality', 'speed', 'loop']**

## i18n

Used for internationalization (i18n) of the text within the UI.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**

## loadSprite

Load the SVG sprite specified as the iconUrl option (if a URL). If false, it is assumed you are handling sprite loading yourself.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## iconUrl

Specify a URL or path to the SVG sprite.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **https://cdn.plyr.io/3.4.8/plyr.svg**

## iconPrefix

Specify the id prefix for the icons used in the default controls (e.g. "plyr-play" would be "plyr"). This is to prevent clashes if you're using your own SVG sprite but with the default controls. Most people can ignore this option.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **plyr**

## blankVideo

Specify a URL or path to a blank video file used to properly cancel network requests.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **https://cdn.plyr.io/static/blank.mp4**

## autoplay

Autoplay the media on load. This is generally advised against on UX grounds. It is also disabled by default in some browsers. If the autoplay attribute is present on a <video> or <audio> element, this will be automatically set to true.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## autopause

Only allow one player playing at once.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## seekTime

The time, in seconds, to seek when a user hits fast forward or rewind.

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **10**

## volume

A number, between 0 and 1, representing the initial volume of the player.

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **1**

## muted

Whether to start playback muted. If the muted attribute is present on a <video> or <audio> element, this will be automatically set to true.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## clickToPlay

Click (or tap) of the video container will toggle play/pause.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## disableContextMenu

Disable right click menu on video to help as very primitive obfuscation to prevent downloads of content.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## hideControls

Hide video controls automatically after 2s of no mouse or focus movement, on control element blur (tab out), on playback start or entering fullscreen. As soon as the mouse is moved, a control element is focused or playback is paused, the controls reappear instantly.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## resetOnEnd

Reset the playback to the start once playback is complete.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## keyboard

Enable keyboard shortcuts for focused players only or globally

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ focused: true, global: false }**

## tooltips

controls: Display control labels as tooltips on :hover & :focus (by default, the labels are screen reader only). seek: Display a seek tooltip to indicate on click where the media would seek to.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ controls: false, seek: true }**

## duration

Specify a custom duration for media.

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **null**

## displayDuration

Displays the duration of the media on the "metadataloaded" event (on startup) in the current time display. This will only work if the preload attribute is not set to none (or is not set at all) and you choose not to display the duration (see controls option).

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## invertTime

Display the current time as a countdown rather than an incremental counter.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## toggleInvert

Allow users to click to toggle the above.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **true**

## listeners

Allows binding of event listeners to the controls before the default handlers. See the defaults.js for available listeners. If your handler prevents default on the event (event.preventDefault()), the default handler will not fire.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**

## captions

active: Toggles if captions should be active by default. language: Sets the default language to load (if available). 'auto' uses the browser language. update: Listen to changes to tracks and update menu. This is needed for some streaming libraries, but can result in unselectable language options).

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ active: false, language: 'auto', update: false }**

## fullscreen

enabled: Toggles whether fullscreen should be enabled. fallback: Allow fallback to a full-window solution. iosNative: whether to use native iOS fullscreen when entering fullscreen (no custom controls)

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ enabled: true, fallback: true, iosNative: false }**

## ratio

The aspect ratio you want to use for embedded players.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **16:9**

## storage

enabled: Allow use of local storage to store user settings. key: The key name to use.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ enabled: false, key: 'plyr' }**

## speed

selected: The default speed for playback. options: Options to display in the menu. Most browsers will refuse to play slower than 0.5.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }**

## quality

Currently only supported by YouTube. default is the default quality level, determined by YouTube. options are the options to display.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ default: 'default', options: ['hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny', 'default'] }**

## loop

active: Whether to loop the current video. If the loop attribute is present on a <video> or <audio> element, this will be automatically set to true.

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**

Default : **false**

## ads

enabled: Whether to enable vi.ai ads. publisherId: Your unique vi.ai publisher ID.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{ enabled: false, publisherId: '' }**

## urls

If you wish to override any API URLs then you can do so here. You can also set a custom download URL for the download button.

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**

# Methods

## play

Play

## pause

Pause

## togglePlay

Toggle playback, if no parameters are passed, it will toggle based on current status.

## stop

Stop playback and reset to start.

## restart

Restart playback.

## rewind

Rewind playback by the specified seek time. If no parameter is passed, the default seek time will be used.

## forward

Fast forward by the specified seek time. If no parameter is passed, the default seek time will be used.

## increaseVolume

Increase volume by the specified step. If no parameter is passed, the default step will be used.

## decreaseVolume

Decrease volume by the specified step. If no parameter is passed, the default step will be used.

## toggleCaptions

Toggle captions display. If no parameter is passed, it will toggle based on current status.

## enterFullscreen

Enter fullscreen. If fullscreen is not supported, a fallback "full window/viewport" is used instead

## exitFullscreen

Exit fullscreen

## toggleFullscreen

Toggle fullscreen.

## airplay

Trigger the airplay dialog on supported devices.

## toggleControls

Toggle the controls (video only). Takes optional truthy value to force it on/off.

## on

Add an event listener for the specified event.

## once

Add an event listener for the specified event once.

## off

Remove an event listener for the specified event.

## support

Check support for a mime type.

## destroy

Destroy the instance and garbage collect any elements.

## isHTML5

Returns a boolean indicating if the current player is HTML5.

## isEmbed

Returns a boolean indicating if the current player is an embedded player.

## playing

Returns a boolean indicating if the current player is playing

## paused

Returns a boolean indicating if the current player is paused.

## stopped

Returns a boolean indicating if the current player is stopped.

## ended

Returns a boolean indicating if the current player has finished playback.

## buffered

Returns a float between 0 and 1 indicating how much of the media is buffered

## currentTime

Gets or sets the currentTime for the player. The setter accepts a float in seconds.

## seeking

Returns a boolean indicating if the current player is seeking.

## duration

Returns the duration for the current media.

## volume

Gets or sets the volume for the player. The setter accepts a float between 0 and 1.

## muted

Gets or sets the muted state of the player. The setter accepts a boolean.

## hasAudio

Returns a boolean indicating if the current media has an audio track.

## speed

Gets or sets the speed for the player. The setter accepts a value in the options specified in your config. Generally the minimum should be 0.5.

## quality

Gets or sets the quality for the player. The setter accepts a value from the options specified in your config.

## loop

Gets or sets the current loop state of the player. The setter accepts a boolean.

## source

Gets or sets the current source for the player. The setter accepts an object. See source setter below for examples.

## poster

Gets or sets the current poster image for the player. The setter accepts a string; the URL for the updated poster image.

## autoplay

Gets or sets the autoplay state of the player. The setter accepts a boolean.

## currentTrack

Gets or sets the caption track by index. -1 means the track is missing or captions is not active

## language

Gets or sets the preferred captions language for the player. The setter accepts an ISO two-letter language code. Support for the languages is dependent on the captions you include. If your captions don't have any language data, or if you have multiple tracks with the same language, you may want to use currentTrack instead.

## fullscreenActive

Returns a boolean indicating if the current player is in fullscreen mode.

## fullscreenEnabled

Returns a boolean indicating if the current player has fullscreen enabled.

## pip

Gets or sets the picture-in-picture state of the player. The setter accepts a boolean. This currently only supported on Safari 10+ (on MacOS Sierra+ and iOS 10+) and Chrome 70+.
