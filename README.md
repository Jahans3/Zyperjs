# Zyperjs
Enlarge text entered into text fields primarily for those with poor eyesight but also suitable just for emphasis.

## Usage

Adding Zyper to your website is designed to be simple and fast:

Simply include Zyperjs on your page: `<script type="text/javascript" src="path/to/zyper/zyper.min.js"></script>`

Then call Zyper and pass in your configuration options `new Zyper(options)`

###Specify configuration options: 

Options are passed in by an object, if an option is not specified Zyper will fall back to a default.

#### textFields

Pass in a CSS selector to target specific text inputs.
Pass `true` to specify all text inputs with the data attribute `data-zyper="true"`.

Leaving this option blank selects all text inputs on the page.