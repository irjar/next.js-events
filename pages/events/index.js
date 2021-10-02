import { getAllEvents } from "../../dummy-data";
import EventList from '../../components/events/event-list';
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEventsPage(){
    const events = getAllEvents();
    const router = useRouter();

    // programatically navigate to a different page
    function findEventsHandler(year, month){
        // path with two dynamic segments - year and month
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return(
       <Fragment>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={events}/>
       </Fragment> 
       );
}

export default AllEventsPage;