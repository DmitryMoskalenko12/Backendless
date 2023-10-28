import { request } from "../../helpers/helpers";
import React,{ useState, useEffect } from "react";
import './dummyList.scss';

export const DummyList = () => {
  const [list, setList] = useState({});

useEffect(() => {
  request()
  .then((res) => {
    setList(res[2])
  })
},[])

  return <ul className="dummy-list">
          <li>{list.title}</li>
          <li>{list.order}</li>
          <li>{list.path}</li>
          <li>{list.id}</li>
        </ul>
  
}


