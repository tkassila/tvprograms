import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style';
import Config from '../../utils/Config';
// import 'whatwg-fetch';
import { fetchJsonp } from 'fetch-jsonp';
//import dayjs from 'dayjs';
import _uniqueId from 'lodash/uniqueId';
import List from 'preact-material-components/List';
import 'preact-material-components/List/style.css';

// import Category from './Category';
// import GridOrList from './GridOrList';
import YleProgram from './YleProgram';


// import StaticFunctions from '../../utils/StaticFunctions';

export default function YleChannel(props) {

	// formatForServiceTime = "yyyy-MM-dd'T'HH:mm:ss.SSSZZ";

		const [h3id] = useState(_uniqueId('prefix-'));

		const getPrograms = (programs) =>
		{
			let progs = programs.map((s, k) => {
				if (s === null || s === undefined || props.data === null
					|| props.data == undefined)
				{
					console.log("s= k=" +k);
					console.log(s);
					console.log("data=");
					console.log(props.data);
				}
				if ((props.data && s.status != 'schedule-list__no-data')
				 	/* && (!props.bShowOnlyMovies || 
					(props.bShowOnlyMovies && s.movie )) */ )
				{					
					if (!props.bShowOnlyMovies || 
						(props.bShowOnlyMovies && s.movie ))
					return <YleProgram id={k} data={s} 
						selectedcategory={props.selectedcategory} 
						bSvLang={props.bSvLang} 
						channelname={props.data ? props.data.name : ''}
						bShowDesciption={props.bShowDesciption}
						showSearch={props.showSearch == undefined ? false 
							: props.showSearch}
						themevalue={props.themevalue}
						getPOfIndex={props.getPOfIndex} />;
				}
		  });
		  return progs;
		}

		const onfocusoutfunc = (e) =>
		{
			console.log("onfocusoutfunc");
		}

		const onfocusfunc = (e) =>
		{
			console.log("onfocusfunc");
		}

		return (			
			<div >
				<h3 id={h3id} name={h3id} tabIndex="0" lang="fi" aria-label={props.data.name}				
				onfocusout={onfocusoutfunc} onfocus={onfocusfunc}>{props.showSearch && 
					props.data.titleindex != undefined
					? props.getPOfIndex(props.data.titleindex, props.data.name,
						this.props.themevalue) : props.data.name}</h3>
				{props.data && props.data.nomoreprogramstoday && props.data.desciption ? 
				  <div>{props.data.desciption}</div> : null}
				<div>{props.schedules && getPrograms(props.schedules)}</div>
			</div>
		)
}