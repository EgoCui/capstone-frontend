<template>
  <my-slot class="home">
    <h1>{{ detail.pname }}Season</h1>
    <p>{{ detail.subtitle }}</p>
    <p>{{ detail.productions }}</p>
    <p>{{ detail.contents }}</p>
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
        subtitle:
          '["By Agatha Christie","Adapted by Frank Vosper","Directed by Tui Clark"]',
        startdate: "2023-01-14",
        enddate: "2023-01-30",
        productions:
          '{"Director": ["Person A", "Person B"], "Screenwriter": ["Person C"], "Editor": ["Person D", "Person E"]}',
        casts:
          '{"Costume Designer": ["Person F"], "Makeup Artist": ["Person G", "Person H"], "Set Decorator": ["Person I"]}',
        crews:
          '{"Sound Engineer": ["Person J"], "Visual Effects Supervisor": ["Person K"], "Stunt Coordinator": ["Person L", "Person M"]}',
        contents:
          "It is 1920s London and Cecily & Mavis have just won the sweepstakes! Suddenly, a mysterious stranger appears on their doorstep - the enigmatic American Bruce Lovell!\\nBut as Cecily embarks on a whirlwind romance with Bruce the cracks in his demeanour appear. Tensions rise as Cecily's friends & family uncover disturbing clues about his past.\\nWill Cecily escape the vile clutches of her newly wedded husband? Who will survive to tell the tale?",
        cover: "cover://url",
        stills: '["stills","url","list"]',
      },
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
    this.detail = res.data;
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: calc(100% - 382px);
}
</style>
