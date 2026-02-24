import { SelectInput, type SelectInputProps } from 'react-admin'
import { protocolChoices } from './choices'

type ProtocolSelectInputProps = Omit<SelectInputProps, 'choices'>

export function ProtocolSelectInput(props: ProtocolSelectInputProps) {
  const { sx, ...rest } = props

  return (
    <SelectInput
      source="protocol"
      label="Protocol"
      choices={protocolChoices}
      helperText="Select protocol used by the rule"
      {...rest}
      sx={[
        {
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
          '& .MuiFormHelperText-root': {
            mx: 0,
            color: 'text.secondary',
          },
          '& .MuiFormHelperText-root.Mui-error': {
            color: 'error.main',
            fontWeight: 500,
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  )
}
