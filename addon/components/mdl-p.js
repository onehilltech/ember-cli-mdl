import Component from 'ember-cli-mdl';
import layout from '../templates/components/mdl-p';

/**
 * @class P
 *
 * Integrates the <p> tag into the material design framework. This component
 * allows the <p> element to support layout and tooltip attributes.
 */
export default Component.extend({
  layout,

  tagName: 'p'
});
