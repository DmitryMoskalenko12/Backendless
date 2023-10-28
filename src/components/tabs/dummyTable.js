import React, { useEffect, useState } from "react";
import { request } from "../../helpers/helpers";
import './dummyTable.scss';

export const DummyTable = () => {
  const [table, setTable] = useState({});

useEffect(() => {
  request()
  .then((res) => {
    setTable(res[0])
  })
},[])

  return <table>
  <tbody>
    <tr className="dummy-table">
      <td>{table.title}</td>
      <td>{table.order}</td>
      <td>{table.path}</td>
      <td>{table.id}</td>
    </tr>
  </tbody>
</table>
}


