import React from 'react';
import {useStoreActions, useStoreState} from "easy-peasy";

 const Editor = ({side}) => {
     console.log(side);
     const {count, searching, criteria, products} = useStoreState(state => state[side]);
     const setCriteria = useStoreActions(actions => actions[side].setCriteria);
     let i = 0;

     return <>
         {searching ? 'Searching...' : 'Ready'}
         <textarea defaultValue={criteria} onChange={e => setCriteria(e.target.value)}/>
         <div>{count} product</div>
         <ul>
             {products.map(p => <li key={'item' + i++}>{JSON.stringify(p)}</li>)}
         </ul>
     </>;
 };

 // Editor.propTypes = {
// side: PropTypes.oneOf([]).isRequired
 // };

 export default Editor;