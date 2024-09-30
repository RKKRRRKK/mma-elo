import { defineStore } from 'pinia'

export const useFightersStore = defineStore('fighters', {
  state: () => ({
    fighters: [
      {
        name: 'Conor McGregor',
        elo: 1450,
        best_win: 'Nate Diaz',
        peak_elo: 1750,
        worst_loss: 'Khabib Nurmagomedov',
        finish_only_peak_elo: 1700,
        finish_only_elo: 1400,
        days_peak: 45
      },
      {
        name: 'Khabib Nurmagomedov',
        elo: 1600,
        best_win: 'Conor McGregor',
        peak_elo: 1900,
        worst_loss: 'Dustin Poirier',
        finish_only_peak_elo: 1850,
        finish_only_elo: 1600,
        days_peak: 60
      },
      {
        name: 'Jon Jones',
        elo: 1550,
        best_win: 'Daniel Cormier',
        peak_elo: 1980,
        worst_loss: 'Stipe Miocic',
        finish_only_peak_elo: 1950,
        finish_only_elo: 1500,
        days_peak: 75
      },
      {
        name: 'Israel Adesanya',
        elo: 1480,
        best_win: 'Robert Whittaker',
        peak_elo: 1850,
        worst_loss: 'Jan Blachowicz',
        finish_only_peak_elo: 1800,
        finish_only_elo: 1450,
        days_peak: 40
      },
      {
        name: 'Anderson Silva',
        elo: 1420,
        best_win: 'Vitor Belfort',
        peak_elo: 1700,
        worst_loss: 'Chris Weidman',
        finish_only_peak_elo: 1650,
        finish_only_elo: 1350,
        days_peak: 55
      },
      {
        name: 'Georges St-Pierre',
        elo: 1600,
        best_win: 'Michael Bisping',
        peak_elo: 1900,
        worst_loss: 'Matt Serra',
        finish_only_peak_elo: 1880,
        finish_only_elo: 1550,
        days_peak: 80
      },
      {
        name: 'Daniel Cormier',
        elo: 1500,
        best_win: 'Stipe Miocic',
        peak_elo: 1800,
        worst_loss: 'Jon Jones',
        finish_only_peak_elo: 1750,
        finish_only_elo: 1450,
        days_peak: 60
      },
      {
        name: 'Stipe Miocic',
        elo: 1470,
        best_win: 'Francis Ngannou',
        peak_elo: 1780,
        worst_loss: 'Daniel Cormier',
        finish_only_peak_elo: 1750,
        finish_only_elo: 1400,
        days_peak: 50
      },
      {
        name: 'Max Holloway',
        elo: 1400,
        best_win: 'Jose Aldo',
        peak_elo: 1700,
        worst_loss: 'Alexander Volkanovski',
        finish_only_peak_elo: 1650,
        finish_only_elo: 1350,
        days_peak: 45
      },
      {
        name: 'Dustin Poirier',
        elo: 1450,
        best_win: 'Conor McGregor',
        peak_elo: 1750,
        worst_loss: 'Khabib Nurmagomedov',
        finish_only_peak_elo: 1700,
        finish_only_elo: 1400,
        days_peak: 35
      },
      {
        name: 'Francis Ngannou',
        elo: 1550,
        best_win: 'Stipe Miocic',
        peak_elo: 1850,
        worst_loss: 'Derrick Lewis',
        finish_only_peak_elo: 1800,
        finish_only_elo: 1500,
        days_peak: 70
      },
      {
        name: 'Amanda Nunes',
        elo: 1580,
        best_win: 'Ronda Rousey',
        peak_elo: 1900,
        worst_loss: 'Julianna Peña',
        finish_only_peak_elo: 1880,
        finish_only_elo: 1550,
        days_peak: 85
      },
      {
        name: 'Kamaru Usman',
        elo: 1520,
        best_win: 'Jorge Masvidal',
        peak_elo: 1800,
        worst_loss: 'Leon Edwards',
        finish_only_peak_elo: 1750,
        finish_only_elo: 1500,
        days_peak: 65
      },
      {
        name: 'Henry Cejudo',
        elo: 1480,
        best_win: 'Dominick Cruz',
        peak_elo: 1750,
        worst_loss: 'Joseph Benavidez',
        finish_only_peak_elo: 1700,
        finish_only_elo: 1400,
        days_peak: 50
      },
      {
        name: 'Jose Aldo',
        elo: 1450,
        best_win: 'Chad Mendes',
        peak_elo: 1750,
        worst_loss: 'Max Holloway',
        finish_only_peak_elo: 1700,
        finish_only_elo: 1350,
        days_peak: 45
      },
      {
        name: 'Ronda Rousey',
        elo: 1400,
        best_win: 'Miesha Tate',
        peak_elo: 1650,
        worst_loss: 'Amanda Nunes',
        finish_only_peak_elo: 1600,
        finish_only_elo: 1300,
        days_peak: 40
      },
      {
        name: 'Holly Holm',
        elo: 1350,
        best_win: 'Ronda Rousey',
        peak_elo: 1600,
        worst_loss: 'Amanda Nunes',
        finish_only_peak_elo: 1550,
        finish_only_elo: 1300,
        days_peak: 30
      },
      {
        name: 'Nate Diaz',
        elo: 1380,
        best_win: 'Conor McGregor',
        peak_elo: 1700,
        worst_loss: 'Jorge Masvidal',
        finish_only_peak_elo: 1650,
        finish_only_elo: 1300,
        days_peak: 35
      },
      {
        name: 'Jorge Masvidal',
        elo: 1420,
        best_win: 'Nate Diaz',
        peak_elo: 1750,
        worst_loss: 'Kamaru Usman',
        finish_only_peak_elo: 1700,
        finish_only_elo: 1350,
        days_peak: 50
      },
      {
        name: 'Tony Ferguson',
        elo: 1450,
        best_win: 'Anthony Pettis',
        peak_elo: 1800,
        worst_loss: 'Justin Gaethje',
        finish_only_peak_elo: 1750,
        finish_only_elo: 1400,
        days_peak: 55
      }
    ]
  }),

  actions: {}
})
