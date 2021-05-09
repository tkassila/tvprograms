    
import {Component, h } from 'preact';
import { useState } from 'preact/hooks';
import Chips from 'preact-material-components/Chips';
import 'preact-material-components/Chips/style.css';
import 'preact-material-components/Theme/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

import Config from '../../utils/Config';

// import { useState, useEffect  } from 'preact/hooks';
// import Config from '../util/Config';
//import CssDark from '../context/Context';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
class DayGrid extends Component
{

  constructor(props)
	{
		super(props);
    let cdate = new Date(props.currentDate);
    this.state = {
			currentDate: cdate,
      programs: this.getDayPrograms(cdate, props.programs),
      services: this.getDayServices(cdate, props.progsource, props.services),
      progsource: props.progsource,
    }

    console.log("programs");
    console.log(this.state.programs);
    console.log("services");
    console.log(this.state.services);

    // this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }

  componentWillReceiveProps(nextProps) 
  {
    if (Config.bDebug)
    {
      console.log("DayGrid componentWillReceiveProps nextProps"); 
      console.log(nextProps); 				
    }
          /*
    if (nextProps.editErrMsg != null)
      this.setState({ errmsg: nextProps.editErrMsg});
    else
    if (!nextProps.tabClassHide)
      this.initializeState(nextProps);
          //	this.forceUpdate();            
          */
  }
    
  getDayPrograms = (cdate, programs) =>
  {
    console.log("getDayPrograms");
    return programs;
  }

  getDayServices = (cdate, progsource, services) =>
  {
    console.log("getDayServices");
    let channelType = 'TVChannel';
    if (progsource === 'rtv')
      channelType = 'TVChannel';
    else
    if(progsource === 'rradio')
        channelType = 'RadioChannel';
    else
    if (progsource === 'rareena')
      channelType = 'OndemandServic';

    console.log("channelType");
    console.log(channelType);
    console.log("services");
    console.log(services);

    if (services === undefined || services === null)
      return null;
    let ret = services.filter( (s) => s.type.includes(channelType));
    if (ret != null && ret.length > 0)
      ret = ret.map((s, i) => { 
        switch(s.id)
        {
          case 'yle-tv1':
            s.picture = 'yle-tv1_vtc.png';
            break;
          case 'yle-tv2':
              s.picture = 'yle-tv2_vtc.png';
              break;
          case 'yle-teema':
             s.picture = 'yle-teema_vt.png';
             break;
          case 'yle-fem':
              s.picture = 'yle-teema-fem_vt.png';
              break;
          case 'tv-finland':
                s.picture = 'tv-finland_vt.png';
                break;
          case 'yle-hd':
               // s.picture = '';
                break;
          case 'tv-finland':
                s.picture = 'tv-finland_vt.png';
                break;
          case 'yle-radio-1':
                s.picture = 'yle-radio-1_vtc.png';
                break;
          case 'yle-puhe':
                s.picture = 'yle-puhe_vtx.png';
                break;
          case 'yle-mondo':
                s.picture = 'yle-mondo_vtx.png';
                break;
          case 'ylex':
                s.picture = 'ylex_vtx.png';
                break;
          case 'yle-x3m':
                s.picture = 'yle-x3m_vtx.png';
                break;
          case 'yle-radio-vega':
              //  s.picture = '';
                break;
          case 'radio-vega-huvudstadsregione':
              //  s.picture = '';
                break;
          case 'radio-vega-vastnyland':
               // s.picture = '';
                break;
          case 'radio-vega-aboland':
               // s.picture = '';
                break;
          case 'radio-vega-osterbotten':
               // s.picture = '';
                break;
          case 'radio-vega-ostnyland':
               // s.picture = '';
                break;
          case 'radio-vega-osterbotten':
               // s.picture = '';
                break;
          case 'yle-radio-suomi':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-lappeenranta':
              //  s.picture = '';
                break;
          case 'yle-radio-suomi-mikkeli':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-kajaani':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-kotka':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-laht':
              //  s.picture = '';
                break;
          case 'yle-radio-suomi-rovaniemi':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-oulu':
               // s.picture = '';
                break;
          case 'yle-radio-suomi-pohjanmaa':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-joensuu':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-hameenlinn':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-kokkola':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-jyvaskyla':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-kemi':
                //  s.picture = '';
                  break;
          case 'yle-radio-suomi-kuopio':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-pori':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-tampere':
                 // s.picture = '';
                  break;
          case 'yle-radio-suomi-turku':
                 // s.picture = '';
                  break;
          case 'yle-sami-radio':
                  s.picture = 'yle-sami-radio_vtc.png';
                  break;
          case 'yle-radio-suomi-helsinki':
                  s.picture = 'yle-radio-suomi-helsinki_vtc.png';
                  break;
          case 'yle-klassinen':
                  s.picture = 'yle-klassinen_vtc.png';
                  break;
          case 'elavan-arkiston-nettiradio':
                 // s.picture = '';
                  break;
          case 'yle-areena':
                  s.picture = 'yle-areena_vt.png';
                  break;
          case 'yle-elava-arkisto':
                //  s.picture = '';
                  break;
          case 'yle-teema-fem':
                  s.picture = 'yle-teema-fem_vt.png';
                  break;
                                                                                                                                               
           default: ;
          break;
        }
        return s;
      })
    console.log("ret");
    console.log(ret);

    return ret;
  }

  prevDate = () => { 
      let cdata = this.state.currentDate;
      cdata.setDate(cdata.getDate() - 1);
      this.setState({currentDate: cdata });
      console.log(this.state.currentDate);
  }

  nextDate() { 
    let cdata = this.state.currentDate;
    cdata.setDate(cdata.getDate() + 1);
    this.setState({currentDate: cdata });
    console.log(this.state.currentDate);
  }

  render(props, state)
  {
    console.log("getDayGrid");
    console.log(state.currentDate);
    console.log(typeof state.currentDate);
    console.log("state.services 12");
    console.log(state.services);
    console.log(typeof state.services);

    let servicesCells = null;
    if (state.services != null)
      servicesCells = state.services.map((s, i) => {
       return <LayoutGrid.Cell cols="1">{s.title.fi !== undefined ? s.title.fi : s.title.sv}</LayoutGrid.Cell>
    });
  
    return( <div>
        <Chips>
        <Chips.Chip>
            <Chips.Text onClick={this.prevDate}>&lt;</Chips.Text>
        </Chips.Chip>
        <Chips.Chip>
            <Chips.Text>{state.currentDate.getDate()+"."+(state.currentDate.getMonth())+"."+state.currentDate.getFullYear()}</Chips.Text>
        </Chips.Chip>
      <Chips.Chip>
        <Chips.Text onClick={this.nextDate} >&gt;</Chips.Text>
      </Chips.Chip>
    </Chips>

    <LayoutGrid>
        <LayoutGrid.Inner>
        {servicesCells}
        </LayoutGrid.Inner>
    </LayoutGrid>
    </div>
    );
  }
}

export default DayGrid;
