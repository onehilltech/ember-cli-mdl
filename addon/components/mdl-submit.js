import ButtonComponent from '../components/mdl-button';

export default ButtonComponent.extend ({
  tagName: 'input',

  attributeBindings: ['value'],

  value: 'Submit',

  didInsertElement () {
    this._super (...arguments);
    this.element.type = 'submit';
  }
});
