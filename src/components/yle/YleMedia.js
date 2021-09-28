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
// import 'whatwg-fetch';
import { fetchJsonp, generateCallbackFunction } from 'fetch-jsonp';
import dayjs from 'dayjs';

// import Category from './Category';
// import GridOrList from './GridOrList';
import DayServices from './DayServices';
//import jsonp from '../../utils/jsonp';
import store from '../../utils/store';

// import StaticFunctions from '../../unpm install axios-jsonptils/StaticFunctions';

export default class YleMedia extends Component {

	categoryfieldRef = null;
	fetch_url_categories = null;
	fetch_url_series = null;
	abortController = null;
    abortSignal = null;
	fetch_url_progschedules = null;

	currentservice = null;
	services = null;
	indService = -1;
	callbackName = 'jsonp_callback_schedules'; 

	constructor(props)
	{
		super(props);
		if(Config.bDebug) 
		{
			console.log("Yle.js");
			console.log("props");
			console.log(props);
		}

		const storestate = store.getState();
		const cnst_categories = storestate.categories;
		if(Config.bDebug) 
		{
			console.log("storestate");
			console.log(storestate);
			console.log("cnst_categories");
			console.log(cnst_categories);
		}

		let today = new Date(Date.now());
		this.state = {
			categories: cnst_categories,
			errmsg: null,
			selectedcategory: cnst_categories[0],
			chosenIndex: 0,
			yleapiparams: props.yleapiparams,
			progsource: props.progsource,
			bShowDesciption: false,
			progtable: 'rday',
			programs: null,
			currentDate: Date.now(),
			services: [],
			selecteddate: null,
			bShowTableBorder: false,
			offset: 0,
			currentservice: null,
			indService: -1,
			bSchedulesQueryReady: false,
			schedules: {},
			bSvLang: false,
			bSchedulesRead: false,
		}

		this.radioProgTableChanged = this.radioProgTableChanged.bind(this);
		this.fetchProgServicesData = this.fetchProgServicesData.bind(this);
		this.fetchSchedulesData = this.fetchSchedulesData.bind(this);
				
		this.categoryfieldRef = createRef();
		this.fetch_url_categories = Config.yleserverurl 
			   +"programs/categories.json" +this.state.yleapiparams;
		this.fetch_url_series = Config.yleserverurl 
				+"programs/services.json" +this.state.yleapiparams;				
		this.fetch_url_progschedules = Config.yleserverurl
			+"programs/schedules.json" +this.state.yleapiparams;

		store.setStateNoneCallListeners({ schedules: {}, shedulescount: 0, 
			shedulescallcount: 0, indService: -1,
			selecteddate: null });

		let callbackName = this.callbackName;
		let callback = data => this.fetchSchedulesData(data);
		/*
		delete window[callbackName];
		window[callbackName] = function(data) {
		//	  delete window[callbackName];
		//	  document.body.removeChild(script);
			  console.log("jsonp_callback_schedules");
			  console.log("data");
			  console.log(data);
			  callback(data);
		};
		*/
			if(Config.bDebug) 
			{
				console.log("selectedcategory");
				console.log(this.state.selectedcategory);				
			}

	 }

	componentDidMount()
	{
		if(Config.bDebug) 				
			console.log("componentDidMount 1");
		this.abortController = new AbortController(); // 1        
		this.abortSignal = this.abortController.signal; // 2
		this.fetchProgServices(this.state.progsource);		
		// if (this.state.currentservice != null)
			// this.getAllServicesPrograms(this.state.currentservice, 0);	
       // this.createUiGrid();
	}

	componentWillUnmount()
	{
		this.abortController.abort();
		this.setState({});
		store.setStateNoneCallListeners({fetchitems: [], channeltypeitems: [],
			programtypeitems: [], categories: [], schedules: [],
		     });
	}

	componentWillReceiveProps(nextProps) 
	{
	  if (Config.bDebug)
	  {
		console.log("YleMedia componentWillReceiveProps nextProps"); 
		console.log(nextProps); 				
	  }

      if (this.state.progsource != nextProps.progsource)
      {        
          this.setState({ progsource: nextProps.progsource, schedules: {}, 
			services: [], uigrid: null, bSchedulesQueryReady: false,
            currentservice: null});
            if(Config.bDebug) 
            {	
                console.log("progsource 2");
                console.log(this.state.progsource);
            }    
           this.fetchProgServices(nextProps.progsource);		
          // this.createUiGrid();
      }                    
        /*	  
//      this.setState({ categories: nextProps.categories,						
//						progsource: nextProps.progsource,//
//						selectedcategory: nextProps.selectedcategory
//					});
/*	  if (!nextProps.tabClassHide)
		this.initializeState(nextProps);
			//	this.forceUpdate();            
			*/
	}

