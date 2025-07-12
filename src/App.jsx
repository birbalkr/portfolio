
import { Layout, Sidebar } from './components'


export const App = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row '>
        <div className='fixed flex-1'>
          <Sidebar />
        </div>
        <div className='flex-1 max-w-fit'>
          <Layout />
        </div>
      </div>
    </>
  )
}
