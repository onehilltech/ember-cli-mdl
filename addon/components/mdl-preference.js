import { isPresent } from '@ember/utils';
import ListItemComponent from './mdl-list-item';
import layout from '../templates/components/mdl-preference';

export default ListItemComponent.extend({
  layout,

  classNames: ['mdl-preference'],

  title: null,

  subtitle: null,

  /// By default, we have a border on the list item.
  border: true,

  didReceiveAttrs () {
    this._super (...arguments);

    let subtitle = this.get ('subtitle');

    if (isPresent (subtitle)) {
      this.set ('lines', 2);
    }
  }
});
