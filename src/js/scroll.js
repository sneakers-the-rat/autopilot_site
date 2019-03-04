import $ from 'jquery';
import 'jquery';

import {TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';


var controller = new ScrollMagic.Controller();

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");

var $dot = $("path#dot");

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// build tween
var route_1 = new TimelineMax()
  .add(TweenMax.to($word, 0.9, {
    strokeDashoffset: 0,
    ease: Linear.easeNone
  }))
  .add(TweenMax.to($dot, 0.1, {
    strokeDashoffset: 0,
    ease: Linear.easeNone
  }));

var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger-route-1",
    duration: 10,
    offset: 300,
    tweenChanges: true
  })
  .setTween(route_1)
  //.addIndicators()
  .addTo(controller);


/*
// build Points and Line---------------------------------
var point_tween = new TimelineMax()
        //Show points and line
        .add(TweenMax.to(".section2 .punkt1", 0.3, {height:"15px", width: "15px"}))
        .add(TweenMax.to(".section2 .punkt2", 0.3, {height:"30px", width: "30px", delay: 0.3}))
        .add(TweenMax.to(".section2 .line", 0.8, {css:{opacity:0.3}, delay: 0.1}));

// build scene
var scene = new ScrollScene({triggerElement: "#trigger1", reverse: false})
        .setTween(point_tween)
        .addTo(controller);

// build tween devices---------------------------------
var devices_tween = new TimelineMax()
    //Show Text and Icons
        .add(TweenMax.to(".section2 .text1", 0.3, {css:{opacity:1}}))
        .add(TweenMax.to(".section2 .mac", 0.25, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .macbook", 0.2, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .ipad", 0.15, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .iphone", 0.1, {css:{opacity:1}, delay: 0.1}));

// build scene
var scene = new ScrollScene({triggerElement: "#trigger2", reverse: false})
        .setTween(devices_tween)
        .addTo(controller);

// build tween operating systems---------------------------------
var os_tween = new TimelineMax()
    //Show Text and Icons
        .add(TweenMax.to(".section2 .text2", 0.3, {css:{opacity:0.3}}))
        .add(TweenMax.to(".section2 .kreis1", 0.25, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .kreis2", 0.2, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .kreis3", 0.15, {css:{opacity:1}, delay: 0.1}))
        .add(TweenMax.to(".section2 .kreis4", 0.15, {css:{opacity:1}, delay: 0.1}))

        .add(TweenMax.to(".section2 .punkt3", 0.3, {height:"15px", width: "15px", delay: 0.3}));

// build scene
var scene = new ScrollScene({triggerElement: "#trigger3", reverse: false})
        .setTween(os_tween)
        .addTo(controller);


// show indicators (requires debug extension)
scene.addIndicators();
*/
