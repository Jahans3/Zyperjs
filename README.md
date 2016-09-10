# Zyperjs
Designed for users who don't have perfect eyes, but whose eyesight is not bad enough for them to have assisting software such as a screen reader.

Zyper will attach itself to the text fields you specify then enlarge and mirror the user's text input above in a clear.

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

Pass in a CSS selector to target specific text inputs.

Pass `true` selects all text inputs on the page.

Leaving this option blank specifies all text inputs with the data attribute `data-zyper="true"`.

#### customClass

Pass in a custom class to Zyper.

Leaving this option blank has no effect.

#### backgroundColor

Pass in a color, accepts text, hex and rgba.

Leaving this option blank defaults to black.

#### textColor

Pass in a text color, accepts text, hex and rgba.

Leaving this option blank defaults to white.

#### borderColor

Pass in a border color, accepts text, hex and rgba.

Leaving this option blank defaults to white.