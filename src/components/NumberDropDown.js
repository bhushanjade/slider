import React from 'react';

//dropdown LIMIT
const MAX_NUMBERS = 20;

const ON_CHANGE_EVENT_HANDLER = 'onChangeEventHandler';

export default class NumberDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.value || ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let val = e.target.value;
        this.setState({
            selected: val
        });
        if (typeof this.props[ON_CHANGE_EVENT_HANDLER] === 'function') {
            this.props[ON_CHANGE_EVENT_HANDLER](val);
        }
    }


    render() {
        let options = [];

        for (let i = 1; i <= MAX_NUMBERS; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        let selectedValue = this.state.selected || this.props.totalSlides;
        return (
            <div className="form-group">

                <label> Select Number Of Slides : </label>
                <select className="form-control" value={selectedValue} onChange={this.onChange}>
                    {options}
                </select>
            </div>
        )
        return null;
    }
}
