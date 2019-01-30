module.exports = {
  // server port
  port: 3000,

  // title
  title: "s-{component-name}-component",

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
        <h1 class="h3 m-b-small">
          Coffeekraken s-{component-name}-component
        </h1>
        <p class="p m-b-bigger">
          {component-description}
        </p>
        <!-- examples here... -->
      `
    },
    css: {
      language: "scss",
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        // component css here...
      `
    },
    js: {
      language: "js",
      data: `
        import Component from './dist/index'
      `
    }
  }
}
