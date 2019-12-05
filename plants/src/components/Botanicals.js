import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plants from './Plants'

function Botanicals() {
	// Add your function name here
	const [info, setInfo] = useState([]);
	useEffect(() => {
		axios
			.get('https://trefle.io/api/plants?token=dVIxMU94WGZTcG9pYTZIMEdMTXJHZz09') 
			.then(data => {
				console.log('API Info Here', data.data); 
				setInfo(data.data);
			})
			.catch(error => {
				console.log('Whoops go back, thats an error!', error);
			});
	}, []);
	console.log(info);

	


	return <div> 
		 {info.map(list => {
	return <Plants   name={list.name}/>;
  })}
      </div>; 
}
export default Botanicals;


// {info.map(list => {
// 	return <Plants   name={list.name}/>;
//   })}

// https://trefle.io/api/plants?token=dVIxMU94WGZTcG9pYTZIMEdMTXJHZz09


//LOTR  gioxJmgcLp8GqYfpukiJ