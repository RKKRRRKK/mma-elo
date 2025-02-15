<template>
  <h2 style="text-align: center">Fastest Rising & Most Active (last 24 months)</h2>
  <div class="tables">
    <table>
      <thead>
        <tr class="trone">
          <th>Name</th>
          <th>Elo Gain</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in highestEloGain" :key="item.winner_id">
          <td>{{ item.winner_name }}</td>
          <td>+{{ Math.round(item.elo_gain) }}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr class="trtwo">
          <th>Name</th>
          <th>N. of Fights</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in highestFights" :key="item.winner_id">
          <td>{{ item.winner_name }}</td>
          <td>{{ item.fights }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const highestEloGain = ref([
  {
    winner_id: 444837,
    winner_name: 'Chiril Negru',
    starting_elo: 1200,
    max_elo: 1479.75,
    elo_gain: 279.75
  },
  {
    winner_id: 408988,
    winner_name: 'Allan Landouzy',
    starting_elo: 1257.42,
    max_elo: 1517.24,
    elo_gain: 259.82
  },
  {
    winner_id: 434889,
    winner_name: 'Deivid Santana',
    starting_elo: 1200,
    max_elo: 1459.75,
    elo_gain: 259.75
  },
  {
    winner_id: 433456,
    winner_name: 'Heorhii Hudz',
    starting_elo: 1200,
    max_elo: 1458.17,
    elo_gain: 258.17
  },
  {
    winner_id: 461941,
    winner_name: 'Gimbat Magomedov',
    starting_elo: 1260.13,
    max_elo: 1514.39,
    elo_gain: 254.26
  },
  {
    winner_id: 382517,
    winner_name: 'Shaoxiang Wang',
    starting_elo: 1202.26,
    max_elo: 1455.94,
    elo_gain: 253.68
  },
  {
    winner_id: 461939,
    winner_name: 'Ibrohim Rahimzoda',
    starting_elo: 1200,
    max_elo: 1452.6,
    elo_gain: 252.6
  },
  {
    winner_id: 361371,
    winner_name: 'Elias Erber',
    starting_elo: 1260.16,
    max_elo: 1512.7,
    elo_gain: 252.54
  },
  {
    winner_id: 462130,
    winner_name: 'Ksawery Mosing',
    starting_elo: 1232.58,
    max_elo: 1478.24,
    elo_gain: 245.66
  },
  {
    winner_id: 419784,
    winner_name: 'Hamza Diallo',
    starting_elo: 1207.56,
    max_elo: 1451.41,
    elo_gain: 243.85
  }
])

const highestFights = ref([
  {
    winner_name: 'Impa Kasanganay',
    winner_id: 310489,
    current_elo: 1577.79,
    fights: 8
  },
  {
    winner_name: 'Seika Izawa',
    winner_id: 375399,
    current_elo: 1572.36,
    fights: 7
  },
  {
    winner_name: 'Losene Keita',
    winner_id: 287481,
    current_elo: 1631.89,
    fights: 7
  },
  {
    winner_name: 'Masud Odinaev',
    winner_id: 402300,
    current_elo: 1553.01,
    fights: 7
  },
  {
    winner_name: 'Gabriel Braga',
    winner_id: 291537,
    current_elo: 1579.1,
    fights: 7
  },
  {
    winner_name: 'Denis Goltsov',
    winner_id: 72521,
    current_elo: 1705.2,
    fights: 7
  },
  {
    winner_name: 'Zhifa Shang',
    winner_id: 103809,
    current_elo: 1660.66,
    fights: 6
  },
  {
    winner_name: 'Dovletdzhan Yagshimuradov',
    winner_id: 96307,
    current_elo: 1634.8,
    fights: 6
  },
  {
    winner_name: 'Jesse Ronson',
    winner_id: 56579,
    current_elo: 1561.02,
    fights: 6
  },
  {
    winner_name: 'Carlos Prates',
    winner_id: 95593,
    current_elo: 1612.25,
    fights: 6
  }
])
</script>

<style scoped>
.tables {
  display: flex;
  flex-direction: row;
}

table {
  width: 50%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #9e6464;
  padding: 0.2rem;
  text-align: left;
}

.trone {
  background-color: #851414;
}

.trtwo {
  background-color: #b91c1c;
}
h2 {
  background-color: #520c0c;
  border: 1px solid #9e6464;
  border-bottom: 0;
  padding: 0.33rem;
  margin: 0;
  font-size: 1.5rem;
  color: #ffffff;
}
</style>
