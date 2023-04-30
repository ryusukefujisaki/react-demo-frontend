import axios from '@/utilities/axios'

function BackendFramework(): JSX.Element {
  axios.get('').then(response => {
    const backendFrameworkEle = document.getElementById('backend-framework') as HTMLElement | null
    if (backendFrameworkEle != null) {
      backendFrameworkEle.innerHTML = response.data
    }
  })

  return (
    <div id="backend-framework" />
  )
}

export default BackendFramework
