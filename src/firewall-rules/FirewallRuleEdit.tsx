import {
  BooleanInput,
  Edit,
  FormDataConsumer,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin'
import { actionChoices, protocolChoices } from './choices'

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
                <SelectInput
                  source="protocol"
                  choices={protocolChoices}
                  disabled={isRuleDisabled}
                />

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
