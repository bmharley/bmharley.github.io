/*
 * Barry Harley Portfolio Scripts
 *
 * Core scripts for Barry Harley web developer portfolio.
 *
 * @author  Barry Harley (http://barryharley.me.uk)
 *
 */
 
jQuery(document).ready(function ($) {
  
  var $menuToggle = $('#header').find('.responsive-menu-toggle');
  var $menu = $('#header').find('.main-menu');
  var $showProjects = $('#projects').find('.show-projects');
  var $hideProjects = $('#projects').find('.hide-projects');
  var $additionalProjects = $('#projects').find('.additional-projects');
  var $contactForm = $('#contact').find('.contact-form');
  
  /**
  * ------------------------
  * Events
  * ------------------------
  */ 
  
  // Hash Links Click
  $('a[href*=#]').on('click', function() {
    var $target = $($(this).attr('href'));
    smoothScroll($target);
    return false;
  });
  
  // Alert Close Button Click
  $('.alert .close').on('click', function () {
    $(this).parent('.alert').fadeOut();
  });
  
  // Responsive Nav Click
  $menuToggle.on('click', function() {
    responsiveMenuToggle();
  });
  
  // Show More Projects Click
  $showProjects.on('click', function() {
    showProjects();
  });
  
  // Show Less Projects Click
  $hideProjects.on('click', function() {
    hideProjects();
  });
  
  // Submit Contact Form Via AJAX
  $contactForm.on('submit', function(e) {
    e.preventDefault();
    submitContactForm();
  });
  
  /**
  * ------------------------
  * Functions
  * ------------------------
  */ 
  
  /**
   * Smooth Scroll
   *
   * @param  jQuery Object
   * @return  void
   */ 
  function smoothScroll($target) {
    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top
      }, 500);
    }
  }
  
  /**
   * Responsive Menu Toggle
   *
   * Expands & hides main menu on mobiles.
   *
   * @return  void
   */ 
  function responsiveMenuToggle() {
    // Get menu height
    var menuHeight = $menu.outerHeight();
    
    // Offset for height of top bar.
    menuHeight = menuHeight - $('#header').find('.top-bar').height();
    
    // Add top padding to body so the menu appears.
    if ($('body').css('paddingTop') == '0px') {
      $menu.fadeIn(50);
      $('body').animate({paddingTop: menuHeight}, 300);
      $menuToggle.addClass('active');
    }
    // Remove top padding from body so the menu disappears.
    else {
      $menu.delay(150).fadeOut(200); 
      $('body').animate({paddingTop: 0}, 300);
      $menuToggle.removeClass('active');
    }
  }
  
  /**
   * Show Projects
   *
   * Reveals additional projects.
   *
   * @return  void
   */ 
  function showProjects() {
    if (!$additionalProjects.is(':visible')) {
      $additionalProjects.fadeIn();
      $showProjects.hide();
      $hideProjects.css('display', 'inline-block');
    }
  }
  
   /**
   * Hide Projects
   *
   * Hides additional projects.
   *
   * @return  void
   */ 
  function hideProjects() {
    if ($additionalProjects.is(':visible')) {
      smoothScroll($('#projects'));
      $additionalProjects.fadeOut(200, function () {
        $showProjects.css('display', 'inline-block');
        $hideProjects.hide();
      });
    }
  }
  
  /**
   * Submit Contact Form
   *
   * @return  void
   */ 
  function submitContactForm() {
    var $submitBtn = $contactForm.find('.contact-submit');
    var $loader = $contactForm.find('.ajax-loader');
    var $validationBox = $contactForm.find('.contact-validation');
    var $errorBox = $contactForm.find('.contact-error');
    var $successBox = $contactForm.find('.contact-success');
    var formData = $contactForm.serialize();
    
    // Validate the form
    if (validateContactForm()) {
      //console.log('Validation passed');
      $validationBox.hide();
      
      // Send the form
      $.ajax({
          url: '//formspree.io/hello@barryharley.me.uk',
          method: 'POST',
          data: formData,
          dataType: 'json',
          beforeSend: function() {
            // Hide submit > show loader
            $submitBtn.hide();
            $loader.css('display', 'inline-block');
          },
          success: function(data) {
            // Hide Loader > Show Submit
            $loader.hide();
            $submitBtn.css('display', 'inline-block');
            
            // Show success message
            $errorBox.hide();
            $successBox.slideDown();
          },
          error: function(err) {
            // Hide loader > show submit
            $loader.hide();
            $submitBtn.css('display', 'inline-block');
            
            // Show send error
            $successBox.hide();
            $errorBox.slideDown();
          }
      });
    }
    else {
      //console.log('Validation failed');
      // Show Validation Error
      $successBox.hide();
      $errorBox.hide();
      $validationBox.slideDown();
    }
  }
  
  /**
   * Validate Contact Form
   *
   * @return  void
   */ 
  function validateContactForm() {
    return (fieldComplete('#contact-name') && validEmail('#contact-email') && fieldComplete('#contact-message'));
  }
  
  /**
   * Validation - Check Field Complete
   *
   * @param  string
   * @return  void
   */ 
  function fieldComplete(fieldName) {
    var $field = $(fieldName);
    //console.log(fieldName + ' Complete = ' + ($field.val().length > 0).toString());
    return $field.val().length > 0;
  }
  
  /**
   * Validation - Check Email Valid
   *
   * @param  string
   * @return  void
   */ 
  function validEmail(fieldName) {
    var $field = $(fieldName);
    var pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    //console.log(fieldName + ' Complete = ' + ($field.val().length > 0).toString());
    if ($field.val().length > 0) {
      var value = $field.val();
      //console.log(fieldName + ' Valid = ' + pattern.test(value).toString());
      return pattern.test(value);
    }
    return false;
  }

});
