import classNames from 'classnames'
import * as React from 'react'
import 'materialize-css/dist/css/materialize.css'

export interface SelectOption {
  label: string
  value: any
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, 'onChange' | 'children'> {
  onChange: (value: any) => void
  options: SelectOption[]
}

export const Select = React.forwardRef(
  ({ onChange, className, options, ...props }: SelectProps, ref) => {
    React.useRef(ref)
    const change = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.currentTarget.value)
    }
    const componentProps: React.HTMLProps<HTMLSelectElement> = {
      onChange: change,
      ...props
    }
    const [showOptions, setShowOptions] = React.useState<boolean>(false)
    return (
      <div
        style={{
          position: 'relative'
        }}
        className={className}
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className='select-wrapper'>
          <input
            className='select-dropdown dropdown-trigger'
            type='text'
            readOnly
            value={props.value || props.placeholder}
          />
          <ul
            className={classNames('dropdown-content', 'select-dropdown')}
            style={
              showOptions
                ? {
                    display: 'block',
                    left: '0px',
                    top: '0px',
                    width: '100%',
                    maxHeight: '200px',
                    transformOrigin: '0px 0px',
                    opacity: 1,
                    transform: 'scaleX(1) scaleY(1)'
                  }
                : {}
            }
          >
            {options.map(({ value, label, disabled }) => (
              <li
                key={value}
                className={classNames({
                  disabled: disabled,
                  selected: value === props.value
                })}
                onClick={(event) => {
                  event.stopPropagation()
                  if (!disabled) {
                    onChange(value)
                    setShowOptions(false)
                  }
                }}
              >
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <svg
            className='caret'
            height='24'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M7 10l5 5 5-5z' />
            <path d='M0 0h24v24H0z' fill='none' />
          </svg>
          <select {...componentProps}>
            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
)
