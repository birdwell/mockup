// Author: Nathan Van Gheem
// Contact: nathan@vangheem.us
// Version: 1.0
//
// Description:
//
// License:
//
// Copyright (C) 2010 Plone Foundation
//
// This program is free software; you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation; either version 2 of the License.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
// more details.
//
// You should have received a copy of the GNU General Public License along with
// this program; if not, write to the Free Software Foundation, Inc., 51
// Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
//


define([
  'jquery',
  'underscore',
  'backbone',
  'js/ui/views/popover',
  'mockup-patterns-upload'
], function($, _, Backbone, PopoverView, Upload) {
  'use strict';

  var UploadView = PopoverView.extend({
    className: 'popover upload',
    title: _.template('Upload file'),
    content: _.template(
      '<input type="text" name="upload" style="display:none" />' +
      '<div class="uploadify-me"></div>'),

    initialize: function(options) {
      var self = this;
      self.app = options.app;
      PopoverView.prototype.initialize.apply(self, [options]);
    },

    render: function() {
      var self = this;
      PopoverView.prototype.render.call(this);
      self.upload = new Upload(self.$('.uploadify-me').addClass('pat-upload'), {
        url: self.app.options.uploadUrl,
        success: function() {
        }
      });
      return this;
    },

    toggle: function(button, e) {
      /* we need to be able to change the current default upload directory */
      PopoverView.prototype.toggle.apply(this, [button, e]);
      var self = this;
      if (!this.opened) {
        return;
      }
    }

  });

  return UploadView;
});
