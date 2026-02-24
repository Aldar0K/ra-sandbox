import { Filter, SelectInput, TextInput } from 'react-admin'
import { actionChoices, enabledChoices } from './choices'

export const firewallRuleListFilters = (
  <Filter>
    <TextInput source="name_like" label="Search name" alwaysOn />
    <SelectInput source="enabled" label="Enabled" choices={enabledChoices} alwaysOn />
    <SelectInput source="action" label="Action" choices={actionChoices} alwaysOn />
  </Filter>
)
