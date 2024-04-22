<template>
  <my-slot class="home">
    <b-card :title="detail.pname" :sub-title="detail.subtitle">
      <b-card-text>
        <p><b>Start Date:</b> {{ detail.startdate }}</p>
        <p><b>End Date:</b> {{ detail.enddate }}</p>
        <div v-if="detail.cover" style="float: right">
          <img :src="detail.cover" alt="Cover Image" />
        </div>
      </b-card-text>
    </b-card>

    <b-card title="Production Team">
      <b-card-text>
        <p>{{ detail.productions }}</p>
      </b-card-text>

      <!-- <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link> -->
    </b-card>

    <b-card title="Cast & Crew">
      <b-card-text>
        <p>{{ detail.casts }}</p>
        <p>{{ detail.crews }}</p>
      </b-card-text>
    </b-card>
    <b-card title="Contents">
      <b-card-text>
        {{ detail.contents }}
      </b-card-text>

      <!-- <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link> -->
    </b-card>
    <b-card title="Stills">
      <b-card-text>
        <a :href="detail.still">{{ detail.stills }}</a>
      </b-card-text>
    </b-card>
    <h2></h2>
  </my-slot>
</template>

<script>
import MySlot from "@/components/slot/index";
export default {
  components: {
    MySlot,
  },
  data() {
    return {
      detail: {
        pid: 1,
        pname: "Love From a Stranger",
        subtitle: [
          "By Agatha Christie",
          "Adapted by Frank Vosper",
          "Directed by Tui Clark",
        ],
        startdate: "2023-01-14",
        enddate: "2023-01-30",
        productions: {
          Director: ["Person A", "Person B"],
          Screenwriter: ["Person C"],
          Editor: ["Person D", "Person E"],
        },
        casts: {
          "Costume Designer": ["Person F"],
          "Makeup Artist": ["Person G", "Person H"],
          "Set Decorator": ["Person I"],
        },
        crews: {
          "Sound Engineer": ["Person J"],
          "Visual Effects Supervisor": ["Person K"],
          "Stunt Coordinator": ["Person L", "Person M"],
        },
        contents:
          "It is 1920s London and Cecily & Mavis have just won the sweepstakes! Suddenly, a mysterious stranger appears on their doorstep - the enigmatic American Bruce Lovell!\\nBut as Cecily embarks on a whirlwind romance with Bruce the cracks in his demeanour appear. Tensions rise as Cecily's friends & family uncover disturbing clues about his past.\\nWill Cecily escape the vile clutches of her newly wedded husband? Who will survive to tell the tale?",
        cover: "cover://url",
        stills: ["stills", "url", "list"],
      },
      text: "",
    };
  },
  computed: {
    info() {
      const index = this.$route.params.id;
      return index;
    },
  },
  async mounted() {
    const res = await this.$axios.get(
      `/api/show/detail/${this.$route.params.id}`
    );
    this.detail = res.data.data;
  },
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
