import {
  BooleanField,
  DataTable,
  List,
} from 'react-admin'
import { FirewallRuleListActions } from './FirewallRuleListActions'
import { firewallRuleListFilters } from './FirewallRuleListFilters'
import { StatusChipField } from './StatusChipField'

export function FirewallRuleList() {
  return (
    <List
      perPage={5}
      filters={firewallRuleListFilters}
      actions={<FirewallRuleListActions />}
    >
      <DataTable
        rowClick="edit"
        sx={{
          '& .MuiTableCell-head': {
            bgcolor: 'background.paper',
            color: 'text.secondary',
            borderBottomColor: 'divider',
          },
          '& .MuiTableCell-body': {
            borderBottomColor: 'divider',
          },
        }}
        rowSx={() => ({
          '& td': {
            transition: 'background-color 120ms ease',
          },
          '&:hover td': {
            backgroundColor: 'action.hover',
          },
        })}
      >
        <DataTable.Col source="id" />
        <DataTable.Col source="name" />
        <DataTable.Col source="enabled" field={BooleanField} />
        <DataTable.Col label="Status" disableSort>
          <StatusChipField />
        </DataTable.Col>
        <DataTable.Col source="action" />
        <DataTable.Col source="protocol" />
      </DataTable>
    </List>
  )
}
