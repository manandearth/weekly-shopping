import React from 'react';
import Cell from './Cell';
import { getWeek } from '../redux/selectors';
import { connect } from 'react-redux';
import _ from 'lodash';

const EmptyCell = () =>
      (<div >
       </div>);

class WeeklyView extends React.Component {

  // FIX -> find a way to look for day value as a predicate to return  all the day's entries or empty..
  mealsByDay = ( weekday ) => {
    
    const entries= _.keys(this.props.week).filter( entry => (entry.startsWith(weekday)));
    return entries;
      
  }
  
render(){
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const longestColumn = _.max(weekdays.map(weekday => this.mealsByDay(weekday).length));
		return(
      <div>
        <h1>{weekdays.map(weekday => this.mealsByDay(weekday))}</h1>
        <table>
          <thead>
            <tr className='top-bar'>{weekdays.map(day => 
              (<td className='weekly-view-header'><h2 >{day}</h2></td>))}
            </tr>
          </thead>
          <tbody>
            {/* first row */}
            <tr className='weekly-view-cell'>
                {weekdays.map(cell =>
                  <td>
                   <Cell
                     cellID={cell + '-1'} 
                     key={cell + '-1'}
                   />
                  </td>)
                }</tr>
            {/* consecutive rows */}
            {_.range(2, _.max([2, longestColumn + 2]) + 1).map(row =>
              <tr className='weekly-view-cell'>
                {weekdays.map(weekday =>
                  this.mealsByDay(weekday)
                  && this.mealsByDay(weekday).length + 1 >= row
                  ?
                  <td>
                   <Cell
                     cellID={weekday + '-' + row} 
                     key={weekday + '-' + row}
                   />
                     </td>
                : 
                     <td>
                  <EmptyCell />
                        </td>
                )}
              </tr>)}
            
          </tbody>
        </table>
			</div>
    );
	}
}

const mapToProps = ( state ) => {
  return {
    week: getWeek(state)
  };
}; 

export default connect(mapToProps)(WeeklyView);
