export {default as Route} from './-private/route';
export {default as LookupComponentMixin} from './-private/mixins/lookup-component';

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

import DialogComponent from './components/mdl-dialog';

import FormComponent from './components/mdl-form';

import LinkComponent from './-private/link-component';
import ListItemComponent from './components/mdl-list-item';

import NavigationComponent from './components/mdl-navigation';
import NavigationLinkComponent from './components/mdl-navigation-link';

import TextfieldComponent from './components/mdl-textfield';
import TextareaComponent from './components/mdl-textarea';
import ToolbarComponent from './components/mdl-toolbar';

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

  Dialog: DialogComponent,

  Form: FormComponent,

  ListItem: ListItemComponent,
  Link: LinkComponent,

  Navigation: NavigationComponent,
  NavigationLink: NavigationLinkComponent,

  Textarea: TextareaComponent,
  Textfield: TextfieldComponent,

  Toolbar: ToolbarComponent,
};

export {MaterialComponent as Component};

