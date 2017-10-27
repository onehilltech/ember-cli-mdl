import HideOnScrollBehavior from '../behaviors/hide-on-scroll';

export function initialize (application) {
  application.register ('behavior:hide-on-scroll', HideOnScrollBehavior)
}

export default {
  initialize
};
