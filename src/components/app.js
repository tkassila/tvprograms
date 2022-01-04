import { h, Component, createRef } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
import Config from '../utils/Config';
import IsBrowser from '../utils/IsBrowser';
import store from '../utils/store';
import Media from '../utils/Media';
import { Provider, connect } from '../unistore/integrations/preact';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';

// import YleHtml from '../components/ylehtml/YleHtml';
import YleRoute from '../routes/yle/YleRoute';
import TelkkuRoute from '../routes/telkku/TelkkuRoute';
import AmppariRoute from '../routes/amppari/AmppariRoute';
import HtmlTelkkuRoute from '../routes/telkkuhtml/HtmlTelkkuRoute';
import HtmlAmppariRoute from '../routes/ampparihtml/HtmlAmppariRoute';
// import { useMediaQuery } from 'react-responsive';

export default class App extends Component {

	unsubscribelistener = null;
	ctrlYleRef = null;
	ctrlTelkkuRef = null;
	ctrlHtmlTelkkuRef = null;
	ctrlAmppariRef = null;
	ctrlHtmlAmppariRef = null;

	constructor(props)
	{
		super(props);
		this.state = {
			yleapiparams: '?app_id=' +Config.yleapi +"&app_key=" +Config.ylekey,
			currentUrl: null,
			currentProgsourceCntrl: null,
			themevalue: '',
		}

		if (Config.bDebug)
		{
			console.log("app state");
			console.log(this.state);
		}

		console.log("Media.initializeScreenListeners()");
	//	Media.initializeScreenListeners();
		console.log("Media.screen");
	//	console.log(Media.screen);
		console.log("window.styleMedia.type");
		Config.setOwnserveraddress(location.hostname, location.host);
		IsBrowser.whichBrowser();
		store.setState({ isbrowser: IsBrowser, darkstyle: '' });

		if (Config.bDebug)
		{
			console.log("Isbrowser.---:");
			console.log(store.getState().isbrowser.isChrome);

			console.log("Isbrowser.isChrome:");
			console.log(IsBrowser.isChrome);
			console.log("Isbrowser.isFirefox:");
			console.log(IsBrowser.isFirefox);
			console.log("Isbrowser.isOpera:");
			console.log(IsBrowser.isOpera);
			console.log("Isbrowser.isBlink:");
			console.log(IsBrowser.isBlink);
		}
		
		console.log(Config);
		console.log("Config");

		this.ctrlYleRef = createRef();
		this.ctrlTelkkuRef = createRef();
		this.ctrlHtmlTelkkuRef = createRef();
		this.ctrlAmppariRef = createRef();
		this.ctrlHtmlAmppariRef = createRef();
	
		/*
		var is_screen = window.matchMedia("screen").matches;
		console.log(is_screen);
		var is_speech = window.matchMedia("aural").matches;
		console.log("is_speech");
		console.log(is_speech);
		*/
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		
		switch(e.url)
		{
			case '/': this.currentProgsourceCntrl = this.ctrlYleRef; break;
			case '/telkku': this.currentProgsourceCntrl = this.ctrlTelkkuRef; break;
			case '/htmltelkku': this.currentProgsourceCntrl = this.ctrlHtmlTelkkuRef; break;
			case '/amppari': this.currentProgsourceCntrl = this.ctrlAmppariRef; break;
			case '/htmlamppari': this.currentProgsourceCntrl = this.ctrlHtmlAmppariRef; break;
			default: this.currentProgsourceCntrl = this.ctrlYleRef; break;
		}  

		if (this.state.themevalue.trim() == '')
		{
//				import('./App.css');
			import('./AppBackgroundWhite.css');
	//      document.body.style.display = "background-color: white<;";
			// document.html.style.display = "background-color: white;";
		}
		else			
		{
//				import('./App.css');
			import('./AppBackgroundBlack.css');
	//		document.body.style.display = "background-color: black<;";
		//	document.body.style.display = "background-color: green; min-height: 100%;";
			// document.html.style.display = "background-color: black;";
		}
		this.setState({
			currentUrl: e.url
		});
	};

	// 					<Home path="/" yleapiparams={state.yleapiparams} store={store} />

	/*
					<YleHtml path="/" store={store} ref={this.ctrlYleRef} />
					<Telkku path="/telkku" store={store} ref={this.ctrlTelkkuRef}/>;
					<HtmlTelkku path="/htmltelkku" store={store} ref={this.ctrlHtmlTelkkuRef}/>;		
					<Amppari path="/amppari" store={store} 
					ref={this.ctrlAmppariRef}/>;
					<HtmlAmppari path="/htmlamppari" store={store} 
						ref={this.ctrlHtmlAmppariRef}/>
	*/

	themeChange = (themevalue) =>
	{
		this.setState({ themevalue: themevalue });
	}

	render(props, state) {

		const darkstyle = props.themevalue;

		return (			
			<Provider store={store}>
			<div id="app">
			<Typography body1>
				<Header selectedRoute={this.state.currentUrl} store={store}
				  currentProgsourceCntrl={state.currentProgsourceCntrl}
				  themeChange={this.themeChange} />
				<Router onChange={this.handleRoute}>
					<YleRoute path="/" store={store} ref={this.ctrlYleRef} 
					 themevalue={state.themevalue} />
					<TelkkuRoute path="/telkku" store={store}
					   ref={this.ctrlTelkkuRef}
					   themevalue={state.themevalue} />
					<AmppariRoute path="/amppari" store={store}
					   ref={this.ctrlAmppariRef} 
					   themevalue={state.themevalue}/>
					<HtmlTelkkuRoute path="/htmltelkku" store={store}
					   ref={this.ctrlHtmlAmppariRef}
					   themevalue={state.themevalue} />	
					<HtmlAmppariRoute path="/htmlamppari" store={store}
					   ref={this.ctrlHtmlAmppariRef}
					   themevalue={state.themevalue} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<NotFound default />
				</Router>	
				</Typography>
			</div>
			</Provider>
		);
	}
}
