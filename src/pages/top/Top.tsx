import PageMovingCounter from '@/components/PageMovingCounter'

function Top(): JSX.Element {
  return (
    <div className="min-h-screen my-0 w-max mx-auto">
      <div className="text-3xl py-12">
        Top
      </div>
      <PageMovingCounter />
    </div>
  )
}

export default Top