	fetchProgServicesData (data) 
	{
		if(Config.bDebug) 
		{	
			console.log("fetchProgServicesData 2");
			console.log("data 2");
			console.log(data);
		}
		const services = data.data;		
		if (Config.bDebug)
		{				
			console.log("services 2");
			console.log(services);
		}		
		this.currentservice = services[0];
		this.setState({ services: services, errmsg: null, currentservice: this.currentservice, indService: 0
					 }); 
	}

	getAllServicesPrograms = (currentservice, indService) =>
	{
		if (Config.bDebug)
		{				
			console.log("getAllServicesPrograms 2");
			console.log("currentservice");
			console.log(currentservice);
			console.log("this.services");
			console.log(this.services);
			console.log("this.indService");
			console.log(indService);
		}

		let index = indService;
		this.setState({ offset: 0 });
		let offset = 0;
		if (this.services == null)
			return;

		store.setStateNoneCallListeners({ arr_genereatedfuncid: {} });

		let i, max = this.services.length;
		for(i=0; i < max; i++)
		{
			currentservice = this.services[i];
			if (currentservice == undefined || currentservice == null)
				continue;
			this.indService = i;
			store.setStateNoneCallListeners({ indService: i });
	
			this.currentservice = currentservice;
			this.setState({ currentservice: currentservice });
			offset = 0;
			this.makeSchedulesFetch(currentservice, offset, i);
			if (Config.bDebug)
			{				
				console.log("getAllServicesPrograms 3");
				console.log("currentservice 2");
				console.log(currentservice);
			}
			break;
		}

		// this.setState({ bSchedulesQueryReady: true });		
	}

	getTypeParamAndValue = (progsource) =>
	{
		let ret = "";
        let pprogsource = progsource;
        if (pprogsource === undefined)
            pprogsource = this.state.progsource;
		if (pprogsource != null && pprogsource != undefined)
		{
			let typevalue = "";
            if (pprogsource === 'rtv')
                typevalue = 'tvchannel';
            else
			if (pprogsource === 'rradio')
                typevalue = 'radiochannel';
            else
            if (pprogsource === 'rareena')
                typevalue = 'ondemandservice' ;
            else
                typevalue = 'webcastservice';

			ret = "&type=" +typevalue;
		}
		return ret;
	}

