import Ember from 'ember';

export default Ember.Mixin.create ({
  _insertTooltipElement: Ember.on ('didInsertElement', function () {
    let tooltip = this.get ('tooltip');

    if (Ember.isPresent (tooltip)) {
      // Insert the tooltip, and save the tooltip object for later.
      let $tooltip = this._getTooltipElement ();
      $tooltip.text (tooltip);

      this.set ('_oldTooltip', tooltip);

      this._toggleTooltipClassNames ();
    }
  }),

  _updateTooltip: Ember.on ('didUpdate', function () {
    let {tooltip, _oldTooltip} = this.getProperties (['tooltip', '_oldTooltip']);

    if (tooltip !== _oldTooltip) {
      let $tooltip = this._getTooltipElement ();
      $tooltip.text (tooltip);

      this.set ('_oldTooltip', tooltip);
    }

    if (Ember.isPresent (tooltip)) {
      this._toggleTooltipClassNames ();
    }
    else if (this.$tooltip) {
      this._removeTooltipElement ();
    }
  }),

  _destroyTooltipElement: Ember.on ('willDestroyElement', function () {
    if (this.$tooltip) {
      this._removeTooltipElement ();
    }
  }),

  _removeTooltipElement () {
    // Remove all traces of the tooltip element.
    this.$tooltip.remove ();

    this.set ('$tooltip');
  },

  _getTooltipElement () {
    if (this.$tooltip) {
      return this.$tooltip;
    }

    // Insert the tooltip, and save the tooltip object for later.
    let $tooltip = Ember.$(`<div class="mdl-tooltip" for="${this.elementId}"></div>`);
    $tooltip.insertAfter (this.$());

    this.$tooltip = $tooltip;

    return $tooltip;
  },

  _toggleTooltipClassNames () {
    let {tooltipPosition, tooltipLarge, _oldTooltipPosition, _oldTooltipLarge} =
      this.getProperties (['tooltipPosition', 'tooltipLarge', '_oldTooltipPosition', '_oldTooltipLarge']);

    if (tooltipPosition !== _oldTooltipPosition) {
      // Remove the old position, if present, and replace it with the new
      // position, if present.

      if (Ember.isPresent (_oldTooltipPosition)) {
        this.$tooltip.removeClass (`mdl-tooltip--${_oldTooltipPosition}`);
      }

      if (Ember.isPresent (tooltipPosition)) {
        this.$tooltip.addClass (`mdl-tooltip--${tooltipPosition}`);
      }

      this.set ('_oldTooltipPosition', tooltipPosition);
    }

    if (tooltipLarge !== _oldTooltipLarge) {
      this.$tooltip.toggleClass ('mdl-tooltip--large', tooltipLarge);
      this.set ('_oldTooltipLarge', tooltipLarge);
    }
  },
});
