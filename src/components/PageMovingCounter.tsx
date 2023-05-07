import { useAppSelector } from '@/hooks'

function PageMovingCounter(): JSX.Element {
  const pageMovingCount = useAppSelector(state => state.pageMovingCounter.value)

  return (
    <table className="border-collapse py-3">
      <thead>
        <tr>
          <th className="border border-slate-300 p-3" colSpan={2}>
            <img src="/redux.svg" className="logo redux h-4 p-0" alt="Redux logo" />Redux
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="border border-slate-300 p-3 bg-slate-100">
            Page Moving Count
          </th>
          <td className="border border-slate-300 p-3">
            {pageMovingCount}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default PageMovingCounter
