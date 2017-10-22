import PreferenceComponent from './mdl-preference';
import { inject as service } from '@ember/service';

import layout from '../templates/components/mdl-preference-link';

let PreferenceLinkComponent = PreferenceComponent.extend({
  layout,

  classNames: ['mdl-preference__link'],

  router: service (),

  replace: false,

  didInsertElement () {
    this._super (...arguments);
    this.$().on ('click', this.didClick.bind (this));
  },

  willDestroyElement () {
    this._super (...arguments);
    this.$().off ('click', this.didClick.bind (this));
  },

  didClick () {
    let router = this.get ('router');
    let routeName = this.get ('routeName');
    let queryParams = this.get ('queryParams');
    let replace = this.get ('replace');

    let args = [routeName];

    if (queryParams) {
      args.push (queryParams);
    }

    let method = replace ? router.replaceWith : router.transitionTo;
    method.apply (router, args);
  }
});

PreferenceLinkComponent.reopenClass ({
  positionalParams: ['routeName', 'queryParams']
});

export default PreferenceLinkComponent;
