'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jahansj on 10/09/2016.
 */

// Must take config object, first option is to target all text input or only a specific class 
// if no specific class provided uses default .zyper (or something)

var opts = {
  // A selector to match the text fields | true - indicating all fields | empty string - indicating '[data-zyper="true"]'
  textFields: '.form-wrap [type="text"]'
};

var Zyper = function () {
  function Zyper(config) {
    _classCallCheck(this, Zyper);

    console.log('init');

    this.inputs = this.getTextFields(config.textFields);
  }

  /**
   * Get text inputs and bind events to
   * @param textFields
   * @returns {*}
   */


  _createClass(Zyper, [{
    key: 'getTextFields',
    value: function getTextFields(textFields) {
      var _this = this;

      var selector = void 0;

      if (textFields === true) {
        selector = '[type="text"][data-zyper="true"]';
      } else if (!textFields) {
        selector = '[type="text"]';
      } else {
        selector = textFields;
      }

      var inputs = document.querySelectorAll(selector);

      if (!inputs.length) {
        console.warn('Zyper: Could not find matching text fields.');

        return false;
      }

      for (var i = 0, length = inputs.length; i < length; i++) {
        inputs[i].addEventListener('keydown', function (e) {
          return _this.onType(e);
        });
        inputs[i].addEventListener('keyup', function (e) {
          return _this.onType(e);
        });
      }

      console.log(inputs);

      return inputs;
    }
  }, {
    key: 'onType',
    value: function onType(e) {
      e = e || window.event;
      e.stopPropagation();

      var input = e.target;
      var val = e.target.value;

      // temp
      // later we will build an element that appears above the active text box
      // and fill in that text box with this text
      // need to display a label (or any suitable element) directly above the active text input only
      // need to display this label above the input but out of the workflow so doesn't interfere with host page
      document.querySelector('.temp-box').innerHTML = val;
    }
  }]);

  return Zyper;
}();

new Zyper(opts);
//# sourceMappingURL=zyper.js.map
