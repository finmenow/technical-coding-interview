# Questions for Technical Interviews

1. Write a function that receives two arrays of the same size, and returns the "zip" of the arrays, e.g. for the inputs ```[1, 2, 3]``` and ```[4, 5, 6]```, it will return ```[1, 4, 2, 5, 3, 6]```.

  
2. Given an unsorted array of numbers, write a function ```findKthLargest(nums: number[], k: number)``` to find the kth largest element in the array.

3. You are given two non-empty arrays representing two non-negative integers. The digits are stored in reverse order, and each of their element contains a single digit. Add the two numbers and return the sum as an array. 
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

   **Input:** arr1 = ```[2,4,3]```, arr2 = ```[5,6,4]```

   **Output:** ```[7,0,8]```

   **Explanation:** ```342 + 465 = 807```.




4. Concurrency Control with Promises
Question:
Write a function ```promisePool(limit: number, promises: (() => Promise<any>)[]) : any[] ```that accepts an array of promise-returning functions and ensures that no more than limit promises are executed concurrently. Once a promise is resolved, the next promise in the array should start.