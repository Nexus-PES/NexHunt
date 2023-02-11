// const hours = 2;
// const start = 1675967288467;

// const startTime = (start/1000).toFixed(0);
// const finalTime = (start/1000+(hours*3600)).toFixed(0);

// export {finalTime, startTime, hours};

//------------------------------------------------------------------------------


//event starting time - in milliseconds
// export const eventStart = new Date('Feb 11, 2023 20:00:00').getTime();
export const eventStart = new Date('MAr 3, 2023 16:00:00').getTime();

//current time - in seconds

//event duration - in hours
export const eventDuration = 2;

//event end time - in milliseconds
export const eventEnd = eventStart + 2 * 3600*1000;
