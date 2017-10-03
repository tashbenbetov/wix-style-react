import React from 'react';
import AutoComplete from 'wix-style-react/AutoComplete';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px'
};

const options = [
  {id: 0, value: 'First option'},
  {id: 1, value: 'Second option'},
  {id: 2, value: 'Third option'},
  {id: 3, value: 'Fifth option'},
  {id: 4, value: 'Fourth option'}
];

class ControlledAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', value2: ''};
    this.onSelect = this.onSelect.bind(this);
    this.onSelect2 = this.onSelect2.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChange2 = this.onChange2.bind(this);
  }

  onSelect(option) {
    this.setState({value: option.value});
  }

  onSelect2(option) {
    this.setState({value2: option.value});
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onChange2(event) {
    this.setState({value2: event.target.value});
  }

  render() {
    return (
      <div>
        <div style={style} className="ltr">
          Select by clicking tab to move to next(A11y)
          <AutoComplete
            dataHook="story-autocomplete"
            options={options}
            value={this.state.value}
            onChange={this.onChange}
            onSelect={this.onSelect}
            placeholder={'Start typing'}
            tabIndex={-1}
            predicate={option => option.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1}
            />
        </div>
        <div style={style} className="ltr">
          No native auto complete
          <AutoComplete
            dataHook="story-autocomplete-2"
            autocomplete="off"
            options={options}
            tabIndex={-1}
            value={this.state.value2}
            onChange={this.onChange2}
            onSelect={this.onSelect2}
            placeholder={'Start typing'}
            predicate={option => option.value.toLowerCase().indexOf(this.state.value2.toLowerCase()) !== -1}
            />
        </div>
      </div>
    );
  }
}

export default () =>
  <div>
    <ControlledAutoComplete/>
  </div>;
