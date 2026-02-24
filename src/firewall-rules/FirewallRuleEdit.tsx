import {
  BooleanInput,
  Edit,
  FormDataConsumer,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin'
import { actionChoices } from './choices'
import { ProtocolSelectInput } from './ProtocolSelectInput'

type FirewallRuleEditFormData = {
  enabled?: boolean
  protocol?: string
}

export function FirewallRuleEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <BooleanInput source="enabled" />
        <FormDataConsumer<FirewallRuleEditFormData>>
          {({ formData }) => {
            const isRuleDisabled = formData.enabled === false
            const isIcmp = formData.protocol === 'icmp'

            return (
              <>
                <SelectInput
                  source="action"
                  choices={actionChoices}
                  disabled={isRuleDisabled}
                />
                <ProtocolSelectInput disabled={isRuleDisabled} validate={required()} />

                {!isIcmp && (
                  <>
                    <TextInput source="port" disabled={isRuleDisabled} />
                    <TextInput source="portTo" label="Port To" disabled={isRuleDisabled} />
                  </>
                )}
              </>
            )
          }}
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  )
}
