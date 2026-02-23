import {
  BooleanField,
  DataTable,
  Filter,
  List,
  SelectInput,
  TextInput,
} from 'react-admin'
import { actionChoices, enabledChoices } from './choices'



const firewallRuleFilters = (
  <Filter>
    <TextInput source="name_like" label="Search name" alwaysOn />
    <SelectInput source="enabled" label="Enabled" choices={enabledChoices} alwaysOn />
    <SelectInput source="action" label="Action" choices={actionChoices} alwaysOn />
  </Filter>
)

export function FirewallRuleList() {
  return (
    <List filters={firewallRuleFilters} perPage={5}>
      <DataTable rowClick="edit">
        <DataTable.Col source="id" />
        <DataTable.Col source="name" />
        <DataTable.Col source="enabled" field={BooleanField} />
        <DataTable.Col source="action" />
        <DataTable.Col source="protocol" />
      </DataTable>
    </List>
  )
}
