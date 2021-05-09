    
import {h , Component } from 'preact';
import { useContext } from 'preact/hooks';
// import { useState, useEffect  } from 'preact/hooks';
// import Config from '../util/Config';
//import CssDark from '../context/Context';


/**
 * This Address function is showing a address.
 */
// class Address extends Component 
const Category = (props) =>
{

    const categoryClicked = event => {     
        event.preventDefault();   
        if (props.selectedcategory === null)
            return;

      //  if (distance == null || distance === '')
        //  setDistance('800');
        props.selectedcategory(event.target.text);
    }

    // render(props) {
       // const cssDark = useContext(CssDark);
        const nocallclickhandler = (props.selectedcategory == null)
        if (nocallclickhandler)
        {
            return (
                <div className={"div"} data-message="lähiosoite" >
                  <p className={"p" }>{props.category}</p>
                  </div>                              
              );  
        }
        else
        return (
              <div className={"div"} data-message="klikattu lähiosoite" >
                <a className={"a"} id={"categorylink" +props.id} href={"."} 
                onClick={categoryClicked}>{props.category}</a>
              </div>                              
            );
   // }
}

export default Category;
