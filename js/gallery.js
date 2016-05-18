/*
 * Scripts for PhotoSwipe Powered Gallery
 *
 * @author  Barry Harley (http://barryharley.me.uk)
 *
 */
 
jQuery(document).ready(function ($) {
  
  /**
  * ------------------------
  * Variables & Settings
  * ------------------------
  */ 
  
  // Get Gallery Container Element
  var pswpElement = document.querySelectorAll('.pswp')[0];
  
  // Default Dimensions
  var width = 1000;
  var height = 774;
  
  // Gallery Options
  var options = {
    index: 0, // Start at first slide
    loadingIndicatorDelay: 0
  };
  
  
  /**
  * ------------------------
  * Gallery Items
  * ------------------------
  */ 
  
  // Big Academy
  var bigAcademy = [
    {src: '/img/projects/big_academy/1.jpg', w: width, h: height},
    {src: '/img/projects/big_academy/2.jpg', w: width, h: height},
    {src: '/img/projects/big_academy/3.jpg', w: width, h: height},
    {src: '/img/projects/big_academy/4.jpg', w: width, h: height}
  ];
  
  // Mayfield
  var mayfield = [
    {src: '/img/projects/mayfield/1.jpg', w: width, h: height},
    {src: '/img/projects/mayfield/2.jpg', w: width, h: height},
    {src: '/img/projects/mayfield/3.jpg', w: width, h: height},
    {src: '/img/projects/mayfield/4.jpg', w: width, h: height}
  ];
  
  // Independent Executives
  var independentExecs = [
    {src: '/img/projects/independent_execs/1.jpg', w: width, h: height},
    {src: '/img/projects/independent_execs/2.jpg', w: width, h: height},
    {src: '/img/projects/independent_execs/3.jpg', w: width, h: height}
  ];
  
  // Funded Learning
  var stratify = [
    {src: '/img/projects/stratify/1.jpg', w: width, h: height},
    {src: '/img/projects/stratify/2.jpg', w: width, h: height},
    {src: '/img/projects/stratify/3.jpg', w: width, h: height}
  ];
  
  // Funded Learning
  var fundedLearning = [
    {src: '/img/projects/funded_learning/1.jpg', w: width, h: height},
    {src: '/img/projects/funded_learning/2.jpg', w: width, h: height},
    {src: '/img/projects/funded_learning/3.jpg', w: width, h: height}
  ];
  
  // Funded Learning
  var mylife = [
    {src: '/img/projects/mylife/1.jpg', w: 1000, h: 730},
    {src: '/img/projects/mylife/2.jpg', w: 1000, h: 730},
    {src: '/img/projects/mylife/3.jpg', w: 1000, h: 730}
  ];
  
  // Array storing all gallery items.
  var galleryItems = [bigAcademy, mayfield, independentExecs, stratify, fundedLearning, mylife];
  
  /**
  * ------------------------
  * Events
  * ------------------------
  */ 
  
  // Bind Gallery Load Function to Links
  $('#projects').find('.project .show-gallery').on('click', function() {
    var index = $(this).closest('.project').index('.project');
    loadGallery(galleryItems[index]);
  });
  
  /**
  * ------------------------
  * Functions
  * ------------------------
  */ 
  
  /**
   * Load and Show a Gallery
   *
   * @param  array
   * @return  void
   */ 
  function loadGallery(items) {
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }
});
