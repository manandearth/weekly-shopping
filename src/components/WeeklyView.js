import React from 'react';
import Cell from './Cell';
class WeeklyView extends React.Component {
  
	render(){

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const numberOfRows = 5; //TODO rethink how the number of meals in a day is to be decided
		return(
      <div>
        <table>
          <thead>
            <tr className='top-bar'>{weekdays.map(day => 
              (<td className='weekly-view-header'><h2 >{day}</h2></td>))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map(meal => <tr className='weekly-view-cell'>
                                    {weekdays.map(cell => (<td><Cell /></td>))} </tr>)}
          </tbody>
        </table>
			</div>
    );
    
	}
}

export default WeeklyView;
