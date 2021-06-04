import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  // Solution 1
  var arr = [1,2,4,7,6,3,10]
  var ans = [];
  for(var i = 0; i < arr.length; i++)
  if (arr[i] % 2 == 0) ans.push(arr[i])

  // Solution 2
  var s = '00110001001110'
  var c = 0,max = 0;
  for(var i = 0; i < s.length; i++){
    if(c > max) max = c
    if(s[i] == '1') c++
    else c = 0
  }

  // Solution 3
  var nums = [0,1,2,3,4,5,6,7,7,8,9,10,11]
  var dupe_num = -1
  for(var i = 1; i < nums.length; i++)
  if(nums[i] == nums[i-1]){
    dupe_num = nums[i]
    break
  }

  // Solution 4
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(res => res.json()).then(
          (result) => {
          setItems(result);
        },)
    })

  // Solution 5
  var hash = {
    0 : {
      "id": 4, "name": "abc"
    },
    1 : {
      "id": 10, "name": "abc2"
    },
    2 : {
      "id": 5, "name": "abc3"
    },
    3 : {
      "id": 6, "name": "abc5"
    }

  }
  var ids = []
  for(var i in hash){
    ids.push([hash[i]["id"],i])
  }
  ids.sort(function(a, b){return a[0] - b[0]})

  var list = []
  for(var i in ids){
    list.push(
    <li>
      {hash[ids[i][1]].id} {hash[ids[i][1]].name}
    </li>
    );
  }




  return (
    <div className="App">
      <p>Question 1 (Print even)</p>
      <p>Output: {ans.join(" ")}</p>

      <p>Question 2 (maximum consecutive 1's)</p>
      <p>Output: {max}</p>

      <p>Question 3 (Find duplicate number)</p>
      <p>Output: {dupe_num}</p>

      <p>Question 4 (Fetch data from Api)</p>
      <ul>
        {items.map(item => (
          <li >
            {item.id} {item.title}
          </li>
        ))}
      </ul>

      <p>Question 5 (Sorting a hashmap by id)</p>
      <ul>
       {list}
      </ul>

    </div>
  );
}

export default App;
