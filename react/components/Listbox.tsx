import {
  ListboxInput as Input,
  ListboxInputProps as InputProps,
  ListboxButton as Button,
  ListboxButtonProps as ButtonProps,
  ListboxPopover as Popover,
  ListboxPopoverProps as PopoverProps,
  ListboxList as List,
  ListboxListProps as ListProps,
  ListboxOption as Option,
  ListboxOptionProps as OptionProps,
} from '@reach/listbox'
import classNames from 'classnames'
import React from 'react'

import styles from './Listbox.css'

export const ListboxInput: React.FC<InputProps> = ({ className, ...props }) => {
  // @ts-ignore: the input component from reach has a
  // weird typing with the ref prop, which typescript is
  // complaining about
  return <Input {...props} className={classNames(className, 'w-100')} />
}

export const ListboxButton: React.FC<ButtonProps & { className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={classNames(
        className,
        'h-100 flex items-center bg-base c-on-base ba bw1 b--muted-4 hover-b--muted-3 bt-0 bl-0 bb-0 pl5 pr3 outline-0 pointer'
      )}
    />
  )
}

export const ListboxPopover: React.FC<PopoverProps> = ({
  className,
  ...props
}) => {
  return (
    // @ts-ignore: same as above
    <Popover
      {...props}
      className={classNames(
        className,
        styles.popover,
        'bg-base pv3 mt2 br2 ba bw1 b--muted-4 asbolute outline-0'
      )}
    />
  )
}

export const ListboxList: React.FC<ListProps & { className?: string }> = ({
  className,
  ...props
}) => {
  return (
    <List
      {...props}
      className={classNames(className, 'bg-base list ma0 pa0 outline-0')}
    />
  )
}

const SelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    {...props}
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.58484 0.234407L3.32991 5.48934L1.41516 3.57458C1.25767 3.42247 1.04673 3.3383 0.827788 3.34021C0.608842 3.34211 0.399402 3.42993 0.244579 3.58475C0.0897548 3.73958 0.00193415 3.94902 3.15668e-05 4.16796C-0.00187101 4.38691 0.0822967 4.59784 0.234407 4.75533L2.73954 7.26046C2.89613 7.41701 3.10849 7.50495 3.32991 7.50495C3.55134 7.50495 3.76369 7.41701 3.92029 7.26046L9.76559 1.41516C9.9177 1.25767 10.0019 1.04673 9.99997 0.827787C9.99806 0.608842 9.91024 0.399402 9.75542 0.244579C9.6006 0.0897547 9.39116 0.00193415 9.17221 3.15668e-05C8.95327 -0.00187101 8.74233 0.0822966 8.58484 0.234407Z"
      fill="currentColor"
    />
  </svg>
)

export const ListboxOption: React.FC<OptionProps & { className?: string }> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Option
      {...props}
      className={classNames(
        className,
        styles.option,
        'flex items-center pointer bg-action-secondary pv3 pr7'
      )}
    >
      <SelectedIcon className={classNames(styles.selectedIcon, 'dn pl5 pr3')} />
      {children}
    </Option>
  )
}
