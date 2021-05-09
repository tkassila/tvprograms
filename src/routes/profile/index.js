import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import style from './style';
import TimeForm from './TimeForm';
// import { MediaQuery } from '../../preact-responsive/preact-responsive';
import Media from '../../utils/Media';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';
import Elevation from 'preact-material-components/Elevation';
import 'preact-material-components/Elevation/style.css';

function B(props) {	
	return <h1 tabIndex="0" >Hello, {props.name}</h1>;
}

function A(props) {	
	return <B name={props.name}></B>;
}

export default class Profile extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			time: Date.now(),
			count: 10,
			tz: null,
			msg: 'now',
			tz: 'PST',
			currentTime: null,
			kissacount: 0,
		};

		this.fetchCurrentTime = this.fetchCurrentTime.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	// update the current time
	updateTime = () => {
		this.setState({ time: Date.now() });
	};

	increment = () => {
		this.setState({ count: this.state.count+1 });
	};

	getApiUrl = () => {
		const tz = this.state.tz;
		const msg = this.state.msg;
		const host = "https://andthetimeis.com";
		return host +"/" +tz +"/" +msg +".json";
	}

	handleChange(newState){
		this.setState({newState});
	}

	handleFormSubmit(evt) {
		this.fetchCurrentTime();
	}
		
	fetchCurrentTime(){
		const url = this.getApiUrl();
		fetch(url,  {
			mode: 'cors',
			credentials: 'include'
		  })
		.then(resp => resp.json())
		.then(data => {
			const currentTime = data.dataString;
			this.setState({currentTime});
		})
	}

	addKissaCount = (event) =>
	{
		this.setState({kissacount: this.state.kissacount +1 });
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count } ) {
		const {currentTime, tz} = this.state;
		const { kissacount } = this.state;
		const apiUrl = this.getApiUrl();

		let tableheaders  = null;
		console.log(Media.screen);
		let tabletds = ["col1","col2","col3","col4"].map((child, i) => {
			return <td id={'telkkutablecol' +i} lang="fi" 
			tabIndex="0"  style={'vertical-align: top; padding-left: 5px; padding-right: 5px; ' }> 
			<List>
			<List.Item tabIndex="0" >Item1 {child}</List.Item>
			<List.Item tabIndex="0" >Item2 {child}</List.Item>
			<List.Item tabIndex="0" >Item3 {child}</List.Item>
			<List.Item tabIndex="0" >Item4 {child}</List.Item>
			<List.Item tabIndex="0" >Item5 {child}</List.Item>
		  </List></td> 				
		});
		console.log("Media.screen");
		
		return (
			<div class={`${style.profile} page`}>
				<h1 tabIndex="0" >Profile: {user}</h1>
				<p>This is the user profile for a user named { user }.</p>

				<div>Current time: {new Date(time).toLocaleString()}</div>

				<p>
					<Button tabIndex="0" raised ripple onClick={this.increment}>Click Me</Button>
					{' '}
					Clicked {count} times.
				</p>


				<div>
        {!currentTime &&
          <button onClick={this.fetchCurrentTime}>
            Get the current time
          </button>}
        {currentTime && <div>The current time is: {currentTime}</div>}
        <TimeForm
          onFormSubmit={this.handleFormSubmit}
          onFormChange={this.handleChange}
          tz={tz}
          msg={'now'}
        />
        <p>We'll be making a request from: <code>{apiUrl}</code></p>
      </div>
	  		<A name={"kissa " +kissacount}></A>
			<button onClick={this.addKissaCount}>KissaCount</button>
			<table id="programtable2" style="width:100%" ref={this.tablCntl}>
					<tbody>
					<tr>{tableheaders}</tr>
					<tr tabIndex="0" ><table id="programtable2" style="width:100%" ref={this.tablCntl}>
					<tbody>
					<tr>{tableheaders}</tr>
					<tr >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					</tbody>
					</table>
</tr> 		
					<tr tabIndex="0"  ><table id="programtable2" style="width:100%" ref={this.tablCntl}>
					<tbody>
					<tr>{tableheaders}</tr>
					<tr >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					</tbody>
					</table>
</tr> 		
					<tr tabIndex="0"  ><table id="programtable2" style="width:100%" ref={this.tablCntl}>
					<tbody>
					<tr>{tableheaders}</tr>
					<tr >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					<tr  >{tabletds}</tr> 		
					</tbody>
					</table>
</tr> 		
					</tbody>
			</table>

			<div>
        <LayoutGrid style="width:100%" >
          <LayoutGrid.Inner>
            <LayoutGrid.Cell tabIndex="0"  >1 First cell</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >2 Second cell dffdsffdssddsff</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >3 Third cell</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >4 First cell</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >5 Second cell dffdsffdssddsff</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >6 Third cell</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >7 First cell</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >8 Second cell dffdsffdssddsff</LayoutGrid.Cell>
            <LayoutGrid.Cell tabIndex="0"  >9 Third cell</LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>

	  <div>
        <Elevation tabIndex="0" >Z0</Elevation>
        <Elevation tabIndex="0" >Z1</Elevation>
        <Elevation tabIndex="0" >Z2</Elevation>
      </div>
			</div>
		);
	}
}
