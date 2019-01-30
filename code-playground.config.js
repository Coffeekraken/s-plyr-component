module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-plyr-component",

  // layout
  layout: "right",

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: "html",
      data: `
        <s-plyr src="/demo/data/SampleVideo_1280x720_10mb.mp4" color="primary" muted autoplay controls="['play-large','play','progress','current-time','volume','airplay','fullscreen']"></s-plyr>
        <s-plyr src="https://www.youtube.com/watch?v=dLkWB-Iw3-s"></s-plyr>
        <s-plyr src="https://player.vimeo.com/video/127200914" color="secondary" muted></s-plyr>
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-plyr-classes();
      `
    },
    js: {
      language: "js",
      data: `
        import SPlyrComponent from './dist/index'
      `
    }
  }
}
