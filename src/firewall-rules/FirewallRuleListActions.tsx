import { CreateButton, ExportButton, TopToolbar } from 'react-admin'

export function FirewallRuleListActions() {
  return (
    <TopToolbar
      sx={{
        alignItems: 'center',
        gap: 1,
        px: 1,
        py: 0.75,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <CreateButton
        sx={{
          px: 1.5,
          borderRadius: 2,
        }}
      />
      <ExportButton
        sx={{
          px: 1.5,
          borderRadius: 2,
          color: 'text.secondary',
          borderColor: 'divider',
        }}
      />
    </TopToolbar>
  )
}
