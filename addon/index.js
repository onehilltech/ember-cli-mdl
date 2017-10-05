export {default as Route} from './-private/route';

// Export the components. This allows third-party add-ons and application
// components to extends the components.

import BadgeComponent from './components/mdl-badge';
import ButtonComponent from './components/mdl-button';

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

import LinkComponent from './-private/link-component';
import ListItemComponent from './components/mdl-list-item';

let MaterialComponent = {
  Badge: BadgeComponent,
  Button: ButtonComponent,

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

  ListItem: ListItemComponent,
  Link: LinkComponent,
};

export {MaterialComponent as Component};

