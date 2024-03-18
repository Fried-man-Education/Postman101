// Generate a random email address
/*
Implement a JavaScript function called getRandomEmail that takes a domain name as input and generates a random email address. If the function is called multiple times with the same domain name, it should generate a different email address every time.
Example: If the input is the domain name outlook.com, the expected output needs to contain a random string and the domain name provided.
Input: outlook.com
Output: hfj56ms@outlook.com
You can use the following expression to generate a random string:
Math.random().toString(36).substring(7);
*/
function getRandomEmail(domain) {
  return Math.random().toString(36).substring(7) + "@" + domain;
}

// This is how the function could be caled
// getRandomEmail('google.com');
