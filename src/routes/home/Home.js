import { h, Component, createRef } from 'preact';
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
import 'preact-material-components/List/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
//import 'preact-material-components/List/style.css';
//import 'preact-material-components/Menu/style.css';
import 'preact-material-components/Select/style.css';
// import AbortController from "abort-controller";
import style from './style';
import Config from '../../utils/Config';

// import 'whatwg-fetch';
import { fetchJsonp } from 'fetch-jsonp';

// import Category from './Category';
// import GridOrList from './GridOrList';
import YleHtml from '../../components/ylehtml/YleHtml';
import Telkku from '../../components/telkku/Telkku';
import HtmlTelkku from '../../components/telkku/HtmlTelkku';
import Amppari from '../../components/amppari/Amppari';
import HtmlAmppari from '../../components/amppari/HtmlAmppari';

// import StaticFunctions from '../../utils/StaticFunctions';

export default class Home extends Component {

	store = null;
	currentProgsourceCntrl = null;

	constructor(props)
	{
		super(props);
		if(Config.bDebug) 
		{
			console.log("Home.js");
			console.log("props");
			console.log(props);
		}

		this.store = props.store;

		this.state = {
			errmsg: null,
			selectedcategory: null,
			chosenIndex: 0,
			yleapiparams: props.yleapiparams,
			fetchcategory_offset: 0,
			fetchcategory_limit: 0,
			fetchcategory_count: 0,
			progtitle: 'Tv-ohjelmat',
			progsource: 'radio_yle',
			progtable: 'rday',
			currentDate: Date.now(),
			bCategoryQueryReady: true,
		}

		/*
		this.fetchProgCategoryData = this.fetchProgCategoryData.bind(this);
		*/
		this.radioProgSourceChanged = this.radioProgSourceChanged.bind(this);

		// this.categoryfieldRef = createRef(); 
	 }

	componentDidMount()
	{
		if(Config.bDebug) 				
			console.log("componentDidMount 1");
		// this.fetchProgCategories();		
	}

	handleErrors(response) {
        if (!response.ok) {
			// throw Error(response.statusText);
			throw Error(response.status);
        }
        return response;
	}

	/*
		'Origin': 'localhost:8080',
			'User-Agent': 'curl/7.55.1',
			'Host': 'external.api.yle.fi',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Cross-Origin-Resource-Policy': 'cross-origin',
			'Access-Control-Allow-Methods': 'GET,OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type'
*/	
	
	getProgTitle(){
		let ret = null;
		switch(this.state.progsource)
		{
			case 'radio_yle': ret = 'Yle';
				break;
			case 'radio_telkku': ret = 'Telkku tv ohjelmat';
				break;
			case 'radio_telkkuhtml': ret = 'Avaa Telkku tv sivu';
				break;
			case 'radio_amppari': ret = 'Amppari tv ohjelmat';
				break;
			case 'radio_htmlamppari': ret = 'Avaa Amppari tv sivu';
				break;
			default: ret = 'Tv-ohjelmat';
				break;
		}

		return ret;
	}

	radioProgSourceChanged(event){
		// event.preventDefault();
//		if (!this.state.bCategoryQueryReady)
//			return;
		var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;
		if (Config.bDebug)
		{	
			console.log("currentCheckedRadio");
			console.log(name);
		}
		if (name == '') return;
        if (name !== 'optsource') return;
        var id = currentCheckedRadio.id;
		if (Config.bDebug)
		{	
			console.log("currentCheckedRadio");
			console.log(id);
		}
		if (this.currentProgsourceCntrl)
			this.currentProgsourceCntrl.removelisteners();
		this.setState({ progsource: id });
	}
	
	render(props, state) {
		let title = this.getProgTitle();	
		let progcomponent = null;
		if (state.bCategoryQueryReady)
		{
			if (state.progsource === 'radio_yle')
				progcomponent = <YleHtml store={this.store} 
				                  ref={this.currentProgsourceCntrl} />
			else
			if (state.progsource === 'radio_telkku')
				progcomponent = <Telkku store={this.store}
									ref={this.currentProgsourceCntrl}/>;		
			else
			if (state.progsource === 'radio_telkkuhtml')
				progcomponent = <HtmlTelkku store={this.store}
									ref={this.currentProgsourceCntrl}/>;		
			else
			if (state.progsource === 'radio_amppari')
				progcomponent = <Amppari store={this.store}
									ref={this.currentProgsourceCntrl}/>;
			else
			if (state.progsource === 'radio_htmlamppari')
				progcomponent = <HtmlAmppari store={this.store}
								ref={this.currentProgsourceCntrl}/>;
		}
				
		return (
			<div class={`${style.home} page`}>
				<h1 tabIndex="0" >{title}</h1>
				<Card>
					<div class={style.cardHeader}>
						<div class=" mdc-typography--caption">Mistä ohjelmia</div>
						<br/>
					</div>	
					<div style={{ "background-color": 'red', color: "yellow" } }>{state.errmsg}</div>				
				</Card>
				{progcomponent}
			</div>
		);
	}
}

/*
						<FormField>
							<Radio id="radio_yle" name='optsource' 
							    checked={state.progsource == 'radio_yle'}
								onChange={this.radioProgSourceChanged} ></Radio>
							<label for="radio_yle">Yle</label>
						</FormField>
*/