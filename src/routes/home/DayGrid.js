    
import {Component, h } from 'preact';
import { useState } from 'preact/hooks';
import Chips from 'preact-material-components/Chips';
import 'preact-material-components/Chips/style.css';
import 'preact-material-components/Theme/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

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
      services: this.getDayServices(cdate, props.programs),
    }

    // this.prevDate = this.prevDate.bind(this);
    this.nextDate = this.nextDate.bind(this);
  }
    
  getDayPrograms = (cdate, programs) =>
  {
    console.log("getDayPrograms");
    return null;
  }

  getDayServices = (cdate, programs) =>
  {
    console.log("getDayServices");
    return null;
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

    /*
    const localdate = new Date(currentDate);
    console.log("localdate");
    console.log(localdate);
    console.log(typeof localdate);
    */

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
        <LayoutGrid.Cell cols="1">D Maanantai</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D1 Tiistai</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D2 Keskiviikko</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D3 Torstai</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D4 Perjantai</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D5 Lauantai</LayoutGrid.Cell>
        <LayoutGrid.Cell cols="1">D6 Sunnuntai</LayoutGrid.Cell>
        </LayoutGrid.Inner>
    </LayoutGrid>
    </div>
    );
  }
}

export default DayGrid;
