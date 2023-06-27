# Questions for Technical Interviews

1. Write a function that receives two arrays fo the same size, and returns the "zip" of the arrays, e.g. if it receives [1, 2, 3] and [4, 5, 6], it will return [1, 4, 2, 5, 3, 6].


2. A website domain "app.mydomain.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "mydomain.com" and at the lowest level, "app.mydomain.com". When we visit a domain like "app.mydomain.com", we will also visit the parent domains "mydomain.com" and "com" implicitly. A count-paired domain is a domain that has format of ```count d1.d2.d3``` where ```count``` is the number of visits to the domain and ```d1.d2.d3``` is the domain itself. For example, "9001 app.mydomain.com" is a count-paired domain that indicates that app.mydomain.com was visited 9001 times. Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

**Example 1:**

   Input: cpdomains = ```["10 domain.com", "5 com"]```

   Output: 
   ```["10 domain.com","15 com"]```


**Example 2:**

   Input: cpdomains = ```["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]```

   Output: 
   ```["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]```
   
3. You are given two non-empty arrays representing two non-negative integers. The digits are stored in reverse order, and each of their element contains a single digit. Add the two numbers and return the sum as an array. 
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

   **Input:** arr1 = ```[2,4,3]```, arr2 = ```[5,6,4]```

   **Output:** [7,0,8]

   **Explanation:** 342 + 465 = 807.

4. Implement an event emitter with the abilties to subscribe, unsubscribe and emit events.
**Bonus**: add a method to emit an event only once.