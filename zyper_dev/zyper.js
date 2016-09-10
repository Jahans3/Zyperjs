/**
 * Created by jahansj on 10/09/2016.
 */

// Must take config object, first option is to target all text input or only a specific class 
// if no specific class provided uses default .zyper (or something)

const opts = {
  // A selector to match the text fields | true - indicating all fields | empty string - indicating '[data-zyper="true"]'
  textFields: true//'.form-wrap [type="text"]'
};

class Zyper {
  constructor(config) {
    this.buildLabel(config);
    this.getTextFields(config.textFields);
  }

  /**
   * Get text inputs and bind events
   * @param textFields
   * @returns {*}
   */
  getTextFields(textFields) {
    let selector;

    if (textFields === true) {
      selector = '[type="text"]';
    }
    else if (!textFields) {
      selector = '[type="text"][data-zyper="true"]';
    }
    else {
      selector = textFields;
    }

    const inputs = document.querySelectorAll(selector);

    if (!inputs.length) {
      console.warn('Zyper: Could not find matching text fields.');

      return false;
    }

    for (let i = 0, length = inputs.length; i < length; i++) {
      inputs[i].addEventListener('focus', e => this.activateLabel(e));
      inputs[i].addEventListener('input', e => this.onType(e));
      inputs[i].addEventListener('blur', () => this.disableLabel());
    }
  }

  /**
   * Input handler
   * @param e
   */
  onType(e) {
    e = e || window.event;
    e.stopPropagation();
    
    this.ZyperText.innerHTML = e.target.value;
  }
  
  /**
   * Build Zyper and assign to class variables
   */
  buildLabel(config) {
    const wrapper = document.createElement('div');
    const textField = document.createElement('span');
    const customClass = config.customClass || '';
    const backgroundColor = config.backgroundColor || 'rgb(37, 51, 66)';
    const textColor = config.textColor || '#fff';
    const borderColor = config.borderColor || '#fff';
    const borderRadius = config.borderRadius || '6px';
    const font = config.font || '"Lucida Grande", Helvetica, Arial, sans-serif';

    wrapper.className = `zyper ${customClass}`;
    wrapper.style.width = '100px';
    wrapper.style.height = '50px';
    wrapper.style.backgroundColor = backgroundColor;
    wrapper.style.border = `4px solid ${borderColor}`;
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
  activateLabel(e) {
    const input = e.target;
    const height = this.getStyle(input, 'height', true);
    const width = this.getStyle(input, 'width');
    const fontSize = this.getStyle(input, 'font-size', true) * 2;
    const X = input.offsetLeft;
    const Y = input.offsetTop;
    
    this.ZyperText.innerHTML = input.value;
    this.ZyperText.style.fontSize = `${fontSize}px`;
    this.Zyper.style.left = `${X}px`;
    this.Zyper.style.top = `${Y - (height * 3)}px`;
    this.Zyper.style.height = `${height * 2}px`;
    this.Zyper.style.minWidth = width;
    this.Zyper.style.width = 'auto';
    this.Zyper.style.display = 'block';
  }

  /**
   * Hide Zyper
   */
  disableLabel() {
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
  getStyle(element, property, noPx) {
    if (noPx) {
      return window.getComputedStyle(element).getPropertyValue(property).split('p')[0];
    }
    return window.getComputedStyle(element).getPropertyValue(property);
  }
}

new Zyper(opts);