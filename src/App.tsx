import { Admin, Resource } from 'react-admin'
import {
  FirewallRuleCreate,
  FirewallRuleEdit,
  FirewallRuleList,
} from './firewall-rules'
import { dataProvider } from './providers/dataProvider'
import { theme } from './theme'

function App() {
  return (
    <Admin dataProvider={dataProvider} theme={theme}>
      <Resource
        name="firewallRules"
        list={FirewallRuleList}
        edit={FirewallRuleEdit}
        create={FirewallRuleCreate}
      />
    </Admin>
  )
}

export default App
