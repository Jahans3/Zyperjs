'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by jahansj on 10/09/2016.
 */

var opts = {
  textFields: true
};

var Zyper = function () {
  function Zyper(config) {
    _classCallCheck(this, Zyper);

    this.config = config;
    this.buildLabel(this.config);
    this.getTextFields(this.hasProperty('textFields'));
  }

  /**
   * Get text inputs and bind events
   * @param textFields
   * @returns {*}
   */


  _createClass(Zyper, [{
    key: 'getTextFields',
    value: function getTextFields(textFields) {
      var _this = this;

      var selector = void 0;

      if (textFields === true) {
        selector = '[type="text"]';
      } else if (!textFields) {
        selector = '[type="text"][data-zyper="true"]';
      } else {
        selector = textFields;
      }

      var inputs = document.querySelectorAll(selector);

      if (!inputs.length) {
        console.warn('Zyper: Could not find matching text fields.');

        return false;
      }

      for (var i = 0, length = inputs.length; i < length; i++) {
        inputs[i].addEventListener('focus', function (e) {
          return _this.activateLabel(e);
        });
        inputs[i].addEventListener('input', function (e) {
          return _this.onType(e);
        });
        inputs[i].addEventListener('blur', function () {
          return _this.disableLabel();
        });
      }
    }

    /**
     * Input handler
     * @param e
     */

  }, {
    key: 'onType',
    value: function onType(e) {
      e = e || window.event;
      e.stopPropagation();

      this.ZyperText.innerHTML = e.target.value;
    }

    /**
     * Build Zyper and assign to class variables
     */

  }, {
    key: 'buildLabel',
    value: function buildLabel(config) {
      var wrapper = document.createElement('div');
      var textField = document.createElement('span');
      var customClass = this.hasProperty('customClass') || '';
      var backgroundColor = this.hasProperty('backgroundColor') || 'rgb(37, 51, 66)';
      var textColor = this.hasProperty('textColor') || '#fff';
      var borderColor = this.hasProperty('borderColor') || '#fff';
      var borderRadius = this.hasProperty('borderRadius') || '6px';
      var font = config.font || '"Lucida Grande", Helvetica, Arial, sans-serif';

      wrapper.className = 'zyper ' + customClass;
      wrapper.style.width = '100px';
      wrapper.style.height = '50px';
      wrapper.style.backgroundColor = backgroundColor;
      wrapper.style.border = '4px solid ' + borderColor;
      wrapper.style.borderRadius = borderRadius;
      wrapper.style.display = 'none';
      wrapper.style.position = 'absolute';
      wrapper.style.padding = '3px 7px';
      wrapper.style.margin = '0';

      textField.style.font = font;
      textField.style.height = '100%';
      textField.style.width = '100%';
      textField.style.color = textColor;

      wrapper.appendChild(textField);
      document.body.appendChild(wrapper);

      this.Zyper = wrapper;
      this.ZyperText = textField;
    }

    /**
     * Display Zyper and position above active input
     * @param e
     */

  }, {
    key: 'activateLabel',
    value: function activateLabel(e) {
      var input = e.target;
      var height = this.getStyle(input, 'height', true);
      var width = this.getStyle(input, 'width');
      var fontSize = this.getStyle(input, 'font-size', true) * 2;
      var X = input.offsetLeft;
      var Y = input.offsetTop;

      this.ZyperText.innerHTML = input.value;
      this.ZyperText.style.fontSize = fontSize + 'px';
      this.Zyper.style.left = X + 'px';
      this.Zyper.style.top = Y - height * 3 + 'px';
      this.Zyper.style.height = height * 2 + 'px';
      this.Zyper.style.minWidth = width;
      this.Zyper.style.width = 'auto';
      this.Zyper.style.display = 'block';
    }

    /**
     * Hide Zyper
     */

  }, {
    key: 'disableLabel',
    value: function disableLabel() {
      this.ZyperText.innerHTML = '';
      this.Zyper.style.display = 'none';
    }

    /**
     * Return computed style of an element
     * @param element
     * @param property
     * @param noPx
     * @returns {string}
     */

  }, {
    key: 'getStyle',
    value: function getStyle(element, property, noPx) {
      if (noPx) {
        return window.getComputedStyle(element).getPropertyValue(property).split('p')[0];
      }

      return window.getComputedStyle(element).getPropertyValue(property);
    }

    /**
     * Safely check for properties
     * @param option
     * @returns {*}
     */

  }, {
    key: 'hasProperty',
    value: function hasProperty(option) {
      var hasProp = this.config.hasOwnProperty(option);

      if (hasProp) {
        return this.config[option];
      }

      return false;
    }
  }]);

  return Zyper;
}();

new Zyper(opts);
//# sourceMappingURL=zyper.js.map
