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
  'js/ui/views/popover'
], function($, _, Backbone, PopoverView, utils) {
  'use strict';

  var AddNewView = PopoverView.extend({
    className: 'popover addnew',
    title: _.template('Add new file'),
    content: _.template(
      '<div class="form-group">' +
        '<label for="filename-field">Filename</label>' +
        '<input type="text" class="form-control" ' +
                'id="filename-field" placeholder="Enter filename">' +
      '</div>' +
      '<button class="btn btn-block btn-primary">Add</button>'
    ),
    events: {
      'click button': 'addButtonClicked'
    },
    initialize: function(options) {
      this.app = options.app;
      PopoverView.prototype.initialize.apply(this, [options]);
    },
    addButtonClicked: function(e) {
      var self = this;
      var $input = self.$('input');
      var filename = $input.val();
      if (filename){
        self.app.doAction('addFile', {
          type: 'POST',
          data: {
            filename: filename,
          },
          success: function(data) {
            self.hide();
            self.app.$tree.tree('reload');
          }
        });
        // XXX show loading
      } else {
        self.$('.form-group').addClass('has-error');
      }
    }
  });

  return AddNewView;
});
