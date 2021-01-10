import React, {useState} from 'react';

//{words.map( (word, index) => <li className={styles.listItem} key={ index }>{ word }</li> )}

const Box = props => {
 // map box array
  const {color} = props;

  return (<div className="box" style={{backgroundColor: color, display: "inline-block", width: 50, height: 50, marginRight: 10}}></div>)

};

// {
//   hasBeenSubmitted ?
//   <div className="box" style={ styling }></div> : ""
// }

export default Box;