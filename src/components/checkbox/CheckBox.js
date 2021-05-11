import {h, Fragment, Component, createRef } from 'preact';
import { useState, useRef } from 'preact/hooks';
import Config from '../../utils/Config';
import './index.css';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
class CheckBox extends Component
{
    constructor(props)
	{
		super(props);

		this.state = {
		}
    }

    render(props, state) {

        return ( 
                <Fragment>
                        <input type="checkbox" onChange={props.onChange} 
                            ref={props.inputref === undefined ? undefined : props.inputref}                     
                            id={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                            checked={props.checked === undefined ? false : props.checked} />
                            <span class="checkmark"></span>
                            <label class="container" 
                        for={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                        id={props.inputid === undefined ? 'idcheckboxundef-label' : props.inputid+'-label'} >
                            {props.labeltext}
                    </label>
                </Fragment>
            );
     }
}

export default CheckBox;