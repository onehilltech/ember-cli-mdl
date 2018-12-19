import { isNone, isPresent } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '../-private/component';
import layout from '../templates/components/mdl-cell';

function computeCellNClassName (scope, property, device) {
  return computed (property, function () {
    let n = this.get (property);
    if (isNone (n)) { return undefined; }

    let className = `mdl-cell--${n}-${scope}`;

    if (isPresent (device))
      className += `-${device}`;

    return className;
  });
}

function computeCellClassName (scope, property, device) {
  return computed (property, function () {
    let value = this.get (property);
    if (isNone (value)) { return undefined; }

    let className = `mdl-cell--${scope}`;

    if (isPresent (device))
      className += `-${device}`;

    return className;
  });
}

export default Component.extend({
  layout,

  classNames: ['mdl-cell'],

  classNameBindings: [
    // columns
    'columnClassName',
    'phoneColumnClassName',
    'tabletColumnClassName',
    'desktopColumnClassName',

    // offset
    'offsetClassName',
    'phoneOffsetClassName',
    'tabletOffsetClassName',
    'desktopOffsetClassName',

    // order
    'orderClassName',
    'phoneOrderClassName',
    'tabletOrderClassName',
    'desktopOrderClassName',

    // hide
    'hideClassName',
    'phoneHideClassName',
    'tabletHideClassName',
    'desktopHideClassName',

    // regular mappings
    'stretch:mdl-cell--stretch',
    'top:mdl-cell--top',
    'middle:mdl-cell--middle',
    'bottom:mdl-cell--bottom',
  ],

  columnClassName: computeCellNClassName ('col', 'columns'),
  phoneColumnClassName: computeCellNClassName ('col', 'phoneColumns', 'phone'),
  tabletColumnClassName: computeCellNClassName ('col', 'tabletColumns', 'tablet'),
  desktopColumnClassName: computeCellNClassName ('col', 'desktopColumns', 'desktop'),

  offsetClassName: computeCellNClassName ('offset', 'offset'),
  phoneOffsetClassName: computeCellNClassName ('offset', 'phoneOffset', 'phone'),
  tabletOffsetClassName: computeCellNClassName ('offset', 'tabletOffset', 'tablet'),
  desktopOffsetClassName: computeCellNClassName ('offset', 'desktopOffset', 'desktop'),

  orderClassName: computeCellNClassName ('order', 'order'),
  phoneOrderClassName: computeCellNClassName ('order', 'phoneOrder', 'phone'),
  tabletOrderClassName: computeCellNClassName ('order', 'tabletOrder', 'tablet'),
  desktopOrderClassName: computeCellNClassName ('order', 'desktopOrder', 'desktop'),

  hideClassName: computeCellClassName ('hide', 'hide'),
  phoneHideClassName: computeCellClassName ('hide', 'phoneHide', 'phone'),
  tabletHideClassName: computeCellClassName ('hide', 'tabletHide', 'tablet'),
  desktopHideClassName: computeCellClassName ('hide', 'desktopHide', 'desktop')
});
