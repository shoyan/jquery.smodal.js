/*
 * jQuery.sModal.js v0.0.1 - A simple jQuery modal (http://github.com/shoyan/jquery.sModal.js)
 * Copyright (c) 2013 Shohei Yamasaki
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
;(function($){
  $.sModal = function(options) {

    var defaults = {
      overlay: 0.5,
      overlayClick: true
    }

    o =  $.extend(defaults, options);

    $("body").append("<div id='smodal_overlay'></div>");

    if (o.overlayClick) {
      $("#smodal_overlay").click(function() { 
        deactivate();
      });
    }

    return this;
  };

  function deactivate() {
    $("#smodal_overlay").fadeOut(200);
    $(".current-modal").css({ 'display' : 'none' });
  }

  $.sModal.show = function(modal_id) {

    var modal_width = $(modal_id).outerWidth();
    var modal_height = $("body").outerHeight() - $(modal_id).outerHeight();

    $('#smodal_overlay').fadeTo(200, o.overlay);

    $(modal_id).css({
      'display' : 'block',
      'position' : 'fixed',
      'opacity' : 0,
      'z-index': 11000,
      'left' : 50 + '%',
      'margin-left' : -(modal_width/2) + "px",
      'top' : (modal_height/2) + "px"
    }).addClass('current-modal');

    $(modal_id).fadeTo(200,1);
  };

  $.sModal.close = function() {
    deactivate();
  };
})(jQuery);
