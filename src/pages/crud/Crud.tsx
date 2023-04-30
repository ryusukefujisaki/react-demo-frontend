import { useState, useEffect } from 'react'
import axios from '@/utilities/axios'
import { formatDate } from '@/utilities/displayHelper'

function Crud(): JSX.Element {
  const [cruds, setCruds]: Array<any> = useState([])
  const [updated, setUpdated]: Array<any> = useState(0)
  useEffect(() => {
    axios.get('/cruds').then(response =>
      setCruds(() => response.data)
    )
  }, [updated])

  function handleCreateClick(event: any): void {
    event.preventDefault()
    const createInputEle = document.getElementById('create-input') as HTMLInputElement | null
    if (createInputEle != null) {
      const requestBody = { value: createInputEle.value }
      axios.post('/cruds', requestBody).then(() => {
        createInputEle.value = ''
        setUpdated((updated: number) => ++updated)
      })
    }
  }
  function handleUpdateClick(event: any): void {
    const id: string = event.target.getAttribute('data-id')
    const updateInputEle = document.getElementById(`update-input-${id}`) as HTMLInputElement | null
    if (updateInputEle != null) {
      const requestBody = { value: updateInputEle.value, updated_at: Date.now() }
      axios.patch(`/cruds/${id}`, requestBody).then(() => {
        updateInputEle.value = ''
        setUpdated((updated: number) => ++updated)
      })
    }
  }
  function handleDeleteClick(event: any): void {
    const id: string = event.target.getAttribute('data-id')
    axios.delete(`cruds/${id}`).then(() =>
      setUpdated((updated: number) => ++updated)
    )
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
        />
        <input
          className="bg-green-400 hover:bg-green-500 w-1/12 text-white ml-1 p-3 rounded focus:outline-none"
          type="submit"
          value="Create"
          onClick={handleCreateClick}
        />
      </form>
      <table className="table-fixed px-16 mb-3 border-separate w-full bg-white dark:bg-slate-800">
        <thead>
          <tr className="text-3xl text-left ml-16 py-3">
            {
              ['R', '', '', ''].map((crudLabel, index) =>
                <td className="px-0 py-3" key={index}>
                  {crudLabel}
                </td>
              )
            }
            <td className="px-0 py-3 w-2/12">U</td>
            <td className="px-0 py-3 w-1/12"></td>
            <td className="px-0 py-3 w-1/12">D</td>
          </tr>
          <tr>
            {
              ['id', 'value', 'created_at', 'updated_at'].map((th, index) =>
                <th
                  className="border border-slate-300 font-semibold p-3 text-slate-500 bg-slate-100"
                  style={{textAlign: 'center'}}
                  key={index}
                >
                  {th}
                </th>
              )
            }
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cruds.map((crud: any) =>
            <tr key={crud.id}>
              {
                [crud.id, crud.value, formatDate(crud.created_at), formatDate(crud.updated_at)].map((attribute, index) =>
                  <td
                    className="border border-slate-300 text-slate-500"
                    key={`${crud.id}-${index}`}
                  >
                    <div className="p-3 overflow-x-scroll whitespace-nowrap">
                      {attribute}
                    </div>
                  </td>
                )
              }
              <td>
                <input
                  id={`update-input-${crud.id}`}
                  className="flex w-full border rounded p-3 focus:outline-none"
                  type="text"
                />
              </td>
              <td>
                <input
                  className="flex w-full bg-blue-400 hover:bg-blue-500 text-white p-3 rounded focus:outline-none"
                  data-id={crud.id}
                  type="button"
                  value="Update"
                  onClick={handleUpdateClick}
                />
              </td>
              <td>
                <input
                  className="flex w-full bg-red-400 hover:bg-red-500 text-white p-3 rounded focus:outline-none"
                  data-id={crud.id}
                  type="button"
                  value="Delete"
                  onClick={handleDeleteClick}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Crud
