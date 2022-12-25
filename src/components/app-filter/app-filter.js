import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }


    render() {
        const buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'rise', label: 'На повышение'},
            {name: 'moreThen', label: 'З/П больше 1000$'},
        ];

        const buttons = buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';

            return (            
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {/* <button type="button"
                        className="btn btn-light"
                        >
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        На повышение
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        З/П больше 1000$
                </button> */}
                {buttons}
            </div>
        )
    }
}

export default AppFilter;