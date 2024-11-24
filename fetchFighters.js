import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

SUPABASE_URL = os.environ.get('SUPABASE_URL')
SUPABASE_KEY = os.environ.get('SUPABASE_KEY')
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

async function fetchFighters() {
  const { data, error } = await supabase.from('fighters_enriched').select('*').limit(1000)

  if (error) {
    console.error('Error fetching data:', error)
    process.exit(1)
  }

  const storeCode = `import { defineStore } from 'pinia';

export const useFightersStore = defineStore('fighters', {
  state: () => ({
    fighters: ${JSON.stringify(data, null, 2)}
  })
});
`

  fs.writeFileSync('src/stores/fighters.js', storeCode)
}

fetchFighters()
