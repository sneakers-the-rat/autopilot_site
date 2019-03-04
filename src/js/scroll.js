$(document).ready(function($) {
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

                });
