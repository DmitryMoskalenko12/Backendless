import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TabsPage from "../../pages/tabsPage";
import ErrorPage from "../../pages/errorPage";
import { request } from '../../helpers/helpers';
import React, { useEffect, useState } from "react";
import './app.scss';

const App = () => {
const [dummy, setDummy] = useState([]);

useEffect(() => {
  request()
  .then((res) => setDummy(res))
  .catch((e) => console.log(e))
},[])

if (dummy.length === 0) {
  return <div className='loading'>Loading...</div>
}

  const router = createBrowserRouter(
    [
      {path: '/', errorElement: <ErrorPage/>, element: <TabsPage data={dummy}/>, children: [{path: dummy[0]?.id, async lazy() {
        let {DummyTable} = await import(`../${dummy[0]?.path}`)

        return {
          Component: DummyTable
        }
      }},
      {path: dummy[1]?.id, async lazy() {
        let {DummyChart} = await import(`../${dummy[1]?.path}`)

        return {
          Component: DummyChart
        }
      }},
      {path: dummy[2]?.id, async lazy() {
        let {DummyList} = await import(`../${dummy[2]?.path}`)

        return {
          Component: DummyList
        }
      }}]}
    ]
  )

  return <RouterProvider router={router}/>
}

export default App;