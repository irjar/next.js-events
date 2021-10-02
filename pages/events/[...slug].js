import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from '../../components/events/results-title';
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEvents(){
    // read the filtered value from the URL to pick the correct events
    const router = useRouter();

    const filterData = router.query.slug;
    

    // check if the filter data is undefined i.e. when the component is 
    // rendered for the first time
    if(!filterData){
        return <p className='center'>Loading...</p>
    }
     
    // when the component is rendered for the second time look for the 
    // appropriate events
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    // transform the data that is in a string format into numbers
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    // handle errors when the manually input year.month 
    // into URL are valid numbers
    if(isNaN(numMonth) || 
      isNaN(numYear) || 
      numYear > 2030 || 
      numYear < 2021 || 
      numMonth < 1 || 
      numMonth > 12
      ){
      return <Fragment>
       <ErrorAlert> 
        <p>Invalid filter. Please adjust your values.</p>
       </ErrorAlert>
       <div className='center'> 
         <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    }
    
    // get the filtered events
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    // check if no events are found
    if(!filteredEvents || filteredEvents.length === 0){
        return(
        <Fragment>
        <ErrorAlert>
         <p>No events found for the chosen filter </p>
        </ErrorAlert>

        <div className='center'> 
         <Button link='/events'>Show All Events</Button>
        </div>
        </Fragment>)
    }

    const date = new Date(numYear, numMonth - 1);
    
    // display filtered events
    return <Fragment>
     <ResultsTitle date={date} />
     <EventList items={filteredEvents}/>
    </Fragment>
}

export default FilteredEvents;