import Component from '../-private/component';
import layout from '../templates/components/mdl-div';

/**
 * @class Div
 *
 * Integrates the <div> tag into the material design framework. This component
 * allows the <div> element to support layout and tooltip attributes.
 */
export default Component.extend({
  layout,

  tagName: 'div'
});
