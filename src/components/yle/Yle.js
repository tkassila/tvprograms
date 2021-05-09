import { h } from 'preact';
import { useState } from 'preact/hooks';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import Select from 'preact-material-components/Select';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';
import AbortController from "abort-controller";
import style from './style';
import Config from '../../utils/Config';
// import 'whatwg-fetch';
import { fetchJsonp } from 'fetch-jsonp';
import dayjs from 'dayjs';

import axios  from 'axios';


// import Category from './Category';
// import GridOrList from './GridOrList';
import DayServices from './DayServices';
// import jsonp from '../../utils/jsonp';
import YleMedia from './YleMedia';


// import StaticFunctions from '../../unpm install axios-jsonptils/StaticFunctions';

export default function Yle(props) {

    const [progsource, setProgsource] = useState('rtv');

	const radioProgSourceChanged = (event) =>
	{
		var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;
		if (Config.bDebug)
		{	
			console.log("currentCheckedRadio");
			console.log(name);
		}
        if (name !== 'opttv') return;
        var id = currentCheckedRadio.id;
		if (Config.bDebug)
		{	
			console.log("currentCheckedRadio");
			console.log(id);
		}
		setProgsource(id);
	}

	return (			
			<div >
						<h1>Yle</h1>
						<div class={style.cardHeader}>
						<div class=" mdc-typography--caption">Mistä ohjelmia</div>
						<FormField>
							<Radio id="rtv" name='optsource' checked={progsource === 'rtv'}
								onChange={this.radioProgSourceChanged} ></Radio>
							<label for="rtv">TV</label>
						</FormField>
						<FormField>
							<Radio id="rradio" name='optsource' checked={progsource === 'rradio'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="rradio">Radio</label>
						</FormField>
						<FormField>
							<Radio id="rareena" name='optsource'  checked={progsource === 'rareena'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="rareena">Areena tms</label>
						</FormField>
						</div>
						<YleMedia progsource={progsource} yleapiparams={props.yleapiparams} />
			</div>
		);
}

// <YleMedia progsource={progsource} yleapiparams={props.yleapiparams} />
