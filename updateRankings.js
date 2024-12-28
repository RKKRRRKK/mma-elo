import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function updateRanks() {
  // Fetch 5000 ordered by current_elo desc
  const { data: fighters, error: fetchError } = await supabase
    .from('fighters_enriched_new')
    .select('*')
    .order('current_elo', { ascending: false })
    .limit(5000)

  if (fetchError) {
    console.error('Error fetching fighters:', fetchError)
    process.exit(1)
  }

  console.log(`Fetched ${fighters.length} fighters from the database.`)

  // Process updates locally for peak and rank
  const fightersByPeakElo = [...fighters].sort((a, b) => b.peak_elo - a.peak_elo)
  const fightersByPeakEloDom = [...fighters].sort((a, b) => b.peak_elo_dom - a.peak_elo_dom)

  const updatedFighters = fighters.map((fighter) => {
    const peak_elo = fighter.current_elo > fighter.peak_elo ? fighter.current_elo : fighter.peak_elo
    const peak_elo_dom =
      fighter.current_elo_dom > fighter.peak_elo_dom
        ? fighter.current_elo_dom
        : fighter.peak_elo_dom

    return {
      fighter_id: fighter.fighter_id,
      peak_elo,
      peak_elo_dom,
      rank_elo: fightersByPeakElo.findIndex((f) => f.fighter_id === fighter.fighter_id) + 1,
      rank_elo_dom: fightersByPeakEloDom.findIndex((f) => f.fighter_id === fighter.fighter_id) + 1
    }
  })

  // Batch update all
  const { error: updateError } = await supabase
    .from('fighters_enriched_new')
    .upsert(updatedFighters, { onConflict: 'fighter_id' })

  if (updateError) {
    console.error('Error updating fighters:', updateError)
    process.exit(1)
  }

  console.log('Ranks and peak values updated successfully.')
}

updateRanks().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
