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
import AbortController from "abort-controller";
import style from './style';
import Config from '../../utils/Config';
import store from '../../utils/store';

// import 'whatwg-fetch';
import { fetchJsonp } from 'fetch-jsonp';

// import Category from './Category';
// import GridOrList from './GridOrList';
import Yle from '../../components/yle/Yle';
import Telkku from '../../components/telkku/Telkku';
import HtmlTelkku from '../../components/telkku/HtmlTelkku';
import Amppari from '../../components/amppari/Amppari';
import HtmlAmppari from '../../components/amppari/HtmlAmppari';


// import StaticFunctions from '../../utils/StaticFunctions';

export default class Home extends Component {

	categoryfieldRef = null;
	fetch_url_categories = null;
	abortController = null;
    abortSignal = null;

	constructor(props)
	{
		super(props);
		if(Config.bDebug) 
		{
			console.log("Home.js");
			console.log("props");
			console.log(props);
		}

		this.state = {
			categories: [],
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
			bCategoryQueryReady: false,
		}

		this.fetchProgCategoryData = this.fetchProgCategoryData.bind(this);
		this.radioProgSourceChanged = this.radioProgSourceChanged.bind(this);
				
		this.categoryfieldRef = createRef();  
		this.fetch_url_categories = Config.yleserverurl 
			   +"programs/categories.json" +this.state.yleapiparams;
	 }

	 async componentDidMount()
	{
		if(Config.bDebug) 				
			console.log("componentDidMount 1");
		this.abortController = new AbortController(); // 1        
		this.abortSignal = this.abortController.signal; // 2	
		this.fetchProgCategories();		
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
	fetchProgCategoryData (data) 
	{
		if(Config.bDebug) 
		{
			console.log("fetchProgCategoryData 2");
			console.log("data 2");
			console.log(data);
		}
		const categories = data.data;	
		if(Config.bDebug) 
		{	
			console.log("categories 2.1");
			console.log(categories);
		}
		let newstatecat = [...this.state.categories, ...categories];
		this.setState({ categories: newstatecat, errmsg: null, 
					 }); 
	}	

	getCategoryOffset(offset)
	{
		let ret = "&offset=" +(offset === null || offset === undefined ? 0 : offset);
		// ret = ret +"&callback=fetchProgCategoryData";
		return ret;
	}
	
	fetchProgCategories = () =>
	{
	   this.oneFetchOfProgCategories(this.state.fetchcategory_offset);
	}

	makeCategoryFetch = async (offset) =>
	{
		if(Config.bDebug) 
			console.log(this.fetch_url_categories +this.getCategoryOffset(offset));

		const response = fetchJsonp(this.fetch_url_categories +this.getCategoryOffset(offset), {
			method: 'GET',
			timeout: 6000,
//			jsonpCallbackFunction: 'fetchProgCategoryData',
			headers: {"Content-Type": "application/json; charset=UTF-8", 
			'Accept': '*/*',
			'SameSite': 'Lax',
			},
			signal: this.abortSignal,
			 });
			if (!response.ok) {
				throw Error(response.statusText);
			}
			if (Config.bDebug)
			{				
				console.log("response");
				console.log(response);
			}
			let data = await response.json();
			console.info("response data");
			console.info(data);
			return data;
	}

	oneFetchOfProgCategories2 = async (offset, prevdata) =>
	{
//		this.fetch_url_categories = "http://localhost:8080/tvprogram/categories";

		if (Config.bDebug)
		{	
			console.log("oneFetchOfProgCategories2");
			console.log("offset");
			console.log(offset);
		}		
		// console.log(this.fetch_url_categories +this.getCategoryOffset(offset));

		// 			credentials: 'include',	

		let ret = null;
	//	this.fetch_url_categories = "http://localhost:9090/graphdbdesign/serverexists";
	try {
			const data = this.makeCategoryFetch(offset);
			console.info("response data");
			console.info(data);
			this.setState({
				categories: data.data,
				selectedcategory: data.data[0]
            });
			ret = response;
		   } catch (error) {
		console.error("error");
		console.error(error);
		this.setState({ errmsg: error.toString() })
		return null;
	  }
		return await ret;
	}

	// makeGetQuery = async (addressparam, targetparam, userstartimeparam) =>
	oneFetchOfProgCategories = async (offset) =>
	{
//		this.fetch_url_categories = "http://localhost:8080/tvprogram/categories";

		if(Config.bDebug) 
		{	
			console.log("fetchProgCategories");
			console.log("offset");
			console.log(offset);			
			console.log(this.fetch_url_categories +this.getCategoryOffset(offset));
		}
		// 			credentials: 'include',	

		let ret = null;
	//	this.fetch_url_categories = "http://localhost:9090/graphdbdesign/serverexists";
		await fetchJsonp(this.fetch_url_categories +this.getCategoryOffset(offset), {
			method: 'GET',
//			jsonpCallbackFunction: 'fetchProgCategoryData',
			headers: {"Content-Type": "application/json; charset=UTF-8", 
			'Accept': '*/*',
			'SameSite': 'Lax',
			},
			signal: this.abortSignal,
			 })
		.then(this.handleErrors)
		.then(response => { return response.json();})
		.then(data => { 
			let categories = data.response;	
			let meta = data.meta;
			if(Config.bDebug) 
				{
					console.log("fetchProgCategories 1.5"); 
					console.log(data); 
					console.log("categories 2");
					console.log(categories);			
				}
				if (offset === 0)
				{
					const allOption = {
						"id": "5-all",
						"title": {
						  "fi": "Kaikki",
						  "sv": "Alle"
						},
						"inScheme": "areena-content-classification",
						"type": "Concept",
						"key": "noneoption",
						"indexDataModified": "2016-01-21T13:28:44.226+02:00"
					  };
					categories.splice(0, 0, allOption);
					let newstatecat = categories;
					let metaoffset = meta.offset;
					if (metaoffset === 0)
						metalimit = meta.limit;
					this.setState({ categories: newstatecat, errmsg: null, 
						selectedcategory: categories[0], fetchcategory_offset: metaoffset,
						fetchcategory_limit: meta.limit, fetchcategory_count: meta.count,
								 }); 			
					 if(Config.bDebug)
					 {
						 console.log("newstatecat 1.5"); 
						 console.log(newstatecat); 
						 console.log("meta 1.5"); 
						 console.log(meta); 
					 }
					 //--> ret = { "data": newstatecat, "meta": meta };
					 // ret = newstatecat;
					 /*
					 this.oneFetchOfProgCategories(this.state.fetchcategory_offset, this.state.categories);
					 */
					if (parseInt(meta.count) > parseInt(meta.limit))
						this.oneFetchOfProgCategories(meta.limit);	
					else
					{
						this.setState({ bCategoryQueryReady: true })
						store.setState({categories: this.state.categories});
						/*
						let storestate = store.getState();
						if(Config.bDebug) 
						{
							  console.log("storestate 1.5 2"); 
							  console.log(storestate); 
						}
						*/
					}
				}
				else
				{
					/*
					let newcategories = categories;
					if (prevdata !== null)
						newcategories = [...prevdata, ...categories];
						*/
						let newstatecat = [...this.state.categories, ...categories];
						let metaoffset = meta.offset;
						if (metaoffset === 0)
							metalimit = meta.limit;
							this.setState({ categories: newstatecat, errmsg: null,
							fetchcategory_offset: metaoffset, fetchcategory_count: meta.count,
							fetchcategory_limit: meta.limit });
						if(Config.bDebug) 
						{
							console.log("newstatecat 1.5 2"); 
							console.log(newstatecat); 
							console.log("meta -- 1.5"); 
					//		console.log(meta); 
						}
//						if (meta.count > meta.limit)
//						  	  await this.oneFetchOfProgCategories(meta.limit, newstatecat);
						let newoffset = parseInt(meta.offset) +parseInt(meta.limit);
						if(Config.bDebug) 
						{
							  console.log("newoffset 1.5 2"); 
							  console.log(newoffset); 
							  console.log("meta.count 1.5 2"); 
							  console.log(meta.count); 
						}
						if (newoffset < parseInt(meta.count))
							 this.oneFetchOfProgCategories(newoffset);						
						else
						{
							this.setState({ bCategoryQueryReady: true })
							store.setState({categories: this.state.categories});
							/*
							const storestate = store.getState();
							if(Config.bDebug) 
							{
								  console.log("storestate 1.5 2"); 
								  console.log(storestate); 
							}
							*/
						}
						//--> ret = { "data": newstatecat, "meta": meta };
						// ret = newstatecat;
				} 
		}) 
		.catch((error) => {
			console.error("error");
			console.error(error);
			this.setState({ errmsg: error.toString() })
			return null;
		})
		;			
		// return await ret;
		return ret;
	}

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
        if (name !== 'opttv') return;
        var id = currentCheckedRadio.id;
		if (Config.bDebug)
		{	
			console.log("currentCheckedRadio");
			console.log(id);
		}
		this.setState({ progsource: id });
	}
	
