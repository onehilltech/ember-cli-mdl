import Controller from '@ember/controller';

export default Controller.extend({
  value: false,

  options: [
    {value: true, label: 'This is the first choice'},
    {value: false, label: 'This is the second choice'}
  ]
});
