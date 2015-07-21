        /* 
         * Lazy Line Painter - Path Object 
         * Generated using 'SVG to Lazy Line Converter'
         * 
         * http://lazylinepainter.info 
         * Copyright 2013, Cam O'Connell  
         *  
         */ 
        var pathObj = {
          "icons": {
            "strokepath": [
              {
                "path": "M 58.918 12.52 L 23.524 47.914",
                "duration": 600
              },
              {
                "path": "M 94.671 48.274 L 59.278 83.667",
                "duration": 600
              },
              {
                "path": "M 58.504 12.341 L 94.704 48.541",
                "duration": 600
              },
              {
                "path": "M 22.75 48.095 L 58.95 84.295",
                "duration": 600
              },
              {
                "path": "M57.5,83.848v264.577V83.848z",
                "duration": 600
              },
              {
                "path": "M 57 347.841 L 925 347.841",
                "duration": 600
              },

              {
                "path": "M 61.5 213.341 L 61.5 223.341",
                "duration": 600
              },
              {
                "path": "M 61.5 198.341 L 61.5 208.341",
                "duration": 600
              },
              {
                "path": "M 61.5 183.341 L 61.5 193.341",
                "duration": 600
              },
              {
                "path": "M 61.5 168.341 L 61.5 178.341",
                "duration": 600
              },
              {
                "path": "M 61.5 153.341 L 61.5 163.341",
                "duration": 600
              },
              {
                "path": "M 61.5 138.341 L 61.5 148.341",
                "duration": 600
              },
              {
                "path": "M 61.5 123.341 L 61.5 133.341",
                "duration": 600
              },
              {
                "path": "M 61.5 108.341 L 61.5 118.341",
                "duration": 600
              },
              {
                "path": "M 61.5 332.341 L 61.5 342.341",
                "duration": 600
              },
              {
                "path": "M 61.5 317.341 L 61.5 327.341",
                "duration": 600
              },
              {
                "path": "M 61.5 302.341 L 61.5 312.341",
                "duration": 600
              },
              {
                "path": "M 61.5 287.341 L 61.5 297.341",
                "duration": 600
              },
              {
                "path": "M 61.5 272.341 L 61.5 282.341",
                "duration": 600
              },
              {
                "path": "M 61.5 257.341 L 61.5 267.341",
                "duration": 600
              },
              {
                "path": "M 61.5 242.341 L 61.5 252.341",
                "duration": 600
              },
              {
                "path": "M 61.5 227.341 L 61.5 237.341",
                "duration": 600
              }
            ],
            "dimensions": {
              "width": 930,
              "height": 389
            }
          }
        }; 


//$(function(){
  //if (Modernizr.touch) { 
    //console.log('Touch Screen');
  //} else { 
    //console.log('No Touch Screen');
  //}
  //if (Modernizr.svg) { 
    //console.log('svg supported');
  //}
 //});

/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var HomeAway = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages
      //alert(1);

      //Fallback big pictures
      //<img class="img" src="http://placekitten.com/320/480" alt="" data-big="http://placekitten.com/1024/768" />
      $(".img").each(function() {
        if (Modernizr.mq('only screen and (min-width: 1200px)')) {
          $(this).attr("src", $(this).attr("data-big"));
        }
      });

      if (Modernizr.touch){
         // bind to touchstart, touchmove, etc and watch `event.streamId`
      } else {
         // bind to normal click, mousemove, etc
      }

      //fallback SVG
      //<img src="tomato.svg">
      if (!Modernizr.svg) {
        var imgs = document.getElementsByTagName('img');
        var svgExtension = /.*\.svg$/;
        var l = imgs.length;
        for(var i = 0; i < l; i++) {
          if(imgs[i].src.match(svgExtension)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
            console.log(imgs[i].src);
          }
        }
      } //!Modernizr.svg: function() 
    } // init: function() 
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page
      // Overwriting defaults
      if (Modernizr.touch) { 
        console.log('Touch Screen');
      } else { 
        console.log('No Touch Screen');
      } //Modernizr.touch: function() 

      if (Modernizr.svg) { 
        console.log('svg supported');
      } //!Modernizr.svg: function() 

      wow = new WOW(
        {
          boxClass:     'anim-box',      // default
          animateClass: 'bounceIn', // default
          offset:       0,          // default
          mobile:       true,       // default
          live:         true,        // default
          callback:function(t){$(t).lazylinepainter('paint');}
        }
      ).init();
      //var s = t.extend({strokeWidth: 2,strokeColor: "#000",strokeOverColor: null,strokeCap: "round",strokeJoin: "round",
      //ratioScale: 1,strokeOpacity: 1,arrowEnd: "none",onComplete: null,onStart: null,delay: null,
      //overrideKey: null,drawSequential: !0,speedMultiplier: 1,reverse: !1,responsive: !1}, n), 
      //o = s.overrideKey ? s.overrideKey : i.attr("id").replace("#", ""), 
      //l = s.svgData[o].dimensions.width, u = s.svgData[o].dimensions.height;

      $('#icons').lazylinepainter({
        'svgData' : pathObj,
        'strokeWidth':1,
        'strokeColor':'#000',
        'responsive': true,
        'onComplete' : function(){
          console.log('>> onComplete');
        },
        'onStart' : function(){
          console.log('>> onStart');
        }
      });// lazylinepainter

      // Paint your Lazy Line, that easy!
      // start the animation
      //var state = 'paint';
      //$('#icons').lazylinepainter(state);
      //(window).on('click', function(){
      //state = (state === 'erase') ? 'paint':'erase' ;
      //$('#icons').lazylinepainter(state);
      //console.log('>> ' + state);
      //});


    }// init:function
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page
    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = HomeAway;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
