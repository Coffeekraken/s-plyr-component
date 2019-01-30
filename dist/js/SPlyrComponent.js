"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.default = void 0

var _SWebComponent2 = _interopRequireDefault(
  require("coffeekraken-sugar/js/core/SWebComponent")
)

var _plyr = _interopRequireDefault(require("plyr/dist/plyr.polyfilled"))

var _appendStylesheetLink = _interopRequireDefault(
  require("coffeekraken-sugar/js/dom/appendStylesheetLink")
)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj
    }
  }
  return _typeof(obj)
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {}
    var ownKeys = Object.keys(source)
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable
        })
      )
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key])
    })
  }
  return target
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    })
  } else {
    obj[key] = value
  }
  return obj
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ("value" in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call
  }
  return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return self
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property)
      if (!base) return
      var desc = Object.getOwnPropertyDescriptor(base, property)
      if (desc.get) {
        return desc.get.call(receiver)
      }
      return desc.value
    }
  }
  return _get(target, property, receiver || target)
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object)
    if (object === null) break
  }
  return object
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function")
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }
  return _setPrototypeOf(o, p)
}

var Component =
  /*#__PURE__*/
  (function(_SWebComponent) {
    _inherits(Component, _SWebComponent)

    function Component() {
      _classCallCheck(this, Component)

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Component).apply(this, arguments)
      )
    }

    _createClass(
      Component,
      [
        {
          key: "componentWillMount",

          /**
           * Component will mount
           * @definition    SWebComponent.componentWillMount
           * @protected
           */
          value: function componentWillMount() {
            _get(
              _getPrototypeOf(Component.prototype),
              "componentWillMount",
              this
            ).call(this)
          }
          /**
           * Mount component
           * @definition    SWebComponent.componentMount
           * @protected
           */
        },
        {
          key: "componentMount",
          value: function componentMount() {
            var _this = this

            _get(
              _getPrototypeOf(Component.prototype),
              "componentMount",
              this
            ).call(this) // generate the initial html on which the plyr instance will
            // plug itself

            var $holder = this._getInitialHtml()

            this.appendChild($holder) // append the stylesheet

            if (this.props.loadCss) {
              ;(0, _appendStylesheetLink.default)(
                "https://cdn.plyr.io/3.4.8/plyr.css"
              )
            } // create a plyr

            this._plyr = new _plyr.default(
              $holder,
              _objectSpread({}, this.props, {
                loop: {
                  active: this.props.loop
                } // remap the loop property as an object
              })
            )

            if (this.props.muted) {
              this.volume = 0
            } // listen for some events

            this._plyr.on("playing", function() {
              _this.setAttribute("playing", true)

              _this.removeAttribute("paused")

              _this.removeAttribute("ended")
            })

            this._plyr.on("pause", function() {
              _this.removeAttribute("playing")

              _this.setAttribute("paused", true)

              _this.removeAttribute("ended")
            })

            this._plyr.on("volumechange", function() {
              if (_this.volume === 0) {
                _this.setAttribute("muted", true)
              } else {
                _this.removeAttribute("muted")
              }
            })

            this._plyr.on("seeking", function() {
              _this.setAttribute("seeking", true)

              _this.removeAttribute("ended")
            })

            this._plyr.on("seeked", function() {
              _this.removeAttribute("seeking")
            })

            this._plyr.on("ended", function() {
              _this.setAttribute("ended", true)
            })
          }
          /**
           * Component unmount
           * @definition    SWebComponent.componentUnmount
           * @protected
           */
        },
        {
          key: "componentUnmount",
          value: function componentUnmount() {
            _get(
              _getPrototypeOf(Component.prototype),
              "componentUnmount",
              this
            ).call(this) // destroy the plyr instance

            this.destroy()
          }
          /**
           * Component will receive prop
           * @definition    SWebComponent.componentWillReceiveProp
           * @protected
           */
        },
        {
          key: "componentWillReceiveProp",
          value: function componentWillReceiveProp(name, newVal, oldVal) {
            _get(
              _getPrototypeOf(Component.prototype),
              "componentWillReceiveProp",
              this
            ).call(this, name, newVal, oldVal)
          }
          /**
           * Get initial html
           * @return    {HTMLElement}    The HTMLElement corresponding to the video
           */
        },
        {
          key: "_getInitialHtml",
          value: function _getInitialHtml() {
            if (this.props.src.match(/youtube|youtu\.be/)) {
              var $youtube = document.createElement("div")
              $youtube.setAttribute("data-plyr-provider", "youtube")
              $youtube.setAttribute("data-plyr-embed-id", this.props.src)
              return $youtube
            } else if (this.props.src.match(/vimeo.com/)) {
              var $vimeo = document.createElement("div")
              $vimeo.setAttribute("data-plyr-provider", "vimeo")
              $vimeo.setAttribute("data-plyr-embed-id", this.props.src)
              return $vimeo
            } else {
              var $video = document.createElement("video")
              $video.src = this.props.src

              if (this.props.poster) {
                $video.setAttribute("poster", this.props.poster)
              }

              $video.setAttribute("playinline", true)
              $video.setAttribute("controls", true)
              return $video
            }
          }
          /**
           * Play
           */
        },
        {
          key: "play",
          value: function play() {
            return this._plyr.play()
          }
          /**
           * Pause
           */
        },
        {
          key: "pause",
          value: function pause() {
            return this._plyr.pause()
          }
          /**
           * Toggle playback, if no parameters are passed, it will toggle based on current status.
           */
        },
        {
          key: "togglePlay",
          value: function togglePlay(toggle) {
            return this._plyr.togglePlay(toggle)
          }
          /**
           * Stop playback and reset to start.
           */
        },
        {
          key: "stop",
          value: function stop() {
            return this._plyr.stop()
          }
          /**
           * Restart playback.
           */
        },
        {
          key: "restart",
          value: function restart() {
            return this._plyr.restart()
          }
          /**
           * Rewind playback by the specified seek time. If no parameter is passed, the default seek time will be used.
           * @param     {Number}    seekTime
           */
        },
        {
          key: "rewind",
          value: function rewind(seekTime) {
            return this._plyr.rewind(seekTime)
          }
          /**
           * Fast forward by the specified seek time. If no parameter is passed, the default seek time will be used.
           * @param    {Number}    seekTime
           */
        },
        {
          key: "forward",
          value: function forward(seekTime) {
            return this._plyr.forward(seekTime)
          }
          /**
           * Increase volume by the specified step. If no parameter is passed, the default step will be used.
           * @param     {Number}    step
           */
        },
        {
          key: "increaseVolume",
          value: function increaseVolume(step) {
            return this._plyr.increaseVolume(step)
          }
          /**
           * Decrease volume by the specified step. If no parameter is passed, the default step will be used.
           * @param   {Number}    step
           */
        },
        {
          key: "decreaseVolume",
          value: function decreaseVolume(step) {
            return this._plyr.decreaseVolume(step)
          }
          /**
           * Toggle captions display. If no parameter is passed, it will toggle based on current status.
           * @param    {Boolean}    toggle
           */
        },
        {
          key: "toggleCaptions",
          value: function toggleCaptions(toggle) {
            return this._plyr.toggleCaptions(toggle)
          }
          /**
           * Enter fullscreen. If fullscreen is not supported, a fallback "full window/viewport" is used instead
           */
        },
        {
          key: "enterFullscreen",
          value: function enterFullscreen() {
            return this._plyr.fullscreen.enter()
          }
          /**
           * Exit fullscreen
           */
        },
        {
          key: "exitFullscreen",
          value: function exitFullscreen() {
            return this._plyr.fullscreen.exit()
          }
          /**
           * Toggle fullscreen.
           */
        },
        {
          key: "toggleFullscreen",
          value: function toggleFullscreen() {
            return this._plyr.fullscreen.toggle()
          }
          /**
           * Trigger the airplay dialog on supported devices.
           */
        },
        {
          key: "airplay",
          value: function airplay() {
            return this._plyr.airplay()
          }
          /**
           * Toggle the controls (video only). Takes optional truthy value to force it on/off.
           * @param    {Boolean}    toggle
           */
        },
        {
          key: "toggleControls",
          value: function toggleControls(toggle) {
            return this._plyr.toggleControls(toggle)
          }
          /**
           * Add an event listener for the specified event.
           * @param    {String}    event
           * @param    {Function}    callback
           */
        },
        {
          key: "on",
          value: function on(event, callback) {
            return this._plyr.on(event, callback)
          }
          /**
           * Add an event listener for the specified event once.
           * @param    {String}    event
           * @param    {Function}    callback
           */
        },
        {
          key: "once",
          value: function once(event, callback) {
            return this._plyr.once(event, callback)
          }
          /**
           * Remove an event listener for the specified event.
           * @param    {String}    event
           * @param    {Function}    callback
           */
        },
        {
          key: "off",
          value: function off(event, callback) {
            return this._plyr.off(event, callback)
          }
          /**
           * Check support for a mime type.
           * @param    {String}    type
           */
        },
        {
          key: "support",
          value: function support(type) {
            return this._plyr.support(type)
          }
          /**
           * Destroy the instance and garbage collect any elements.
           */
        },
        {
          key: "destroy",
          value: function destroy() {
            return this._plyr.destroy()
          }
          /**
           * Returns a boolean indicating if the current player is HTML5.
           */
        },
        {
          key: "isHTML5",
          get: function get() {
            return this._plyr.isHTML5
          }
          /**
           * Returns a boolean indicating if the current player is an embedded player.
           */
        },
        {
          key: "isEmbed",
          get: function get() {
            return this._plyr.isEmbed
          }
          /**
           * Returns a boolean indicating if the current player is playing
           */
        },
        {
          key: "playing",
          get: function get() {
            return this._plyr.playing
          }
          /**
           * Returns a boolean indicating if the current player is paused.
           */
        },
        {
          key: "paused",
          get: function get() {
            return this._plyr.paused
          }
          /**
           * Returns a boolean indicating if the current player is stopped.
           */
        },
        {
          key: "stopped",
          get: function get() {
            return this._plyr.stopped
          }
          /**
           * Returns a boolean indicating if the current player has finished playback.
           */
        },
        {
          key: "ended",
          get: function get() {
            return this._plyr.ended
          }
          /**
           * Returns a float between 0 and 1 indicating how much of the media is buffered
           */
        },
        {
          key: "buffered",
          get: function get() {
            return this._plyr.buffered
          }
          /**
           * Gets or sets the currentTime for the player. The setter accepts a float in seconds.
           */
        },
        {
          key: "currentTime",
          get: function get() {
            return this._plyr.currentTime
          },
          set: function set(value) {
            return (this._plyr.currentTime = value)
          }
          /**
           * Returns a boolean indicating if the current player is seeking.
           */
        },
        {
          key: "seeking",
          get: function get() {
            return this._plyr.seeking
          }
          /**
           * Returns the duration for the current media.
           */
        },
        {
          key: "duration",
          get: function get() {
            return this._plyr.duration
          }
          /**
           * Gets or sets the volume for the player. The setter accepts a float between 0 and 1.
           */
        },
        {
          key: "volume",
          get: function get() {
            return this._plyr.volume
          },
          set: function set(value) {
            return (this._plyr.volume = value)
          }
          /**
           * Gets or sets the muted state of the player. The setter accepts a boolean.
           */
        },
        {
          key: "muted",
          get: function get() {
            return this._plyr.muted
          },
          set: function set(value) {
            return (this._plyr.muted = value)
          }
          /**
           * Returns a boolean indicating if the current media has an audio track.
           */
        },
        {
          key: "hasAudio",
          get: function get() {
            return this._plyr.hasAudio
          }
          /**
           * Gets or sets the speed for the player. The setter accepts a value in the options specified in your config. Generally the minimum should be 0.5.
           */
        },
        {
          key: "speed",
          get: function get() {
            return this._plyr.speed
          },
          set: function set(value) {
            return (this._plyr.speed = value)
          }
          /**
           * Gets or sets the quality for the player. The setter accepts a value from the options specified in your config.
           */
        },
        {
          key: "quality",
          get: function get() {
            return this._plyr.quality
          },
          set: function set(value) {
            return (this._plyr.quality = value)
          }
          /**
           * Gets or sets the current loop state of the player. The setter accepts a boolean.
           */
        },
        {
          key: "loop",
          get: function get() {
            return this._plyr.loop
          },
          set: function set(value) {
            return (this._plyr.loop = value)
          }
          /**
           * Gets or sets the current source for the player. The setter accepts an object. See source setter below for examples.
           */
        },
        {
          key: "source",
          get: function get() {
            return this._plyr.source
          },
          set: function set(value) {
            return (this._plyr.source = value)
          }
          /**
           * Gets or sets the current poster image for the player. The setter accepts a string; the URL for the updated poster image.
           */
        },
        {
          key: "poster",
          get: function get() {
            return this._plyr.poster
          },
          set: function set(value) {
            return (this._plyr.poster = value)
          }
          /**
           * Gets or sets the autoplay state of the player. The setter accepts a boolean.
           */
        },
        {
          key: "autoplay",
          get: function get() {
            return this._plyr.autoplay
          },
          set: function set(value) {
            return (this._plyr.autoplay = value)
          }
          /**
           * Gets or sets the caption track by index. -1 means the track is missing or captions is not active
           */
        },
        {
          key: "currentTrack",
          get: function get() {
            return this._plyr.currentTrack
          },
          set: function set(value) {
            return (this._plyr.currentTrack = value)
          }
          /**
           * Gets or sets the preferred captions language for the player. The setter accepts an ISO two-letter language code. Support for the languages is dependent on the captions you include. If your captions don't have any language data, or if you have multiple tracks with the same language, you may want to use currentTrack instead.
           */
        },
        {
          key: "language",
          get: function get() {
            return this._plyr.language
          },
          set: function set(value) {
            return (this._plyr.language = value)
          }
          /**
           * Returns a boolean indicating if the current player is in fullscreen mode.
           */
        },
        {
          key: "fullscreenActive",
          get: function get() {
            return this._plyr.fullscreen.active
          }
          /**
           * Returns a boolean indicating if the current player has fullscreen enabled.
           */
        },
        {
          key: "fullscreenEnabled",
          get: function get() {
            return this._plyr.fullscreen.enabled
          }
          /**
           * Gets or sets the picture-in-picture state of the player. The setter accepts a boolean. This currently only supported on Safari 10+ (on MacOS Sierra+ and iOS 10+) and Chrome 70+.
           */
        },
        {
          key: "pip",
          get: function get() {
            return this._plyr.pip
          },
          set: function set(value) {
            return (this._plyr.pip = value)
          }
        }
      ],
      [
        {
          key: "defaultCss",

          /**
           * Css
           * @protected
           */
          value: function defaultCss(componentName, componentNameDash) {
            return "\n      ".concat(
              componentNameDash,
              " {\n        display : block;\n      }\n    "
            )
          }
        },
        {
          key: "defaultProps",

          /**
           * Default props
           * @definition    SWebComponent.defaultProps
           * @protected
           */
          get: function get() {
            return {
              /**
               * Specify the video source. Can be a local video file, a youtube or a vimeo url
               * @prop
               * @type    {String}
               */
              src: null,

              /**
               * Specify if want to load the css of plyr from a cdn or not
               * @prop
               * @type    {Boolean}
               */
              loadCss: false,

              /**
               * Specify the poster image to use. This is usable only with local video. Youtube and vimeo will provide their own poster picture
               * @prop
               * @type    {String}
               */
              poster: null,

              /**
               * Completely disable Plyr. This would allow you to do a User Agent check or similar to programmatically enable or disable Plyr for a certain UA. Example below.
               * @prop
               * @type    {Boolean}
               */
              enabled: true,

              /**
               * Display debugging information in the console
               * @prop
               * @type    {Boolean}
               */
              debug: false,

              /**
               * If a function is passed, it is assumed your method will return either an element or HTML string for the controls. Three arguments will be passed to your function; id (the unique id for the player), seektime (the seektime step in seconds), and title (the media title)
               * @prop
               * @type    {Array|Function|HTMLElement}
               */
              controls: [
                "play-large",
                "play",
                "progress",
                "current-time",
                "mute",
                "volume",
                "captions",
                "settings",
                "pip",
                "airplay",
                "fullscreen"
              ],

              /**
               * If you're using the default controls are used then you can specify which settings to show in the menu
               * @prop
               * @type    {Array}
               */
              settings: ["captions", "quality", "speed", "loop"],

              /**
               * Used for internationalization (i18n) of the text within the UI.
               * @prop
               * @type    {Object}
               */
              i18n: {},

              /**
               * Load the SVG sprite specified as the iconUrl option (if a URL). If false, it is assumed you are handling sprite loading yourself.
               * @prop
               * @type    {Boolean}
               */
              loadSprite: true,

              /**
               * Specify a URL or path to the SVG sprite.
               * @prop
               * @type    {String}
               */
              iconUrl: "https://cdn.plyr.io/3.4.8/plyr.svg",

              /**
               * Specify the id prefix for the icons used in the default controls (e.g. "plyr-play" would be "plyr"). This is to prevent clashes if you're using your own SVG sprite but with the default controls. Most people can ignore this option.
               * @prop
               * @type    {String}
               */
              iconPrefix: "plyr",

              /**
               * Specify a URL or path to a blank video file used to properly cancel network requests.
               * @prop
               * @type    {String}
               */
              blankVideo: "https://cdn.plyr.io/static/blank.mp4",

              /**
               * Autoplay the media on load. This is generally advised against on UX grounds. It is also disabled by default in some browsers. If the autoplay attribute is present on a <video> or <audio> element, this will be automatically set to true.
               * @prop
               * @type    {Boolean}
               */
              autoplay: false,

              /**
               * Only allow one player playing at once.
               * @prop
               * @type    {Boolean}
               */
              autopause: true,

              /**
               * The time, in seconds, to seek when a user hits fast forward or rewind.
               * @prop
               * @type    {Number}
               */
              seekTime: 10,

              /**
               * A number, between 0 and 1, representing the initial volume of the player.
               * @prop
               * @type    {Number}
               */
              volume: 1,

              /**
               * Whether to start playback muted. If the muted attribute is present on a <video> or <audio> element, this will be automatically set to true.
               * @prop
               * @type    {Boolean}
               */
              muted: false,

              /**
               * Click (or tap) of the video container will toggle play/pause.
               * @prop
               * @type    {Boolean}
               */
              clickToPlay: true,

              /**
               * Disable right click menu on video to help as very primitive obfuscation to prevent downloads of content.
               * @prop
               * @type    {Boolean}
               */
              disableContextMenu: true,

              /**
               * Hide video controls automatically after 2s of no mouse or focus movement, on control element blur (tab out), on playback start or entering fullscreen. As soon as the mouse is moved, a control element is focused or playback is paused, the controls reappear instantly.
               * @prop
               * @type    {Boolean}
               */
              hideControls: true,

              /**
               * Reset the playback to the start once playback is complete.
               * @prop
               * @type    {Boolean}
               */
              resetOnEnd: false,

              /**
               * Enable keyboard shortcuts for focused players only or globally
               * @prop
               * @type    {Object}
               */
              keyboard: {
                focused: true,
                global: false
              },

              /**
               * controls: Display control labels as tooltips on :hover & :focus (by default, the labels are screen reader only). seek: Display a seek tooltip to indicate on click where the media would seek to.
               * @prop
               * @type    {Object}
               */
              tooltips: {
                controls: false,
                seek: true
              },

              /**
               * Specify a custom duration for media.
               * @prop
               * @type    {Number}
               */
              duration: null,

              /**
               * Displays the duration of the media on the "metadataloaded" event (on startup) in the current time display. This will only work if the preload attribute is not set to none (or is not set at all) and you choose not to display the duration (see controls option).
               * @prop
               * @type    {Boolean}
               */
              displayDuration: true,

              /**
               * Display the current time as a countdown rather than an incremental counter.
               * @prop
               * @type     {Boolean}
               */
              invertTime: true,

              /**
               * Allow users to click to toggle the above.
               * @prop
               * @type    {Boolean}
               */
              toggleInvert: true,

              /**
               * Allows binding of event listeners to the controls before the default handlers. See the defaults.js for available listeners. If your handler prevents default on the event (event.preventDefault()), the default handler will not fire.
               * @prop
               * @type    {Object}
               */
              listeners: {},

              /**
               * active: Toggles if captions should be active by default. language: Sets the default language to load (if available). 'auto' uses the browser language. update: Listen to changes to tracks and update menu. This is needed for some streaming libraries, but can result in unselectable language options).
               * @prop
               * @type    {Object}
               */
              captions: {
                active: false,
                language: "auto",
                update: false
              },

              /**
               * enabled: Toggles whether fullscreen should be enabled. fallback: Allow fallback to a full-window solution. iosNative: whether to use native iOS fullscreen when entering fullscreen (no custom controls)
               * @prop
               * @type    {Object}
               */
              fullscreen: {
                enabled: true,
                fallback: true,
                iosNative: false
              },

              /**
               * The aspect ratio you want to use for embedded players.
               * @prop
               * @type    {String}
               */
              ratio: "16:9",

              /**
               * enabled: Allow use of local storage to store user settings. key: The key name to use.
               * @prop
               * @type    {Object}
               */
              storage: {
                enabled: false,
                key: "plyr"
              },

              /**
               * selected: The default speed for playback. options: Options to display in the menu. Most browsers will refuse to play slower than 0.5.
               * @prop
               * @type    {Object}
               */
              speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
              },

              /**
               * Currently only supported by YouTube. default is the default quality level, determined by YouTube. options are the options to display.
               * @prop
               * @type    {Object}
               */
              quality: {
                default: "default",
                options: [
                  "hd2160",
                  "hd1440",
                  "hd1080",
                  "hd720",
                  "large",
                  "medium",
                  "small",
                  "tiny",
                  "default"
                ]
              },

              /**
               * active: Whether to loop the current video. If the loop attribute is present on a <video> or <audio> element, this will be automatically set to true.
               * @prop
               * @type    {Boolean}
               */
              loop: false,

              /**
               * enabled: Whether to enable vi.ai ads. publisherId: Your unique vi.ai publisher ID.
               * @prop
               * @type    {Object}
               */
              ads: {
                enabled: false,
                publisherId: ""
              },

              /**
               * If you wish to override any API URLs then you can do so here. You can also set a custom download URL for the download button.
               * @prop
               * @type    Object
               */
              urls: {}
            }
          }
          /**
           * Physical props
           * @definition    SWebComponent.physicalProps
           * @protected
           */
        },
        {
          key: "physicalProps",
          get: function get() {
            return ["muted", "autoplay", "loop"]
          }
        },
        {
          key: "requiredProps",
          get: function get() {
            return ["src"]
          }
        }
      ]
    )

    return Component
  })(_SWebComponent2.default)

exports.default = Component
