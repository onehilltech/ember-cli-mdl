import Component from '../-private/component';
import layout from '../templates/components/mdl-progress-bar';

export default Component.extend({
  layout,

  classNames: ['mdl-progress', 'mdl-js-progress'],

  classNameBindings: ['indeterminate:mdl-progress__indeterminate'],

  progress: 0,

  didInsertElement () {
    this._super (...arguments);

    // Initialize the progress bar value.
    let progress = this.get ('progress');
    this.element.MaterialProgress.setProgress (progress);

    this.set ('_lastProgress', progress);

    // Set the buffer value, if present.
    let buffer = this.get ('buffer');

    if (Ember.isPresent (buffer)) {
      this.element.MaterialProgress.setBuffer (buffer);
      this.set ('_lastBuffer', buffer);
    }
  },

  didUpdateAttrs () {
    this._super (...arguments);

    let progress = this.getWithDefault ('progress', 0);
    let oldProgress = this.get ('_lastProgress');

    if (progress !== oldProgress) {
      this.element.MaterialProgress.setProgress (progress);
      this.set ('_lastProgress', progress);
    }

    let buffer = this.get ('buffer');

    if (Ember.isPresent (buffer)) {
      this.element.MaterialProgress.setBuffer (buffer);
    }
    else {
      this.element.MaterialProgress.setBuffer (0);
    }
  }
});