	render(props, state) {
		let title = this.getProgTitle();	
		let progcomponent = null;
		if (state.bCategoryQueryReady)
		{
			if (state.progsource === 'radio_yle')
				progcomponent = <Yle yleapiparams={props.yleapiparams} />
			else
			if (state.progsource === 'radio_telkku')
				progcomponent = <Telkku />;		
			else
			if (state.progsource === 'radio_telkkuhtml')
				progcomponent = <HtmlTelkku />;		
			else
			if (state.progsource === 'radio_amppari')
				progcomponent = <Amppari />;
			else
			if (state.progsource === 'radio_htmlamppari')
				progcomponent = <HtmlAmppari />;
		}
				
		return (
			<div class={`${style.home} page`}>
				<h1>{title}</h1>
				<Card>
					<div class={style.cardHeader}>
						<div class=" mdc-typography--caption">Mistä ohjelmia</div>
						<FormField>
							<Radio id="radio_yle" name='opttv' 
							    checked={state.progsource == 'radio_yle'}
								onChange={this.radioProgSourceChanged} ></Radio>
							<label for="radio_yle">Yle</label>
						</FormField>
						<FormField>
							<Radio id="radio_telkku" name='opttv' 
							    checked={state.progsource == 'radio_telkku'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="radio_telkku">Telkku</label>
						</FormField>
						<FormField>
							<Radio id="radio_telkkuhtml" name='opttv' 
							    checked={state.progsource == 'radio_telkkuhtml'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="radio_telkkuhtml">Telkku html</label>
						</FormField>
						<FormField>
							<Radio id="radio_amppari" name='opttv' 
							    checked={state.progsource == 'radio_amppari'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="radio_amppari">Amppari tv</label>
						</FormField>
						<FormField>
							<Radio id="radio_htmlamppari" name='opttv' 
							    checked={state.progsource == 'radio_htmlamppari'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label for="radio_htmlamppari">Amppari tv html</label>
						</FormField>						
						<br/>
					</div>	
					<div style={{ "background-color": 'red', color: "yellow" } }>{state.errmsg}</div>				
				</Card>
				{progcomponent}
			</div>
		);
	}
}
