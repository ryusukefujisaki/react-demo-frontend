import { useState, useEffect } from 'react'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

function Crud(): JSX.Element {
  const [cruds, setCruds]: Array<any> = useState([])
  useEffect(() => {
    axios.get('/cruds').then(response => {
      setCruds(cruds => cruds = response.data)
    })
  }, [])

  return (
    <>
      <p className="text-3xl text-left p-4">R</p>
      <table className="table-fixed px-4 border-separate w-full bg-white dark:bg-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            {
              ['id', 'value', 'created_at', 'updated_at'].map((th, index) =>
                <th
                  className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left"
                  style={{textAlign: 'center'}}
                  key={index}
                >
                  {th}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {cruds.map(crud =>
            <tr key={crud.id}>
              {
                [crud.id, crud.value, formatDate(crud.created_at), formatDate(crud.updated_at)].map((attribute, index) =>
                  <td
                    className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400"
                    key={`${crud.id}-${index}`}
                    >
                    {attribute}
                  </td>
                )
              }
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Crud
