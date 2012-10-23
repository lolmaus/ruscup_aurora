# Require any additional compass plugins here.
require 'aurora'

# Compass configuration.
css_dir           = "css"
sass_dir          = "sass"
images_dir        = "images"
javascripts_dir   = "javascripts"
relative_assets   = true
preferred_syntax  = :sass

# Compiled CSS would be formatted for development.
# No need to make it compact because CMS will do code compression.
output_style      = :expanded #or :nested or :compact or :compressed
line_comments     = true
sass_options      = {:debug_info => true}
