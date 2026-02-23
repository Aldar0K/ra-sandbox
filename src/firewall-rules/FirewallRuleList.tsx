import { BooleanField, DataTable, List } from 'react-admin'

export function FirewallRuleList() {
  return (
    <List>
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
