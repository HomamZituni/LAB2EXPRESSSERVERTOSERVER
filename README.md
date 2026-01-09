Github Repo:https://github.com/HomamZituni/LAB2EXPRESSSERVERTOSERVER

Vercel Deployment: https://lab-2-expressservertoserver.vercel.app/api/fun-fact

Reflection:

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
It was to ensure only the essential fact data is received, so the response is not cluttered and helps the response maintain backward compability. 

2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
So you do not expose sensitive data. You want to give them informtion without compromising the entire application. 

3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
You would just change the language query parameter in the req.query and adjust the external API request accordingly to the other language if supported by the provider. 
