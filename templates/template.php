<?php
/**
  * Implements hook_preprocess_html()
  */
function ruscup_aurora_preprocess_html(&$vars) {
  // Be sure replace this with a custom Modernizr build!
  drupal_add_js(drupal_get_path('theme', 'ruscup_aurora') . '/javascripts/modernizr-2.5.3.js', array('force header' => true));
  
  // yep/nope for conditional JS loading!
  drupal_add_js(drupal_get_path('theme', 'ruscup_aurora') . '/javascripts/loader.js');
}
