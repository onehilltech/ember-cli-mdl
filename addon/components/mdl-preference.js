import ListItemComponent from './mdl-list-item';
import layout from '../templates/components/mdl-preference';

export default ListItemComponent.extend({
  classNames: ['mdl-preference'],

  layout,

  title: null,

  subtitle: null,

  didReceiveAttrs () {
    this._super (...arguments);

    let subtitle = this.get ('subtitle');

    if (Ember.isPresent (subtitle)) {
      this.set ('lines', 2);
    }
  }
});
