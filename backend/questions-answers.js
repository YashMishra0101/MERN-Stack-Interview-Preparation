/*
##1) What is CORS?

CORS = Cross-Origin Resource Sharing

It's a security feature implemented by browsers to control which websites can access resources from your backend server.

-- What is CORS?

- Origin = Protocol + Domain + Port
- Browser security feature that blocks requests between different origins
- Prevents malicious websites from stealing your data

-- Why CORS Exists

CORS exists to protect users from malicious websites trying to:
=>Steal their cookies
=>Access private APIs
=>Perform actions (like buying something or deleting data) without permission

Basically, it stops unauthorized cross-origin access unless the server explicitly allows it.

CORS is like a bouncer 🧍‍♂️ at a club (your backend) who checks the ID (origin) of anyone (frontend) trying to enter. Only the ones you approve get access inside.


#2) What is Middleware.

Basically, middleware is a function that has access to the request and response objects. It can either end the request-response cycle or, if certain conditions are met (like authentication), forward the request to the next middleware or route.

---More Professional 

A middleware is a function that has access to the request object (req), the response object (res), and the next middleware function (next) in the application’s request-response cycle.

It can modify the request and response objects, execute code, end the request-response cycle, or call the next middleware in the stack using next().

#3)What is Json.

“JSON (JavaScript Object Notation) is a lightweight, text-based format used to store and transfer data between a client and a server. It is easy to read for humans and easy for machines to parse. JSON is used in both websites and mobile apps — whenever data travels between frontend and backend through APIs, it usually travels in JSON format.”

“JSON is not limited to JavaScript. Almost all languages like Python, Java, PHP, C#, Ruby, Swift, Kotlin, etc., use JSON because it is universal and very easy to work with.”

---How data travels (one simple line)

“When frontend sends data to backend or backend sends data to frontend, the data usually travels in JSON format through APIs.”

---Example: What JSON actually looks like

(You can show this to interviewers if they ask for an example.)

{
  "id": 1,
  "name": "Yashu",
  "age": 23,
  "isDeveloper": true
}

This is the real look of a JSON object — key/value pairs inside curly braces with double quotes.

---Example: How a website fetches JSON from backend**

Frontend code (JavaScript):

```javascript
fetch("https://api.example.com/user")
  .then(response => response.json())
  .then(data => {
    console.log("Received JSON:", data);
  })
  .catch(err => console.error(err));
```

Here:

  Frontend sends a request
  Backend returns JSON
  Frontend receives JSON and uses it

Claude
---https://claude.ai/public/artifacts/1f1d7e88-ed18-470f-9855-14b61fde420e

#4)What is BSON.

Claude
---https://claude.ai/public/artifacts/979a2fce-fdbd-4d6d-aae4-e1eccc992f40

#5)What is multer.
#6)What is mongoose-aggreate-paginate-v2
#7)Cors
#8)Cloudinary
#9)Cookieparser
#10)Jsonwebtoken
#11)Bcrypt
*/
