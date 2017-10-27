import Behavior from '../-private/behavior';
import Ember from 'ember';

export default Behavior.extend ({
  scrollThreshold: 32,

  didAttachToComponent () {
    this._super (...arguments);

    let $content = Ember.$('.mdl-layout__content');

    if (Ember.isPresent ($content)) {
      Ember.set (this, '$content', $content);
      $content.on ('scroll', this.didScroll.bind (this));
    }
  },

  willDetachFromComponent () {
    this._super (...arguments);

    let $content = this.get ('$content');

    if (Ember.isPresent ($content)) {
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
