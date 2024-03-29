import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '@/hooks'
import { increment } from '@/features/pageMovingCounter/pageMovingCounterSlice'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes: Array<string>): string {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  interface Item { name: string, to: string, current: boolean }
  const [navigation, setNavigation]: Array<any> = useState([
    { name: 'Top', to: '/top', current: false },
    { name: 'CRUD', to: '/crud', current: false },
    { name: 'Frontend Framework', to: '/frontend_framework', current: false },
    { name: 'Backend Framework', to: '/backend_framework', current: false }
  ])
  const handleClickMenu = (clicked: Item) => {
    setNavigation((navigation: Array<Item>) => {
      return navigation.map((item: Item) => {
        item.current = item.name === clicked.name
        return item
      })
    })
    if (clicked.to !== location.pathname) {
      dispatch(increment())
    }
  }

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                { /* Mobile menu button */ }
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  { open
                    ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    )
                    : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )
                  }
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    { navigation.map((item: Item) => (
                      <Link
                        key={ item.name }
                        to={ item.to }
                        className={
                          classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium'
                          )
                        }
                        onClick={() => handleClickMenu(item)}
                        aria-current={ item.current ? 'page' : undefined }
                      >
                        { item.name }
                      </Link>
                    )) }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              { navigation.map((item: Item) => (
                <Disclosure.Button key={ item.name }>
                  <Link
                    to={ item.to }
                    className={
                      classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium'
                        )
                      }
                    onClick={() => handleClickMenu(item)}
                    aria-current={ item.current ? 'page' : undefined }
                  >
                    { item.name }
                  </Link>
                </Disclosure.Button>
              )) }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
