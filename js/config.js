  /* globals module:true */

(function() {
  'use strict';

  var requirejsOptions = {
    baseUrl: './',
    optimize: 'none',
    paths: {
      'JSXTransformer': 'bower_components/react/JSXTransformer',
      'ace': 'bower_components/ace-builds/src/ace',
      'ace-theme-monokai': 'bower_components/ace-builds/src/theme-monokai',
      'ace-mode-text': 'bower_components/ace-builds/src/mode-text',
      'backbone': 'bower_components/backbone/backbone',
      'backbone.paginator': 'bower_components/backbone.paginator/lib/backbone.paginator',
      'bootstrap-alert': 'bower_components/bootstrap/js/alert',
      'bootstrap-collapse': 'bower_components/bootstrap/js/collapse',
      'bootstrap-dropdown': 'bower_components/bootstrap/js/dropdown',
      'bootstrap-tooltip': 'bower_components/bootstrap/js/tooltip',
      'bootstrap-transition': 'bower_components/bootstrap/js/transition',
      'docs-getting-started': 'GETTING_STARTED.md',
      'docs-learn': 'LEARN.md',
      'docs-contribute': 'CONTRIBUTE.md',
      'domready': 'bower_components/domready/ready',
      'dropzone': 'bower_components/dropzone/downloads/dropzone-amd-module',
      'expect': 'bower_components/expect/index',
      'jqtree': 'bower_components/jqtree/tree.jquery',
      'jquery': 'bower_components/jquery/jquery',
      'jquery.cookie': 'bower_components/jquery.cookie/jquery.cookie',
      'jquery.event.drag': 'lib/jquery.event.drag',
      'jquery.event.drop': 'lib/jquery.event.drop',
      'jquery.form': 'bower_components/jquery-form/jquery.form',
      'marked': 'bower_components/marked/lib/marked',
      'mockup-bundles-docs': 'js/bundles/docs',
      'mockup-bundles-plone': 'js/bundles/plone',
      'mockup-bundles-structure': 'js/bundles/structure',
      'mockup-bundles-tiles': 'js/bundles/widgets',
      'mockup-bundles-widgets': 'js/bundles/widgets',
      'mockup-bundles-filemanager': 'js/bundles/filemanager',
      'mockup-bundles-resourceregistry': 'js/bundles/resourceregistry',
      'mockup-docs': 'bower_components/mockup-core/js/docs/app',
      'mockup-docs-navigation': 'bower_components/mockup-core/js/docs/navigation',
      'mockup-docs-page': 'bower_components/mockup-core/js/docs/page',
      'mockup-docs-pattern': 'bower_components/mockup-core/js/docs/pattern',
      'mockup-docs-view': 'bower_components/mockup-core/js/docs/view',
      'mockup-fakeserver': 'tests/fakeserver',
      'mockup-patterns-accessibility': 'patterns/accessibility/pattern',
      'mockup-patterns-autotoc': 'patterns/autotoc/pattern',
      'mockup-patterns-backdrop': 'patterns/backdrop/pattern',
      'mockup-patterns-base': 'bower_components/mockup-core/js/pattern',
      'mockup-patterns-sortable': 'patterns/sortable/pattern',
      'mockup-patterns-formautofocus': 'patterns/formautofocus/pattern',
      'mockup-patterns-formunloadalert': 'patterns/formunloadalert/pattern',
      'mockup-patterns-modal': 'patterns/modal/pattern',
      'mockup-patterns-moment': 'patterns/moment/pattern',
      'mockup-patterns-pickadate': 'patterns/pickadate/pattern',
      'mockup-patterns-preventdoublesubmit': 'patterns/preventdoublesubmit/pattern',
      'mockup-patterns-querystring': 'patterns/querystring/pattern',
      'mockup-patterns-relateditems': 'patterns/relateditems/pattern',
      'mockup-patterns-select2': 'patterns/select2/pattern',
      'mockup-patterns-structure-url': 'patterns/structure',
      'mockup-patterns-structure': 'patterns/structure/pattern',
      'mockup-patterns-texteditor': 'patterns/texteditor/pattern',
      'mockup-patterns-filemanager-url': 'patterns/filemanager',
      'mockup-patterns-filemanager': 'patterns/filemanager/pattern',
      'mockup-patterns-thememapper-url': 'patterns/thememapper',
      'mockup-patterns-thememapper': 'patterns/thememapper/pattern',
      'mockup-patterns-tablesorter': 'patterns/tablesorter/pattern',
      'mockup-patterns-tinymce-url': 'patterns/tinymce',
      'mockup-patterns-tinymce': 'patterns/tinymce/pattern',
      'mockup-patterns-toggle': 'patterns/toggle/pattern',
      'mockup-patterns-tooltip': 'patterns/tooltip/pattern',
      'mockup-patterns-tree': 'patterns/tree/pattern',
      'mockup-patterns-upload-url': 'patterns/upload',
      'mockup-patterns-upload': 'patterns/upload/pattern',
      'mockup-patterns-resourceregistry': 'patterns/resourceregistry/pattern',
      'mockup-registry': 'bower_components/mockup-core/js/registry',
      'mockup-router': 'js/router',
      'mockup-utils': 'js/utils',
      'mockup-i18n': 'js/i18n',
      'mockup-ui-url': 'js/ui',
      'moment': 'bower_components/moment/moment',
      'picker': 'bower_components/pickadate/lib/picker',
      'picker.date': 'bower_components/pickadate/lib/picker.date',
      'picker.time': 'bower_components/pickadate/lib/picker.time',
      'react': 'bower_components/react/react',
      'select2': 'bower_components/select2/select2',
      'sinon': 'bower_components/sinonjs/sinon',
      'text': 'bower_components/requirejs-text/text',
      'tinymce-advlist': 'bower_components/tinymce/plugins/advlist/plugin',
      'tinymce-anchor': 'bower_components/tinymce/plugins/anchor/plugin',
      'tinymce-autolink': 'bower_components/tinymce/plugins/autolink/plugin',
      'tinymce-autoresize': 'bower_components/tinymce/plugins/autoresize/plugin',
      'tinymce-autosave': 'bower_components/tinymce/plugins/autosave/plugin',
      'tinymce-bbcode': 'bower_components/tinymce/plugins/bbcode/plugin',
      'tinymce-charmap': 'bower_components/tinymce/plugins/charmap/plugin',
      'tinymce-code': 'bower_components/tinymce/plugins/code/plugin',
      'tinymce-colorpicker': 'bower_components/tinymce/plugins/colorpicker/plugin',
      'tinymce-contextmenu': 'bower_components/tinymce/plugins/contextmenu/plugin',
      'tinymce-directionality': 'bower_components/tinymce/plugins/directionality/plugin',
      'tinymce-emoticons': 'bower_components/tinymce/plugins/emoticons/plugin',
      'tinymce-fullpage': 'bower_components/tinymce/plugins/fullpage/plugin',
      'tinymce-fullscreen': 'bower_components/tinymce/plugins/fullscreen/plugin',
      'tinymce-hr': 'bower_components/tinymce/plugins/hr/plugin',
      'tinymce-image': 'bower_components/tinymce/plugins/image/plugin',
      'tinymce-importcss': 'bower_components/tinymce/plugins/importcss/plugin',
      'tinymce-insertdatetime': 'bower_components/tinymce/plugins/insertdatetime/plugin',
      'tinymce-layer': 'bower_components/tinymce/plugins/layer/plugin',
      'tinymce-legacyoutput': 'bower_components/tinymce/plugins/legacyoutput/plugin',
      'tinymce-link': 'bower_components/tinymce/plugins/link/plugin',
      'tinymce-lists': 'bower_components/tinymce/plugins/lists/plugin',
      'tinymce-media': 'bower_components/tinymce/plugins/media/plugin',
      'tinymce-nonbreaking': 'bower_components/tinymce/plugins/nonbreaking/plugin',
      'tinymce-noneditable': 'bower_components/tinymce/plugins/noneditable/plugin',
      'tinymce-pagebreak': 'bower_components/tinymce/plugins/pagebreak/plugin',
      'tinymce-paste': 'bower_components/tinymce/plugins/paste/plugin',
      'tinymce-preview': 'bower_components/tinymce/plugins/preview/plugin',
      'tinymce-print': 'bower_components/tinymce/plugins/print/plugin',
      'tinymce-save': 'bower_components/tinymce/plugins/save/plugin',
      'tinymce-searchreplace': 'bower_components/tinymce/plugins/searchreplace/plugin',
      'tinymce-spellchecker': 'bower_components/tinymce/plugins/spellchecker/plugin',
      'tinymce-tabfocus': 'bower_components/tinymce/plugins/tabfocus/plugin',
      'tinymce-table': 'bower_components/tinymce/plugins/table/plugin',
      'tinymce-template': 'bower_components/tinymce/plugins/template/plugin',
      'tinymce-textcolor': 'bower_components/tinymce/plugins/textcolor/plugin',
      'tinymce-textpattern': 'bower_components/tinymce/plugins/textpattern/plugin',
      'tinymce-visualblocks': 'bower_components/tinymce/plugins/visualblocks/plugin',
      'tinymce-visualchars': 'bower_components/tinymce/plugins/visualchars/plugin',
      'tinymce-wordcount': 'bower_components/tinymce/plugins/wordcount/plugin',
      'tinymce-modern-theme': 'bower_components/tinymce/themes/modern/theme.min',
      'tinymce': 'bower_components/tinymce/tinymce',
      'underscore': 'bower_components/lodash/dist/lodash.underscore'
    },
    shim: {
      'JSXTransformer': { exports: 'window.JSXTransformer' },
      'backbone': { exports: 'window.Backbone', deps: ['underscore', 'jquery'] },
      'backbone.paginator': { exports: 'window.Backbone.Paginator', deps: ['backbone'] },
      'bootstrap-alert': { deps: ['jquery'] },
      'bootstrap-collapse': {exports: 'window.jQuery.fn.collapse.Constructor', deps: ['jquery']},
      'bootstrap-dropdown': { deps: ['jquery'] },
      'bootstrap-tooltip': { deps: ['jquery'] },
      'bootstrap-transition': {exports: 'window.jQuery.support.transition', deps: ['jquery']},
      'expect': {exports: 'window.expect'},
      'jqtree': { deps: ['jquery'] },
      'jquery.cookie': { deps: ['jquery'] },
      'jquery.event.drag': { deps: ['jquery'] },
      'jquery.event.drop': {
        deps: ['jquery'],
        exports: '$.drop'
      },
      'mockup-iframe_init': { deps: ['domready'] },
      'picker.date': { deps: [ 'picker' ] },
      'picker.time': { deps: [ 'picker' ] },
      'sinon': {exports: 'window.sinon'},
      'tinymce': { exports: 'window.tinyMCE', init: function () { this.tinyMCE.DOM.events.domLoaded = true; return this.tinyMCE; }},
      'underscore': { exports: 'window._' }
    },
    wrapShim: true
  };

  if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    module.exports = requirejsOptions;
  }
  if (typeof requirejs !== 'undefined' && requirejs.config) {
    requirejs.config(requirejsOptions);
  }

}());
