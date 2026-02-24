import { BooleanInput, Create, SelectInput, SimpleForm, TextInput, required } from 'react-admin'
import { actionChoices } from './choices'
import { ProtocolSelectInput } from './ProtocolSelectInput'

export function FirewallRuleCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <BooleanInput source="enabled" defaultValue={true} />
        <SelectInput source="action" choices={actionChoices} defaultValue="allow" />
        <ProtocolSelectInput validate={required()} />
      </SimpleForm>
    </Create>
  )
}
