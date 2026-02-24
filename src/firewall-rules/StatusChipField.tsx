import { Chip } from '@mui/material'
import { useRecordContext } from 'react-admin'

type FirewallRuleRecord = {
  enabled?: boolean
  action?: string
  protocol?: string
}

export function StatusChipField() {
  const record = useRecordContext<FirewallRuleRecord>()

  if (!record) return null

  const isEnabled = record.enabled !== false
  const action = (record.action ?? 'unknown').toUpperCase()
  const protocol = (record.protocol ?? 'n/a').toUpperCase()

  const tone =
    !isEnabled ? 'neutral' : action === 'ALLOW' ? 'success' : action === 'DENY' ? 'error' : 'neutral'

  return (
    <Chip
      size="small"
      variant={isEnabled ? 'filled' : 'outlined'}
      label={`${action} · ${protocol}`}
      sx={{
        borderRadius: 2,
        fontWeight: 600,
        borderColor: tone === 'neutral' ? 'divider' : `${tone}.light`,
        bgcolor: isEnabled
          ? tone === 'success'
            ? 'success.light'
            : tone === 'error'
              ? 'error.light'
              : 'background.paper'
          : 'background.paper',
        color:
          tone === 'success' ? 'success.dark' : tone === 'error' ? 'error.dark' : 'text.secondary',
        '& .MuiChip-label': {
          px: 1,
        },
      }}
    />
  )
}
