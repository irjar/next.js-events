import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

function HomePage(){
  // get featured events
    const featuredEvents = getFeaturedEvents();

    return<div>
        < EventList items={featuredEvents}/>
    </div>
}

export default HomePage;