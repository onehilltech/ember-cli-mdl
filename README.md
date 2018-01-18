# ember-cli-mdl

EmberJS add-on for [Material Design Lite](https://getmdl.io/)

## Installation

    ember install ember-cli-addon
    
Due to our dependency on other add-ons that have conflicting dependencies, you must
select the following choices to resolve the conflicts at install.

    2) material-design-lite ^1.3.0

## Configuration

The following values can be used to configure the behavior of the add-on. All configuration
properties should be placed in `config/environment.js`.

```javascript
let ENV = {
    // ...
    
    materialize: {
      embedIconFonts: true            // embed icon fonts, or link from online
    }  
    
    // ...
};
```

## Next Steps

See the [Wiki](https://github.com/onehilltech/ember-cli-mdl/wiki) for more information.
