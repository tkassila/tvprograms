    
import {h } from 'preact';
import { useState } from 'preact/hooks';
import Chips from 'preact-material-components/Chips';
import 'preact-material-components/Chips/style.css';
import 'preact-material-components/Theme/style.css';

// import { useState, useEffect  } from 'preact/hooks';
// import Config from '../util/Config';
//import CssDark from '../context/Context';

/**
 * This Address function is showing a programgrid or -list.
 */
// class Address extends Component 
const GridOrList = (props) =>
{

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    // You can also pass a callback to the setter
    const decrement = () => setCount((count) => count - 1);
    
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
        let displayitems = null;
        if (props.progtable == 'rweek')
            displayitems = getWeekGrid();
        else
        if (props.progtable == 'rday')
            displayitems = getDayGrid(props);
        else
        if (props.progtable == 'rlist')
            displayitems = getListGrid();

        return (
            <div>{displayitems}
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            </div>
          );
   // }
}

export default GridOrList;
