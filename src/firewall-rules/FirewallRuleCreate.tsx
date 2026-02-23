import { BooleanInput, Create, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { actionChoices, protocolChoices } from './choices'

export function FirewallRuleCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <BooleanInput source="enabled" defaultValue={true} />
        <SelectInput source="action" choices={actionChoices} defaultValue="allow" />
        <SelectInput source="protocol" choices={protocolChoices} defaultValue="tcp" />
      </SimpleForm>
    </Create>
  )
}
