# nodejs-site-analyze-sample

In a web application created with SPA, the URLs of the events that are coming up are obtained from the response returned from the relevant URL according to the requested request, so that we can research the data that will be returned from them.

After the first data is obtained, an array called 'arrayOfMatched = []' is defined to store the final result URLs that we will actually obtain as a result of the process. Then, the map function is used to request the URLs of the upcoming events, and here the structure of the endpoint responses that will be returned to us is defined using template literals, and data is obtained from the returned response.

The .search() method is used to check whether the desired data is present in the response. Since this method returns a value of -1 if there is no matching data, the if control is written as 'if (include !== -1)' to identify the matching data and add it to the defined empty array.

If we used a forEach loop to iterate through the 'events' array instead of .map().

![for-each](https://user-images.githubusercontent.com/104626041/211388966-11b17357-fd8c-43fa-84f3-c732c6cf1fdc.jpeg)

In this way, the returned response was an empty array.

![empty-array](https://user-images.githubusercontent.com/104626041/211388625-ba0ede39-f9a1-4268-b87d-4dd2bedb0e6e.jpeg)

WHYYY!!

The reason for this is that the forEach function does not work asynchronously. The forEach function processes each array element in sequence for the specified loop and does not wait for the processing to complete. Instead, the forEach function begins processing all array elements immediately and does not wait for the results. As a result, updates to the arrayOfMatched array may be incomplete before the console.log() call is executed.

As a solution, you can use the map or reduce functions instead of forEach. These functions accumulate the results while processing each array element in the loop and return them. This way, updates to the arrayOfMatched array will be completed before the console.log() call is executed

