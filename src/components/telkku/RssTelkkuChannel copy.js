    
import {h, Fragment, Component } from 'preact';
import { useState } from 'preact/hooks';
//import Chips from 'preact-material-components/Chips';
// import 'preact-material-components/Chips/style.css';
import 'preact-material-components/Theme/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

// import { useState, useEffect  } from 'preact/hooks';
import Config from '../../utils/Config';
//import CssDark from '../context/Context';
import ShowProgram from './ShowProgram';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
class RssTelkkuChannel extends Component
{
	constructor(props)
	{
        super(props);
        if(Config.bDebug) 
        {
            console.log("RssTelkkuChannel.js");
            console.log("props");
            console.log(props);
        }

        this.state = {
            errmsg: null,
            channels: [],
            currentchannel: null,
            displayAllDescriptions: props.displayAllDescriptions,
        }
    }

    componentWillReceiveProps(nextProps) 
	{
	  if (Config.bDebug)
	  {
		console.log("RssTelkkuChannel componentWillReceiveProps nextProps"); 
		console.log(nextProps); 				
	  }

      this.setState({ displayAllDescriptions: nextProps.displayAllDescriptions
					});
/*	  if (!nextProps.tabClassHide)
		this.initializeState(nextProps);
			//	this.forceUpdate();            
			*/
	}

    render(props, state) {
       // const cssDark = useContext(CssDark);
        let displayitems = null;
        /*
        	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
		jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
		jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
		jsonitem.link =
        */
        if (props.data.channelprograms !== null)
            displayitems = props.data.channelprograms.map((program, i) => {
				return <ShowProgram id={i} data={program}
                    displayAllDescriptions={state.displayAllDescriptions}
                    getPOfIndex={props.getPOfIndex}
                    themevalue={props.themevalue}
                    showSearch={props.showSearch == undefined ? false : props.showSearch}
                    channel={props.data.title.replace("Telkussa: ", "")} />;
			});

        return (           
            <div>{displayitems}</div>
          );
   }
}

export default RssTelkkuChannel;