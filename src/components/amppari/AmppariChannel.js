    
import 'preact-material-components/Theme/style.css';
import AmppariShowProgram from './AmppariShowProgram';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
function AmppariChannel(props)
{

    const oldProgram =(program, currenttime, nextprogram) =>
    {
        const startTime = new Date(program.timestamp * 1000);
        let endtTime = null;
        let endtTimeHours = null;
        if (!nextprogram)
            return false;
        if (nextprogram)
        {
            endtTime = new Date(nextprogram.timestamp * 1000);
            endtTimeHours = endtTime.getHours();
        }
        const currentHours =  currenttime.getHours();
        if (endtTimeHours && endtTimeHours < currentHours)
        {
            console.log("kkk");
            return true;
        }
        if (endtTimeHours && endtTime.getHours() === currenttime.getHours())
        {
            const endtTimeMinutes =  endtTime.getMinutes();
            const currentMinutes =  currenttime.getMinutes();
            if( endtTimeMinutes < currentMinutes)
            {
                console.log("kkk");
                return true;
            }
        }
        return false;
    }

       // const cssDark = useContext(CssDark);
        let displayitems = null;
        /*
        	jsonitem.title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
		jsonitem.description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
		jsonitem.pubdate = item.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
		jsonitem.link =
        */
        if (props.data.channelprograms !== null)
        {
            let filteredchannels = props.data.channelprograms;
            if (props.selectedtyyppi !== undefined && props.selectedtyyppi !== 'kaikki')
            {
                if (props.selectedtyyppi === 'elokuvat')
                {
                    let filteredchannels1 = filteredchannels.filter( (s, i) =>
					{ 
					//	console.log("i");
					//	console.log(i);
						return s.movie == true 
					} );
                    filteredchannels = filteredchannels1;
                }
                else
                if (props.selectedtyyppi === 'urheilu')
                {
                    let filteredchannels1 = filteredchannels.filter( (s, i) =>
					{ 
					//	console.log("i");
					//	console.log(i);
						return s.sport === true 
					} );
                    filteredchannels = filteredchannels1;
                }
            }
            
            if (props.bshowdcurrentprograms && filteredchannels)
            {
                let i = 0, max = filteredchannels.length;
                let program, nextprogram;
                for(i = 0; i < max; i++)
                {
                    // value = path[i].localName;
                    program = filteredchannels[i];
                    nextprogram = null;
                    if ((i+1) < max)
                        nextprogram = filteredchannels[i+1];
                    return !oldProgram(program, props.currenttime, nextprogram);
                }
                filteredchannels = filteredchannels1;
            }

            displayitems = filteredchannels.map((program, i) => {
				return <AmppariShowProgram id={i} data={program}
                    displayAllDescriptions={props.displayAllDescriptions}
                    themevalue={props.themevalue}
                    getPOfIndex={props.getPOfIndex}
                    showSearch={props.showSearch == undefined ? false 
                        : props.showSearch}
                    channel={props.data.title.toString()} />;
			});
        }

        return ( 
            <div>
            <h3 tabIndex="0" lang="fi" aria-label={props.data.title}>
                {props.showSearch && 
					props.data.titleindex != undefined
					? props.getPOfIndex(props.data.titleindex, 
                    props.data.title, props.themevalue) : props.data.title}</h3>
            <div>{displayitems}</div>
            </div>
          );
}

export default AmppariChannel;