const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  var res1=scores.map((e)=>e.name);
  console.log(res1);
  var res2=scores.filter((e)=>e.marks>=40);
  console.log(res2);
  var res3=scores.filter((e)=>e.marks<40).map((e)=>e.name);
  console.log(res3);
  var res4=scores.reduce((a,e)=>{return a+e.marks;},0)
  var res4=res4/7;
  console.log(res4);
  var res5=scores.filter((e)=>e.marks>90).map((e)=>e.name);
  console.log(res5)
  //var res5=
  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];
  
  // Task 4
  // Find the Average marks
  
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"
  
  // Only use
  // map, reduce, filter & destructuring