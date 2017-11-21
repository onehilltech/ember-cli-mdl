export {default as Route} from './-private/route';

// Export the components. This allows third-party add-ons and application
// components to extends the components.

import Badge from './components/mdl-badge';

// button components
import AbstractButton from './-private/components/abstract-button';
import Button from './components/mdl-button';
import FAB from './components/mdl-fab';
import IconButton from './components/mdl-icon-button';

import CardComponent from './components/mdl-card';
import CardActionComponent from './components/mdl-card-action';
import CardActionsComponent from './components/mdl-card-actions';
import CardHeaderComponent from './components/mdl-card-header';
import CardMediaComponent from './components/mdl-card-media';
import CardMenuComponent from './components/mdl-card-menu';
import CardSubtitleTextComponent from './components/mdl-card-subtitle-text';
import CardSupportingTextComponent from './components/mdl-card-supporting-text';
import CardTitleComponent from './components/mdl-card-title';
import CardTitleTextComponent from './components/mdl-card-title-text';

import Dialog from './components/mdl-dialog';
import Form from './components/mdl-form';

import LinkComponent from './-private/link-component';
import ListItemComponent from './components/mdl-list-item';

import NavigationComponent from './components/mdl-navigation';
import NavigationLinkComponent from './components/mdl-navigation-link';

import Textfield from './components/mdl-textfield';
import Textarea from './components/mdl-textarea';

import Toolbar from './components/mdl-toolbar';

import TooltipSupport from './-private/mixins/tooltip-support';

let MaterialComponent = {
  Badge,

  // button components
  AbstractButton,
  Button,
  FAB,
  IconButton,

  Card: CardComponent,
  CardAction: CardActionComponent,
  CardActions: CardActionsComponent,
  CardHeader: CardHeaderComponent,
  CardMedia: CardMediaComponent,
  CardMenu: CardMenuComponent,
  CardSubtitle: CardSubtitleTextComponent,
  CardSupportingText: CardSupportingTextComponent,
  CardTitle: CardTitleComponent,
  CardTitleText: CardTitleTextComponent,

  Dialog,
  Form,

  ListItem: ListItemComponent,
  Link: LinkComponent,

  Navigation: NavigationComponent,
  NavigationLink: NavigationLinkComponent,

  Textarea,
  Textfield,

  Toolbar,
  TooltipSupport
};

export {MaterialComponent as Component};

