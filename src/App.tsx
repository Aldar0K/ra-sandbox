import { Admin, Resource } from 'react-admin'
import {
  FirewallRuleCreate,
  FirewallRuleEdit,
  FirewallRuleList,
} from './firewall-rules'
import { dataProvider } from './providers/dataProvider'

function App() {
  return (
    <Admin dataProvider={dataProvider}>
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
