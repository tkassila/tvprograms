import {h, Fragment, Component, createRef } from 'preact';
import { useState, useRef } from 'preact/hooks';
import Config from '../../utils/Config';
import './index.css';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
function CheckBox(props) 
{
    /*
       <Fragment>
                        <input lang="fi" type="checkbox" onChange={props.onChange} 
                            ref={props.inputref === undefined ? undefined : props.inputref}                     
                            id={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                            checked={props.checked === undefined ? false : props.checked} />
                            <span class="checkmark"></span>
                            <label lang="fi" class="container" 
                        for={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                        id={props.inputid === undefined ? 'idcheckboxundef-label' : props.inputid+'-label'} >
                            {props.labeltext}
                    </label>
                </Fragment>
                */
        return ( 
                <Fragment>
                        <Switch lang="fi" type="checkbox" onChange={props.onChange} 
                            ref={props.inputref === undefined ? undefined : props.inputref}                     
                            id={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                            checked={props.checked === undefined ? false : props.checked}
                             />
                         
                            <label lang="fi" style={  'margin-left: 5px;'} class="container" 
                        for={props.inputid === undefined ? 'idcheckboxundef' : props.inputid}
                        id={props.inputid === undefined ? 'idcheckboxundef-label' : props.inputid+'-label'} >
                            {props.labeltext}
                    </label>
                </Fragment>
            );
}

export default CheckBox;