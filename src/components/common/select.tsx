'use client'

import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, ChevronUpDown } from '@/components/common/icons'
import { firstLetterCapitalized } from '@/utils/first-letter-capitalized'
import { type OptionsSelect } from '@/types/types'

interface SelectProps {
  items: string[]
  options: OptionsSelect
  className?: string
  filter: (item: string | null) => void
}

export function Select ({
  items,
  options: { nameItems, textOption, state },
  className = '',
  filter
}: SelectProps) {
  const [selected, setSelected] = useState<string>(nameItems)

  useEffect(() => {
    if (state == null) setSelected(nameItems)
  }, [state])

  const onChange = (item: string) => {
    setSelected(item)
    filter(item === nameItems ? null : item)
  }

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className={`relative ${className}`}>
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-bg-100 py-2 pl-3 pr-8 text-left shadow-principal text-sm border-2 border-gray-200 text-text-100">
          <span className="block truncate">
            {
              selected === nameItems
                ? 'Filtrar por ' + nameItems
                : firstLetterCapitalized(selected)
            }
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden={true}
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition duration-150"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-2"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-hidden overflow-y-auto rounded-lg bg-white text-sm shadow-lg ring-1 ring-black/5 focus:outline-none text-text-100 scrollbar-none z-10">
            <Listbox.Option
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-8 pr-4 font-medium ${active ? 'bg-accent-200/10' : ''
                }`
              }
              value={nameItems}
            >
              {({ selected }) => (
                <>
                  {textOption}
                  {selected
                    ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-accent-200">
                        <Check className="h-4 w-4" aria-hidden={true} />
                      </span>
                      )
                    : null}
                </>
              )}
            </Listbox.Option>
            {items.map((item, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-8 pr-4 ${active ? 'bg-accent-200/10' : ''
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    {firstLetterCapitalized(item)}
                    {selected
                      ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-accent-200">
                          <Check className="h-4 w-4" aria-hidden={true} />
                        </span>
                        )
                      : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