	fetchProgServices = (progsource) =>
	{
//		this.fetch_url_categories = "http://localhost:8080/tvprogram/categories";

        if(Config.bDebug) 
		{	
			console.log("fetchProgServices");
			console.log(this.fetch_url_series +this.getTypeParamAndValue(progsource));
		}

		fetchJsonp(this.fetch_url_series +this.getTypeParamAndValue(progsource),
		 {
			timeout: 6000,
			headers: { "Content-Type": "application/json; charset=UTF-8", 
			'Accept': '*/*', // application/rss+xml
			'SameSite': 'Lax',
		 	}
		 })
		.then(this.handleErrors)
		.then(response => { return response.json();})
		.then(data => { 
			let services = data.data;		
			if(Config.bDebug) 
				{
					console.log("fetchProgseries 1.5"); 
					console.log(data); 
					console.log("services 2");
					console.log(services);	
					console.log(typeof services);		
				}				
				const currentservice = services[0];
                this.currentservice = currentservice;
				this.services = services;
				this.setState({ services: services, errmsg: null, 
                    currentservice: currentservice, indService: 0
							 }); 
				if (currentservice != null)
                {
					this.getAllServicesPrograms(currentservice, 0);
                }

		}) 
		.catch((error) => {
			console.error("error");
			console.error(error);
			this.setState({ errmsg: error.toString() })
			return;
		});
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

	radioProgTableChanged(event){
		var currentCheckedRadio = event.target;
        var name = currentCheckedRadio.name;
		if (Config.bDebug)
		{				
			console.log("radioProgTableChanged");
			console.log(name);
		}
        if (name !== 'opttable') return;
        var id = currentCheckedRadio.id;
		if (Config.bDebug)
		{				
			console.log("currentCheckedRadio");
			console.log(id);
		}
		this.setState({ progtable: id });
        this.createUiGrid();
	}

	getWeekGrid = () =>
    {
        return <div>
        <LayoutGrid>
            <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">Maanantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Tiistai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Keskiviikko</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Torstai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Perjantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Lauantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Sunnuntai</LayoutGrid.Cell>
            </LayoutGrid.Inner>
            <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">1 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">2 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">3 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">4 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">5 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">6 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">7 cell</LayoutGrid.Cell>
            </LayoutGrid.Inner>
        </LayoutGrid>
        </div>;

    }

	getListGrid = () =>
    {
        return <div>
        <LayoutGrid>
            <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">L Maanantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">L Tiistai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Keskiviikko</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Torstai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Perjantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Lauantai</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">Sunnuntai</LayoutGrid.Cell>
            </LayoutGrid.Inner>
            <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="1">1 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">2 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">3 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">4 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">5 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">6 cell</LayoutGrid.Cell>
            <LayoutGrid.Cell cols="1">7 cell</LayoutGrid.Cell>
            </LayoutGrid.Inner>
        </LayoutGrid>
        </div>;

    }

    getDayGrid = () =>
    {
        return <DayServices selecteddate={this.state.selecteddate} data={this.state.services}
					progsource={this.state.progsource} yleapiparams={this.state.yleapiparams}
					selectedcategory={this.state.selectedcategory} schedules={this.state.schedules}
					bShowTableBorder={this.state.bShowTableBorder} bSvLang={this.state.bSvLang}
					bShowDesciption={this.state.bShowDesciption}
				/>;
    }

	getFetchedDate = () =>
	{
		if (Config.bDebug)
		{
			console.log("getFetchedDate");
			console.log("this.state.selecteddate");
			console.log(store.getState().selecteddate);
		}
		let today = store.getState().selecteddate;
		if (today == null || today == undefined)
			return "";

		if (typeof today === 'string')
			today = Date.parse(store.getState().selecteddate);
		let days  = today.getDate();
		let month  = today.getMonth()+1;
		let year  = today.getFullYear();
		if (days < 10)
			days = "0" +days;
		if (month < 10)
			month = "0" +month;
		const ret = "" +days +"." +month +"." +year;
		return ret;
	}

	onClickSetDateString = (event) =>
	{
		event.preventDefault();
		let dayparameter = event.target.id;
		console.log("onClickSetDateString");
		console.log("dayparameter");
		console.log(dayparameter);
		const search = 'dayname_';
		let ind = dayparameter.indexOf(search);
		if (ind > -1)
			dayparameter = dayparameter.substring(ind +search.length);
		const selDate = new Date(Date.parse(dayparameter));
		console.log("dayparameter");
		console.log(dayparameter);
		console.log("selDate");
		console.log(selDate);
		console.log("this.state.selecteddate");
		console.log(this.state.selecteddate);

		/*
		if (this.state.selecteddate.getFullYear() === selDate.getFullYear()
		    && this.state.selecteddate.getMonth() === selDate.getMonth()
			&& this.state.selecteddate.getDay() === selDate.getDay())
			return;
		*/
		const today = new Date(Date.now())
		if (selDate.getDate() !== today.getDate())
		{
			if (this.checkshowdcurrentprogramsRef.value)
			{
				this.checkshowdcurrentprogramsRef.current.value = false;
				this.setState({ bshowdcurrentprograms: false});
			}
			this.checkshowdcurrentprogramsRef.current.disabled = true;
			/*
						if (this.checkshowdcurrentprogramsRef.current.MDComponent.checked)
			{
				this.checkshowdcurrentprogramsRef.current.MDComponent.checked = false;
				this.setState({ bshowdcurrentprograms: false});
			}
			*/
		}
		else
		if (this.checkshowdcurrentprogramsRef.current.disabled == true)
			this.checkshowdcurrentprogramsRef.current.disabled = false;

        const emptyservices = [];
		this.setState({ selecteddate: selDate,
            services: emptyservices, schedules: {}, currentservice: null 
        });
		store.setStateNoneCallListeners({
			selecteddate: selDate
		});		
        this.fetchProgServices(this.state.progsource);
	}

    createUiGrid = () =>
    {
        let uigrid = null;	
        if (this.state.bSchedulesQueryReady && 
            this.state.services != null && this.state.services.length > 0
			&& this.state.schedules != null && this.state.schedules.length > 0)
        {
            if (this.state.progtable == 'rweek')
                uigrid = this.getWeekGrid();
            else
            if (this.state.progtable == 'rday')
                uigrid = this.getDayGrid();
            else
            if (this.state.progtable == 'rlist')
                uigrid = this.getListGrid();
        }
        this.setState({uigrid: uigrid });
    }

	getPlus1DayId = (plusdaynumber) =>
	{
		const today = dayjs();
		let plusdate = today;
		if (plusdaynumber > 0)
			plusdate = today.add(plusdaynumber, 'days');
		const ret = plusdate.format("YYYY-MM-DD"); // pvm=2021-02-22
		return ret;
	}

	getPlus1Day = (plusdaynumber) =>
	{
		const today = dayjs();
		let plusdate = today;
		if (plusdaynumber > 0)
			plusdate = today.add(plusdaynumber, 'days');
		const weekday = new Date(plusdate).getDay();
		let weekdayname = "";
		switch(weekday)
		{
			case 1: weekdayname = 'Ma'; break;
			case 2: weekdayname = 'Ti'; break;
			case 3: weekdayname = 'Ke'; break;
			case 4: weekdayname = 'To'; break;
			case 5: weekdayname = 'Pe'; break;
			case 6: weekdayname = 'La'; break;
			case 0: weekdayname = 'Su'; break;
		}  
		const ret = weekdayname +" " +plusdate.format("DD.MM.YYYY"); // pvm=2021-02-22
		return ret;
	}

	fetchSchedulesData(data)
	{
		if(Config.bDebug) 
		{	
			console.log("fetchSchedulesData");
			console.log("data");
			console.log(data);
		}
		const schedules = data.data;
		const meta = data.meta;		
		if (Config.bDebug)
		{				
			console.log("schedules 2");
			console.log(schedules);
			console.log(typeof schedules);
		}		
		let metaoffset = meta.offset;
		let metalimit = 0;
		if (metaoffset === 0)
			metalimit = meta.limit;

		let newschedules = [...store.getState().schedules, ...schedules];
		store.setStateNoneCallListeners({ schedules: newschedules }); 
		// this.setState({ schedules: newschedules, errmsg: null, 
			//		 }); 
		if (parseInt(meta.count) > parseInt(metaoffset))
			this.makeSchedulesFetch(meta.count);	
	}

	getStartTime = (date) =>
	{
		let modTimeDate = date;
		console.log("getStartTime");
		console.log("date");
		console.log(date);
		console.log("typeof date");
		console.log(typeof date);
		// Object.assign(modTimeDate, date);
		modTimeDate.setHours(0);
		modTimeDate.setMinutes(0);
		modTimeDate.setSeconds(1);
		//const ret = new Date(modTimeDate.getTime() - modTimeDate.getTimezoneOffset() * 60000).toISOString());
		// const ret = this.converDateToLocalTime(modTimeDate);
		/*
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var localISOTime = (new Date(modTimeDate - tzoffset)).toISOString().slice(0, -1); 
		const ret = localISOTime; // dateFormat(modTimeDate, this.formatForServiceTime);
		*/
		const ret = new Date(modTimeDate.toString().split('GMT')[0]+' UTC').toISOString();
		console.log("getStartTime");
		console.log(ret);
		return ret;
	}

	converToLocalTime = (serverDate) => 
	{

		var dt = new Date(Date.parse(serverDate));
		var localDate = dt;
		
		var gmt = localDate;
			var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
			var localNow = new Date().getTimezoneOffset(); // get the timezone
			// offset in minutes
			var localTime = min - localNow; // get the local time
	
		var dateStr = new Date(localTime * 1000 * 60);
		// dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
		dateStr = dateStr.toString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		return dateStr;
	}

	converDateToLocalTime = (serverDate) => 
	{

		var dt = serverDate;
		var localDate = dt;
		
		var gmt = localDate;
			var min = gmt.getTime() / 1000 / 60; // convert gmt date to minutes
			var localNow = new Date().getTimezoneOffset(); // get the timezone
			// offset in minutes
			var localTime = min - localNow; // get the local time
	
		var dateStr = new Date(localTime * 1000 * 60);
		// dateStr = dateStr.toISOString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"); // this will return as just the server date format i.e., yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
		dateStr = dateStr.toString("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
		return dateStr;
	}

	getEndTime = (date) =>
	{
		let modTimeDate = date;
	//	Object.assign(modTimeDate, date);
		modTimeDate.setHours(23);
		modTimeDate.setMinutes(59);
		modTimeDate.setSeconds(59);
		/*
		var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
		var localISOTime = (new Date(modTimeDate - tzoffset)).toISOString().slice(0, -1); 
		const ret = localISOTime; // dateFormat(modTimeDate, this.formatForServiceTime);
		*/		
		// const ret = new Date(modTimeDate.getTime() - modTimeDate.getTimezoneOffset() * 60000).toISOString());
		// const ret = this.converDateToLocalTime(modTimeDate);
		const ret = new Date(modTimeDate.toString().split('GMT')[0]+' UTC').toISOString();
		console.log("getEndTime");
		console.log(ret);
		return ret;
	}

	getSchedulesOffsetAndParams = (currentservice, offset) =>
	{
		let ret = "&service=" +currentservice.id;
		if (this.state.selectedcategory != null && this.state.selectedcategory.title.fi != 'Kaikki')
			ret = ret +"&category=" +this.state.selectedcategory.id;
		if (this.state.selecteddate != undefined && this.state.selecteddate != null)
		{
			ret = ret +"&starttime=" +this.getStartTime(this.state.selecteddate);
			if (this.state.selectedenddate != undefined && this.state.selectedenddate != null)
				ret = ret +"&endtime=" +this.getEndTime(this.state.selectedenddate);
			else
				ret = ret +"&endtime=" +this.getEndTime(this.state.selecteddate);
		}
		ret = ret +"&offset=" +offset.toString(); 
		// ret = ret +"&callback=fetchProgCategoryData";
		// ret = ret +"&limit=10";
		//ret = '&service=yle-areena&mediaobject=video&limit=1';
		return ret;
	}

	convertSchedulesIntoRealObject = (schedules) =>
	{
		let respserv = null, respCurrentService = null, respIndService = -1;
		let newschedules = [], newobj = {};

		for (var key in schedules) {
			respserv = this.getResponseIndServcieAndCurrentService(key);
			if (respserv != null)
			{
				respCurrentService = respserv.respCurrentService;
				respIndService = respserv.respIndService;
				if (respCurrentService != null)
				{
					newobj = {};
					newobj.service = respCurrentService;
					newobj.schedules = schedules[key];
					newschedules.push(newobj);
				}
			}
		}
		return newschedules;
	}

	getResponseIndServcieAndCurrentService = (serviceid) =>
	{
		let respIndService = -1;
		let respCurrentService = null;
		let i = 0;
		let max = this.state.services.length;
		for(i = 0; i < max; i++)
		{
			if (this.state.services[i].id === serviceid)
			{
				respIndService = i;
				respCurrentService = this.state.services[i];
				break;
			}
		}
		let ret = {};
		ret.respCurrentService = respCurrentService;
		ret.respIndService = respIndService;
		return ret;
	}

	sleep = (ms) =>
	{
		return new Promise(resolve => setTimeout(resolve, ms));
	}

    isEmptyHash = (abc) => {
		for(var prop in abc) {
			if(abc.hasOwnProperty(prop))
				return false;
		}
		return true;
	}

	typeOf = (obj) => {
		return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
	}

	makeSchedulesFetch = async (currentservice, offset, indService) =>
	{
			/*
			jsonp(
				this.fetch_url_progschedules +this.getSchedulesOffsetAndParams(offset),
				response => { 
					const json = JSON.parse(response.data);
					if(Config.bDebug) 
					{
						console.log("makeSchedulesFetch 1.5"); 
						console.log(json); 
					}	
					const schedules = json.data;
					const meta = json.meta;		
					if (Config.bDebug)
					{				
						console.log("schedules 2");
						console.log(schedules);
						console.log(typeof schedules);
						console.log("meta 2");
						console.log(meta);
					}		
					let metaoffset = meta.offset;
					let metalimit = 0;
					if (metaoffset === 0)
						metalimit = meta.limit;
			
					let newschedules = [...this.state.schedules, ...schedules];
					this.setState({ schedules: newschedules, errmsg: null, 
								 }); 

				}				
			);
			*/

			// application/jsonrequest
			let shedulescallcount = store.getState().shedulescallcount;
			console.log("shedulescallcount");
			console.log(shedulescallcount);			
			store.setStateNoneCallListeners({ shedulescallcount: shedulescallcount +1}); 
			let url = this.fetch_url_progschedules +this.getSchedulesOffsetAndParams(currentservice, offset);
			url = url.toString();
			if(Config.bDebug) 
			{
				console.log(url);
				console.log(" --> service=" +this.currentservice.id);
			}
			let arr_genereatedfuncid = store.getState().arr_genereatedfuncid;
			/*
			while(arr_genereatedfuncid != null && !this.isEmptyHash(arr_genereatedfuncid))
			{
				console.log("arr_genereatedfuncid: " +arr_genereatedfuncid);
				await this.sleep(500);
			}
			*/
			const genereatedfuncid = generateCallbackFunction();			
			arr_genereatedfuncid[genereatedfuncid] = genereatedfuncid;
			store.setStateNoneCallListeners({ arr_genereatedfuncid: arr_genereatedfuncid});
			let my_jsonpCallbackFunction = null;

			let resp = await fetchJsonp(url, {
				timeout: 15000,
				jsonpCallbackFunction: genereatedfuncid,
				headers: { "Content-Type": "application/json; charset=UTF-8", 
				'Accept': '*/*', // application/rss+xml
				'SameSite': 'Lax',
				},
			  })
			  .catch((error) => {
				console.error("error");
				console.error(error);
				this.setState({ errmsg: error.toString() })
				return;
			});

			  /*
			.then(response => { return response.json(); })
			.then(data => {
				*/
				let convertedschedules = null;
				const resp_jsonpCallbackFunction = resp.jsonpCallbackFunction;
				let data = await resp.json();
			//	data = data.data;
				arr_genereatedfuncid = store.getState().arr_genereatedfuncid;
				arr_genereatedfuncid[resp_jsonpCallbackFunction] = null;
				// arr_genereatedfuncid.delete(resp_jsonpCallbackFunction);
				store.setStateNoneCallListeners({ arr_genereatedfuncid: arr_genereatedfuncid });
				const storestate = store.getState();
				let storeIndService = parseInt(storestate.indService);
				let shedulescount = storestate.shedulescount;
				console.log("shedulescount");
				console.log(shedulescount);			
				store.setStateNoneCallListeners({ shedulescount: shedulescount +1}); 
				if(Config.bDebug) 
				{
					console.log("makeSchedulesFetch 1.5"); 
					console.log(data); 
				}	
				if (!data)
				{
					console.log(" --> currentservice=" +data);
					console.log(" --> after=schedules empty:" +data);
					if ((storeIndService +1) == this.state.services.length)
					{
						convertedschedules = 
							this.convertSchedulesIntoRealObject(store.getState().schedules);
						this.setState({ bSchedulesQueryReady: true, 
							schedules: convertedschedules });
						console.log(" --> 1 bSchedulesQueryReady: true");
						this.createUiGrid();
					}
					else
					{
						const next_currentservice = this.state.services[(storeIndService +1)];
						if (next_currentservice != undefined || next_currentservice != null)
						{
							this.indService = storeIndService +1;
							store.setStateNoneCallListeners({ indService: storeIndService +1 });
							this.currentservice = next_currentservice;
							this.setState({ currentservice: next_currentservice });
							this.makeSchedulesFetch(next_currentservice, 0, this.indService);
						}	
					}
					return;
				}				
				let services = data.data;		
				const schedules = data.data;
				let respCurrentService = currentservice;
				let respIndService = -1;
				const respserv = this.getResponseIndServcieAndCurrentService(data.meta.service);
				if (respserv != null)
				{
					respCurrentService = respserv.respCurrentService;
					respIndService = respserv.respIndService;
				}
				if (schedules == null || schedules == undefined || schedules.length == 0)
				{						
					console.log(" --> currentservice=" +this.currentservice.id);
					console.log(" --> after=schedules empty:" +services);
					if ((storeIndService +1) == this.state.services.length
					   && (respIndService +1) == this.state.services.length)
					{
						convertedschedules = 
							this.convertSchedulesIntoRealObject(store.getState().schedules);
						this.setState({ bSchedulesQueryReady: true, 
							schedules: convertedschedules });
				 		console.log(" --> 2 bSchedulesQueryReady: true");
						this.createUiGrid();
					}
					else
					{
						let ind2 = (storeIndService +1);
						const next_currentservice = this.state.services[ind2];
						if (next_currentservice != undefined || next_currentservice != null)
						{
							this.indService = storeIndService +1;
							store.setStateNoneCallListeners({ indService: storeIndService +1 });
							this.currentservice = next_currentservice;
							this.setState({ currentservice: next_currentservice });
							this.makeSchedulesFetch(next_currentservice, 0, this.indService);
						}	
					}
					return;
				}

					const meta = data.meta;		
					if (Config.bDebug)
					{				
						console.log("schedules 2");
						console.log(schedules);
						console.log(typeof schedules);
						console.log("meta 2");
						console.log(meta);
					}		
					let metaoffset = parseInt(meta.offset);
					let metalimit = 0;
					if (metaoffset === 0)
						metalimit = parseInt(meta.limit);
			
					let stateschedules = store.getState().schedules;
					if (stateschedules === undefined)
						stateschedules = {};
					
					let service_schedules = stateschedules[meta.service];
					if (service_schedules === undefined)
						service_schedules = [];
					let newschedules = [...service_schedules, ...schedules];
					if (Config.bDebug)
					{				
						console.log("schedules 2");
						console.log(schedules);
						console.log(typeof schedules);
						console.log("meta 2");
						console.log(meta);
					}
					stateschedules[meta.service]	= newschedules;
					store.setStateNoneCallListeners({ schedules: stateschedules }); 
					//this.setState({ schedules: stateschedules, errmsg: null, 
					//			 }); 
					let newoffset = parseInt(meta.offset) +parseInt(meta.count);
					if (Config.bDebug)
					{				
						console.log("indService 2");
						console.log(indService);
						console.log("this.state.services.length");
						console.log(this.state.services.length);
						console.log("meta.count");
						console.log(meta.count);
						console.log("metaoffset");
						console.log(meta.offset);
						console.log("newoffset");
						console.log(newoffset);
					}
					if (parseInt(meta.count) > parseInt(meta.limit))
						this.makeSchedulesFetch(respCurrentService, newoffset, respIndService);
					else
					{
						if ((storeIndService +1) == this.state.services.length
							&& (respIndService +1) == this.state.services.length)
						 {
							convertedschedules = 
							   this.convertSchedulesIntoRealObject(store.getState().schedules);
							this.setState({ bSchedulesQueryReady: true, 
								schedules: convertedschedules });
							console.log(" --> 3 bSchedulesQueryReady: true");
							this.createUiGrid();
						}
						else
						{
							console.log(this.typeOf(storeIndService));
							let ind3 = (storeIndService +1);
							let kissa = (1 +1);
							const storeservices = this.state.services;
							const next_currentservice = storeservices[ind3];
							if (next_currentservice != undefined || next_currentservice != null)
							{
								this.indService = storeIndService +1;
								store.setStateNoneCallListeners({ indService: storeIndService +1 });
								this.currentservice = next_currentservice;
								this.setState({ currentservice: next_currentservice });
								this.makeSchedulesFetch(next_currentservice, 0, this.indService);
							}	
						}		
					}
	/*		}) 
			.catch((error) => {
				console.error("error");
				console.error(error);
				this.setState({ errmsg: error.toString() })
				return;
			});
	*/		
			/*
			await axios({
				method: "get",
				url: this.fetch_url_progschedules +this.getSchedulesOffsetAndParams(offset),
				timeout: 1000 * 5, // Wait for 5 seconds
				adapter: jsonpAdapter,
				callbackParamName: 'fetchSchedulesData', // optional, 'callback' by default
				headers: {
				  "Content-Type": "application/json"
				},
			  })
			  .then(response => { return response.json();})
			  .then(data => {
				let services = data.data;		
				if(Config.bDebug) 
					{
						console.log("makeSchedulesFetch 1.5"); 
						console.log(data); 
					}	
					const schedules = data.data;
					const meta = data.meta;		
					if (Config.bDebug)
					{				
						console.log("schedules 2");
						console.log(schedules);
						console.log(typeof schedules);
						console.log("meta 2");
						console.log(meta);
					}		
					let metaoffset = meta.offset;
					let metalimit = 0;
					if (metaoffset === 0)
						metalimit = meta.limit;
			
					let newschedules = [...this.state.schedules, ...schedules];
					this.setState({ schedules: newschedules, errmsg: null, 
								 }); 
					if (parseInt(meta.count) > parseInt(metaoffset))
						this.makeSchedulesFetch(meta.limit);
				})
				.catch(error => {
				  console.log(error);
			  });
			  */


	
			 /*
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
			*/
	}


	render(props, state) {
		let selectcategories = null;
		if (state.categories != null)
			selectcategories = state.categories.map((child, i) => {
				return <Select.Item id={i} 
				          selected={child.title.fi===state.selectedcategory.title.fi} >
							  {child.title.fi}</Select.Item>
				});

		let uigrid = state.uigrid;
		if (Config.bDebug)
		{			
			console.log("selectcategories");
			console.log(selectcategories);
			console.log("YleMedia state");
			console.log(state);
		}
		if (state.categories != null)
		{
			if (Config.bDebug)
			{				
				console.log("state.categories.length");
				console.log(state.categories.length);
			}
		}

		return (			
			<div >
					<div class={style.cardHeader}>
						<h1>Yle {this.getFetchedDate()}</h1>
						<div>
							Hae tv-ohjelmatiedot alimpaan taulukkoon yllä olevan päivän ajankohta linkin 
							ja alla olevan päivämäärän mukaan:
						</div>
						<div class={style.cardHeader}>
							<a href="." id={'dayname_'+this.getPlus1DayId(0)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(0)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(1)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(1)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(2)} 
							     nClick={this.onClickSetDateString}>{this.getPlus1Day(2)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(3)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(3)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(4)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(4)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(5)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(5)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(6)} 
							   onClick={this.onClickSetDateString}>{this.getPlus1Day(6)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(7)} 
							      onClick={this.onClickSetDateString}>{this.getPlus1Day(7)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(8)} 
							    onClick={this.onClickSetDateString}>{this.getPlus1Day(8)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(9)} 
							      onClick={this.onClickSetDateString}>{this.getPlus1Day(9)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(10)} 
							     onClick={this.onClickSetDateString}>{this.getPlus1Day(10)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(11)} 
							      onClick={this.onClickSetDateString}>{this.getPlus1Day(11)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(12)} 
							       onClick={this.onClickSetDateString}>{this.getPlus1Day(12)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(13)} 
							          onClick={this.onClickSetDateString}>{this.getPlus1Day(13)}</a><space> </space>
							<a href="." id={'dayname_'+this.getPlus1DayId(14)} 
							       onClick={this.onClickSetDateString}>{this.getPlus1Day(14)}</a><br/>						
						</div>
					</div>
					<div class={style.cardBody}>
						<div class=" mdc-typography--caption">Valitse ohjelmalaji</div>
						<FormField>
						<select 
							selectedIndex={this.state.chosenIndex}
                            disabled={state.categories == null}
                            preselected outlined 
                            ref={this.categoryfieldRef} 
                            onChange={(e)=>{
                                this.setState({
								chosenIndex: e.target.selectedIndex,
								selectedcategory: state.categories[e.target.selectedIndex],
                                schedules: {}, currentservice: null
                                });                                
                                this.fetchProgServices(this.state.progsource);
                            }}>
                            {selectcategories}
                        </select>
						</FormField><br/><br/>

						<div class=" mdc-typography--caption">Kuinka näytetään</div>
						<FormField>
							<Radio id="rweek" name='opttable'  
								onChange={this.radioProgTableChanged}></Radio>
							<label for="rweek">Viikko</label>
						</FormField>
						<FormField>
							<Radio id="rday" name='opttable' checked={state.progtable === 'rday'}
								onChange={this.radioProgTableChanged}></Radio>
							<label for="rday">Päivä</label>
						</FormField>
						<FormField>
							<Radio id="rlist" name='opttable'
								onChange={this.radioProgTableChanged}></Radio>
							<label for="rlist">Lista</label>
						</FormField><br/>
						<div style={{ "background-color": 'red', color: "yellow" } }>{state.errmsg}</div>
						<Card.Actions>
							<Card.ActionButton>Hae</Card.ActionButton>
						</Card.Actions>
						<div class=" mdc-typography--caption">Ohjelmat</div>						
					</div>
					{uigrid}
			</div>
		);
	}
}
