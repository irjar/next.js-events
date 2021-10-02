This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


The app allows to browse events, select a single event and filter for events. 

•	There is a starting page with a list of featured events.

•	There is a /events route to the Events page with all events. 

•	Users can click an event to see details of that event to potentially sign up for it and book it on Events Details page (/events/<some-id> route). 
  
•	There is a feature that the users can filter the events by year and month (route events/…slug with a dynamic slug segment)
