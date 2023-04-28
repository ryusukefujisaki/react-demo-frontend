import { useState, useEffect } from 'react'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

function Crud(): JSX.Element {
  const [cruds, setCruds]: Array<any> = useState([])
  const [updated, setUpdated] = useState(0)
  useEffect(() => {
    axios.get('/cruds').then(response => {
      setCruds(cruds => cruds = response.data)
    })
  }, [updated])
  const [createInput, setInputCreate]: Array<any> = useState()
  function handleChangeCreate(event) {
    setInputCreate((createInput: string | null) =>
      createInput = event.target.value
    )
  }
  function handleClickCreate(event) {
    event.preventDefault()
    axios.post('/cruds', { value: createInput }).then(() => {
      setInputCreate((createInput: string | null) => {
        createInput = null
      })
      document.getElementById('create-input').value = null
      setUpdated((updated: number) => ++updated)
    })
  }

  return (
    <>
      <p className="text-3xl text-left ml-16 py-3">C</p>
      <form className="flex">
        <input
          id="create-input"
          className="flex ml-16 w-1/5 border rounded p-3 focus:outline-none"
          type="text"
          placeholder="value"
          onChange={handleChangeCreate}
        />
        <input
          className="bg-blue-500 hover:bg-blue-600 w-1/12 text-white ml-1 p-3 rounded focus:outline-none"
          type="submit"
          value="Submit"
          onClick={handleClickCreate}
        />
      </form>
      <p className="text-3xl text-left ml-16 py-3">R</p>
      <table className="table-fixed px-16 border-separate w-full bg-white dark:bg-slate-800">
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            {
              ['id', 'value', 'created_at', 'updated_at'].map((th, index) =>
                <th
                  className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-3  text-slate-500"
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
                    className="border border-slate-300 dark:border-slate-700 p-3 text-slate-500"
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
