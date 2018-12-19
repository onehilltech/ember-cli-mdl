import { set } from '@ember/object';
import { isPresent } from '@ember/utils';
import $ from 'jquery';
import Behavior from '../-private/behavior';

export default Behavior.extend ({
  scrollThreshold: 32,

  didAttachToComponent () {
    this._super (...arguments);

    let $content = $('.mdl-layout__content');

    if (isPresent ($content)) {
      set (this, '$content', $content);
      $content.on ('scroll', this.didScroll.bind (this));
    }
  },

  willDetachFromComponent () {
    this._super (...arguments);

    let $content = this.get ('$content');

    if (isPresent ($content)) {
      $content.off ('scroll', this.didScroll.bind (this));
    }
  },

  didScroll (ev) {
    let currentPosition = ev.target.scrollTop;

    let lastPosition = this.getWithDefault ('_lastPosition', 0);
    let delta = currentPosition - lastPosition;
    let scrollThreshold = this.get ('scrollThreshold');

    if (delta >= scrollThreshold) {
      this._showElement (false);
      this.set ('_lastPosition', currentPosition);
    }
    else if (delta < -scrollThreshold) {
      this._showElement (true);
      this.set ('_lastPosition', currentPosition);
    }
  },

  _showElement (visible) {
    let component = this.get ('component');
    component.$().toggleClass ('mdl-behavior__hide-on-scroll', !visible);
  }
});
