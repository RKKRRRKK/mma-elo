<template>
  <div class="margin-wrap">
    <h1 class="title">UFC Ranking Comparison vs current Elo (top 1000)</h1>
    <div class="notice-wrap">
      <p class="notice">
        *If a fighter is marked <strong style="color: green">green</strong>, it means their UFC rank
        is <strong>4</strong> or more positions lower than it should be (underrated).
      </p>
      <p class="notice">
        If a fighter is marked <strong style="color: red">red</strong>, it means their UFC rank is
        <strong>4</strong> or more positions higher than it should be (overrated).
      </p>
      <p class="notice">
        If a fighter is a <strong>champion</strong> according to both ranks, their row will be
        marked a. <strong style="color: yellow">golden</strong> color
      </p>
    </div>

    <div class="rankings-grid">
      <div
        v-for="(fighters, weightClass) in filteredFighters"
        :key="weightClass"
        class="table-wrapper"
      >
        <h3 class="subtitle">{{ weightClass }}</h3>

        <DataTable
          :value="fighters"
          responsiveLayout="scroll"
          scrollable
          scrollDirection="horizontal"
          tableStyle="min-width: 40rem"
          :rowClass="rowClassName"
        >
          <Column
            field="rank_elo"
            header="Elo Rank"
            sortable
            headerStyle="width: 1rem"
            bodyStyle="width: 1rem"
          >
            <template #body="slotProps">
              {{ slotProps.data.rank_elo === 0 ? 'CHAMP' : slotProps.data.rank_elo }}
            </template>
          </Column>

          <Column
            field="ufc_rank"
            header="UFC Rank"
            sortable
            headerStyle="width: 1rem"
            bodyStyle="width: 1rem"
          >
            <template #body="slotProps">
              {{ slotProps.data.ufc_rank === 0 ? 'CHAMP' : slotProps.data.ufc_rank }}
            </template>
          </Column>

          <Column
            field="name"
            header="Name"
            headerStyle="width: 15rem"
            bodyStyle="width: 15rem"
            sortable
          >
            <template #body="slotProps">
              <span style="letter-spacing: 0.1rem">
                {{
                  slotProps.data.name === 'Missing - Not in Top 1000'
                    ? slotProps.data.name
                    : slotProps.data.name.toUpperCase()
                }}
              </span>
            </template>
          </Column>

          <Column
            field="current_elo"
            header="Current Elo"
            headerStyle="width: 5rem"
            bodyStyle="width: 5rem"
            sortable
          >
            <template #body="slotProps">
              {{ slotProps.data.current_elo }}
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUFCStore } from '@/stores/ufc_store'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const ufcStore = useUFCStore()

const weightClasses = [
  'Flyweight',
  'Bantamweight',
  'Featherweight',
  'Lightweight',
  'Welterweight',
  'Middleweight',
  'Light Heavyweight',
  'Heavyweight'
]

const filteredFighters = computed(() => {
  const grouped = {}
  weightClasses.forEach((wc) => {
    grouped[wc] = ufcStore.fighters.filter((f) => f.weightclass === wc)
  })
  return grouped
})

const rowClassName = (rowData) => {
  let diff = rowData.rank_elo - rowData.ufc_rank
  let name = rowData.name

  if (name == 'Missing - Not in Top 1000') {
    return 'hide-gray'
  } else if (diff == 0 && rowData.rank_elo == 0) {
    return 'golden'
  } else if (diff >= 4) {
    return 'highlight-red'
  } else if (diff <= -4) {
    return 'highlight-green'
  } else {
    return ''
  }
}
</script>

<style scoped>
.rankings-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

.table-wrapper {
  border: solid rgba(255, 255, 255, 0.15) 0.2rem;
  border-radius: 1.5rem;
  overflow-x: auto;
  transform: scale(0.95);
}

.title {
  margin-top: 1rem;
  text-align: center;
}

.subtitle {
  margin: 0;
  text-align: center;
  font-size: 1.25rem;
  padding: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  border-bottom: solid rgba(255, 255, 255, 0.15) 0.2rem;
  background-color: rgba(185, 28, 28, 0.25);
}

.notice {
  padding-left: 1rem;
  padding-right: 1rem;
  color: gray;
  font-size: 0.9rem;
}

:deep .highlight-red {
  background-color: rgba(179, 9, 9, 0.343) !important;
}
:deep .highlight-green {
  background-color: rgba(3, 120, 24, 0.471) !important;
}

.margin-wrap {
  margin: 1rem;
}

:deep .hide-gray {
  background-color: rgba(128, 128, 128, 0.101) !important;
  color: gray !important;
}

:deep .golden {
  background: linear-gradient(
    45deg,
    rgba(255, 217, 0, 0.6),
    rgba(255, 172, 0, 0.65),
    rgba(255, 220, 115, 0.6)
  );
  color: rgb(26, 26, 24); /* Dark brown text for contrast */
  font-weight: bold;
  font-size: 1.11rem;
  text-shadow:
    0.1px 0 0 rgb(189, 173, 98),
    0 0.1px 0 rgb(189, 173, 98),
    -0.1px 0 0 rgb(189, 173, 98),
    0 -0.1px 0 rgb(189, 173, 98);
}

@media (min-width: 768px) {
  .rankings-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem;
  }

  .subtitle {
    font-size: 1.4rem;
  }
  .table-wrapper {
    overflow-x: visible;
  }

  .margin-wrap {
    margin: 0rem;
  }
  .notice {
    padding-left: 10rem;
    color: gray;
    font-size: 1rem;
    margin-bottom: -1rem;
  }
  .notice-wrap {
    padding-bottom: 0rem;
    padding-top: 1rem;
    margin-bottom: -4rem;
  }
}

@media (min-width: 1024px) {
  .rankings-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }
  .notice {
    padding-left: 10rem;
    color: gray;
    font-size: 1rem;
  }
  .table-wrapper {
    overflow-x: visible;
  }

  .notice {
    padding-left: 10rem;
    color: gray;
    font-size: 1rem;
    margin-bottom: -1rem;
  }
  .notice-wrap {
    padding-bottom: 0rem;
    padding-top: 1rem;
    margin-bottom: -4rem;
  }

  .margin-wrap {
    margin: 0rem;
  }
}
</style>
