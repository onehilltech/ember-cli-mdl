import Controller from '@ember/controller';

export default Controller.extend({
  classifications: Object.freeze ([
    {text: '(nothing selected)'},
    {value: 'freshman', text: 'Freshman'},
    {value: 'sophomore', text: 'Sophomore'},
    {value: 'junior', text: 'Junior'},
    {value: 'senior', text: 'Senior'}
  ]),

  classification: 'junior',
});
