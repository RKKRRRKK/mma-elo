import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function updateRanks() {
  // Fetch all fighters
  const { data: fighters, error: fetchError } = await supabase
    .from('fighters_enriched_new')
    .select('*')

  if (fetchError) {
    console.error('Error fetching fighters:', fetchError)
    process.exit(1)
  }

  console.log(`Fetched ${fighters.length} fighters from the database.`)

  // Update peak values if current values are higher
  for (const fighter of fighters) {
    const updates = {}

    if (fighter.current_elo > fighter.peak_elo) {
      updates.peak_elo = fighter.current_elo
    }
    if (fighter.current_elo_dom > fighter.peak_elo_dom) {
      updates.peak_elo_dom = fighter.current_elo_dom
    }

    if (Object.keys(updates).length > 0) {
      const { error: updateError } = await supabase
        .from('fighters_enriched_new')
        .update(updates)
        .eq('fighter_id', fighter.fighter_id)

      if (updateError) {
        console.error(`Error updating fighter_id ${fighter.fighter_id}:`, updateError)
      }
    }
  }

  // Calculate ranks based on peak_elo
  const { data: fightersByPeakElo, error: rankError1 } = await supabase
    .from('fighters_enriched_new')
    .select('*')
    .order('peak_elo', { ascending: false })

  if (rankError1) {
    console.error('Error ranking by peak_elo:', rankError1)
    process.exit(1)
  }

  for (let i = 0; i < fightersByPeakElo.length; i++) {
    const fighter = fightersByPeakElo[i]
    const { error: rankUpdateError1 } = await supabase
      .from('fighters_enriched_new')
      .update({ rank_elo: i + 1 })
      .eq('fighter_id', fighter.fighter_id)

    if (rankUpdateError1) {
      console.error(
        `Error updating rank_elo for fighter_id ${fighter.fighter_id}:`,
        rankUpdateError1
      )
    }
  }

  // Calculate ranks based on peak_elo_dom
  const { data: fightersByPeakEloDom, error: rankError2 } = await supabase
    .from('fighters_enriched_new')
    .select('*')
    .order('peak_elo_dom', { ascending: false })

  if (rankError2) {
    console.error('Error ranking by peak_elo_dom:', rankError2)
    process.exit(1)
  }

  for (let i = 0; i < fightersByPeakEloDom.length; i++) {
    const fighter = fightersByPeakEloDom[i]
    const { error: rankUpdateError2 } = await supabase
      .from('fighters_enriched_new')
      .update({ rank_elo_dom: i + 1 })
      .eq('fighter_id', fighter.fighter_id)

    if (rankUpdateError2) {
      console.error(
        `Error updating rank_elo_dom for fighter_id ${fighter.fighter_id}:`,
        rankUpdateError2
      )
    }
  }

  console.log('Ranks and peak values updated successfully.')
}

updateRanks().catch((error) => {
  console.error('Unexpected error:', error)
  process.exit(1)
})
