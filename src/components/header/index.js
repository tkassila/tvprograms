import { h, Component, Fragment, createRef } from 'preact';
import { route } from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
import Radio from 'preact-material-components/Radio';
import FormField from 'preact-material-components/FormField';
import 'preact-material-components/FormField/style.css';
import 'preact-material-components/List/style.css';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

import Config from '../../utils/Config';

import style from './style';

export default class Header extends Component {

	store = null;
	switchChange = null;
	_underSwitchChange = false;

	constructor(props)
	{
		super(props);
		if(Config.bDebug) 
		{
			
if(Config.bDebug)

if(Config.bDebug)

if(Config.bDebug)

if(Config.bDebug)
console.log("Header.js");
			
if(Config.bDebug)
console.log("props");
			
if(Config.bDebug)
console.log(props);
		}

		this.store = props.store;

		this.state = {
			darkThemeEnabled: false,
			darkstyle: '',
			progsource: 'radio_yle',
		};

		this._underSwitchChange = false;
		this.switchChange = createRef();
	}

	closeDrawer() {
		this.drawer.MDComponent.open = false;	
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToMyProfile = this.linkTo('/profile');

	toggleDarkTheme = () => {
		if (this._underSwitchChange)
			return true;

		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
					this.store.setState({ "darkstyle" : '--dark' });
					this.props.themeChange('--dark');
					/*
					if (this.switchChange && this.switchChange.current 
						&& !this.switchChange.current.checked)
					{
						this._underSwitchChange = true;
						this.switchChange.current.MDComponent.checked = true;
						this._underSwitchChange = false;
					}
					*/
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
					this.store.setState({ "darkstyle" : '' });
					this.props.themeChange('');
					/*
					if (this.switchChange && this.switchChange.current 
						&& this.switchChange.current.checked)
					{
						this._underSwitchChange = true;
						this.themeswitch.current.MDComponent.checked = false ;
						this._underSwitchChange = false;
					}
					*/
				}
			}
		);
	}

	getPathOfRadioProgSourceChanged = (id) =>
	{

		let ret = null;
		switch(id)
		{
			case 'radio_yle': ret = "/"; break;
			case 'radio_telkku': ret = '/telkku'; break;
			case 'radio_telkkuhtml': ret = '/htmltelkku'; break;
			case 'radio_amppari': ret = '/amppari'; break;
			case 'radio_htmlamppari': ret = '/htmlamppari'; break;	
			default: ret = '/yle'; break;
			}  
		return ret;
	}

	radioProgSourceChanged = (event) => 
	{
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
		// if (this.props.currentProgsourceCntrl)
			//this.props.currentProgsourceCntrl.removelisteners();
		this.props.store.setState({ progsource: id });
		this.setState({ progsource: id });
		route(this.getPathOfRadioProgSourceChanged(id));
	}
	
	render(props, state) {
		console.log(props.selectedRoute);
		return (
			<div role="navigation" lang="fi" tabIndex="0" aria-label="Ohjelmal??hteet ja ulkoasu (musta tai valkoinen)">
				<TopAppBar className="topappbar">	
					<TopAppBar.Row>
						<TopAppBar.Section align-start>
							<TopAppBar.Title tabIndex="0" >TV ohjelmat</TopAppBar.Title>
							
							<div role="radiogroup" aria-labelledby="idprogramdatasource"
							style={{ "display": "table", "margin": "0 auto" }} 
							data-message="Mist?? ohjelmia haetaan (radionapit) sek?? ulkoasun valinta painonapista">
							<label id="idprogramdatasource">Ohjelmal??hde:</label>
						<FormField>
							<Radio aria-label="" tabIndex="0" id="radio_yle" name='optsource' 
							    checked={state.progsource == 'radio_yle'} 
								onChange={this.radioProgSourceChanged} ></Radio>
							<label style={{ color: "white" }} 
							for="radio_yle">Yle</label>
						</FormField>
						<FormField>
							<Radio tabIndex="0" id="radio_telkku" name='optsource' 
							    checked={state.progsource == 'radio_telkku'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label style={{ color: "white" }} 
							for="radio_telkku">Telkku</label>
						</FormField>
						<FormField>
							<Radio tabIndex="0" id="radio_telkkuhtml" name='optsource' 
							    checked={state.progsource == 'radio_telkkuhtml'} 
								onChange={this.radioProgSourceChanged}></Radio>
							<label style={{ color: "white" }} 
							for="radio_telkkuhtml">Telkku html</label>
						</FormField>
						<FormField>
							<Radio tabIndex="0" id="radio_amppari" name='optsource' 
							    checked={state.progsource == 'radio_amppari'} 
								onChange={this.radioProgSourceChanged}></Radio>
							<label style={{ color: "white" }} 
							for="radio_amppari">Amppari tv</label>
						</FormField>
						<FormField>
							<Radio tabIndex="0" id="radio_htmlamppari" name='optsource' 
							    checked={state.progsource == 'radio_htmlamppari'}
								onChange={this.radioProgSourceChanged}></Radio>
							<label style={{ color: "white" }} 
							for="radio_htmlamppari">Amppari tv html</label>
						</FormField>						
				</div>
					<div><FormField><Button style={{ color: "white" }} role="button" lang="fi"
						tabIndex="0" onClick={this.toggleDarkTheme}>Vaihda ulkoasua</Button></FormField>
					</div>

						</TopAppBar.Section>
						<TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
							<TopAppBar.Icon>settings</TopAppBar.Icon>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
				<Drawer modal ref={this.drawerRef}>
					<Drawer.DrawerContent >
						<Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
							<List.ItemGraphic>home</List.ItemGraphic>
							Home
						</Drawer.DrawerItem>
						<Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToMyProfile}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Profile
						</Drawer.DrawerItem>
					</Drawer.DrawerContent>
				</Drawer>
				<Dialog tabIndex="0" ref={this.dialogRef} role="dialog" id="dialogtheme" 
					 aria-modal="false">
					<Dialog.Header tabIndex="0" >Asetukset</Dialog.Header>
					<Dialog.Body>
						<div>
							<div id="divtheme" lang="fi" >Vaihda tummaan sivuteemaan tai vaaleaan teemaan 
							</div>
							<br/><Switch ref={this.themeswitch} 
							checked={this.state.darkThemeEnabled}
							onClick={this.toggleDarkTheme} />
						</div>
					</Dialog.Body>
					<Dialog.Footer>
						<Dialog.FooterButton tabIndex="0" accept>OK</Dialog.FooterButton>
					</Dialog.Footer>
				</Dialog>
			</div>
		);
	}
}
