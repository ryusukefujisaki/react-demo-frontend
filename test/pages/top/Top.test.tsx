import * as renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Top from '@/pages/top/Top'
import store from '@/store'

it('snapshot test', () => {
  const page = renderer.create(
    <Provider store={store}>
      <Top />
    </Provider>
  )
  let tree = page.toJSON()
  expect(tree).toMatchSnapshot()
})
