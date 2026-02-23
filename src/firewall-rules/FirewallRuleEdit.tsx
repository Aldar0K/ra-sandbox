import { BooleanInput, Edit, SelectInput, SimpleForm, TextInput } from 'react-admin'
import { actionChoices, protocolChoices } from './choices'

export function FirewallRuleEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
        <BooleanInput source="enabled" />
        <SelectInput source="action" choices={actionChoices} />
        <SelectInput source="protocol" choices={protocolChoices} />
      </SimpleForm>
    </Edit>
  )
}
