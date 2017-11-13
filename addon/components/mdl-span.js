import Component from '../-private/component';
import layout from '../templates/components/mdl-span';

/**
 * @class Span
 *
 * Integrates the <span> tag into the material design framework. This component
 * allows the span to support layout and tooltip attributes.
 */
export default Component.extend({
  layout,

  tagName: 'span'
});
