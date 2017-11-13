import Ember from 'ember';

export default Ember.Mixin.create ({
  layoutElementId: Ember.computed (function () {
    return this.elementId;
  }),

  getTooltipElementId () {
    return this.elementId;
  },

  _insertTooltipElement: Ember.on ('didRender', function () {
    let {tooltip, _oldTooltip} = this.getProperties (['tooltip', '_oldTooltip']);

    // This first check focuses on the existence of the tooltip element in
    // the DOM model.
    if (tooltip !== _oldTooltip) {
      if (Ember.isPresent (tooltip)) {
        // Make sure the tooltip is at least present in the DOM model.
        let $tooltip = this._getTooltipElement ();
        $tooltip.text (tooltip);
      }
      else {
        this._removeTooltipElement ();
      }

      // Save the current tooltip value as the old one.
      this.set ('_oldTooltip', tooltip);
    }

    if (this.$tooltip) {
      this._toggleTooltipClassNames ();
    }
  }),

  _destroyTooltipElement: Ember.on ('willDestroyElement', function () {
    if (this.$tooltip) {
      this._removeTooltipElement ();
    }
  }),

  _removeTooltipElement () {
    // Remove all traces of the tooltip element.
    this.get ('mdl').downgradeElements (this.$tooltip[0]);
    this.$tooltip.remove ();

    this.set ('$tooltip');
  },

  _getTooltipElement () {
    if (this.$tooltip) {
      return this.$tooltip;
    }

    // Insert the tooltip, and save the tooltip object for later.
    let tooltipElementId = this.getTooltipElementId ();
    let $tooltip = Ember.$(`<div class="mdl-tooltip" for="${tooltipElementId}"></div>`);

    let $tooltipElement = Ember.$(`#${tooltipElementId}`);
    $tooltip.insertAfter ($tooltipElement);

    this.$tooltip = $tooltip;

    this.get ('mdl').upgradeElement ($tooltip[0]);

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
