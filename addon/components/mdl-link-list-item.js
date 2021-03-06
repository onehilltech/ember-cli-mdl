import { inject as service } from '@ember/service';
import ListItemComponent from './mdl-list-item';

const LinkListItemComponent = ListItemComponent.extend({
  classNames: ['mdl-list__link-item'],

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

LinkListItemComponent.reopenClass ({
  positionalParams: ['routeName', 'queryParams']
});

export default LinkListItemComponent;
