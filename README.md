# Zyperjs
Designed for users who don't have perfect eyes, but whose eyesight is not bad enough for them to have assisting software such as a screen reader.

Zyper will attach itself to the text fields you specify then enlarge and mirror the user's text input above in a clear and visible display box. Zyper is discreet, only visible when necessary, the display box will only appear when a user is actively using an input.

Recommended to be used with text inputs where accuracy is crucial to a good UX, eg. a payment form.

## Usage

Adding Zyper to your website is designed to be simple and fast, while still offering maximum configuration.

Simply include Zyperjs on your page:

`<script type="text/javascript" src="path/to/zyper/zyper.min.js"></script>`

Then call Zyper and pass in your configuration options:

    const options = {
        textFields: '.form-wrap [type="text"]',
        backgroundColor: '#2980b9',
        borderColor: '#e1e1e1'
    };
    
    new Zyper(options);

## List of Options

Options are passed in by an object, if an option is not specified Zyper will fall back to a default.

#### textFields

Pass in a CSS selector as a string to target specific text inputs.

Passing `true` selects all text inputs on the page.

Leaving this option blank specifies all text inputs with the data attribute `data-zyper="true"`.

#### customClass

Pass in a custom class as a string.

Leaving this option blank has no effect.

#### backgroundColor

Pass in a color as a string, accepts text, hex and rgba.

Leaving this option blank defaults to a dark blue.

#### font

Pass in a font as a string.

Leaving this option blank defaults to `"Lucida Grande", Helvetica, Arial, sans-serif`.

#### textColor

Pass in a text color as a string, accepts text, hex and rgba.

Leaving this option blank defaults to white.

#### borderColor

Pass in a border color as a string, accepts text, hex and rgba.

Leaving this option blank defaults to white.

#### borderRadius

Pass in a pixel or percentage value as a string.

Leaving this option blank defaults to 6px.