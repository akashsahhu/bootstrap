import React, { useState } from 'react';

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addAvtivity(){
    setlistData((listData)=>{
      const updateList =[...listData, activity]
      console.log(updateList)
      setActivity('');
      return updateList
    })
  }

  function removeActivity(i){
    const updatedListData = listData.filter((elem, id)=>{
      return i!=id;
    })
    setlistData(updatedListData);
  }

  function removeAll(){
    setlistData([])
  }

  return (
    <>
        <div className='container'>
            <div className='header'>
                TODO LIST
            </div>
            <input type='text' placeholder='add activity' value={activity} onChange={(e) => setActivity(e.target.value)}/>
            <button onClick={addAvtivity}>Add</button>
            <p className='List-heading'>Here is your List :{")"}</p>
            {listData!=[] && listData.map((data,i)=>{
              return(
                <>
                  <p key={i}>
                      <div className='listData'>{data}</div>
                      <div className='btn-position'>
                        <button onClick={()=>removeActivity(i)}>remove(-)</button>
                      </div>
                  </p>
                </>
              )
            })}
            {listData.length>=1 && <button onClick={removeAll}>Removr All</button>}
        </div>
    </>
  )
}

export default TodoList;