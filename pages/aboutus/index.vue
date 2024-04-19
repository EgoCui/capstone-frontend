<template>
  <my-slot class="about-us">
    <div class="container">
      <!-- Sections will be placed here -->
      <div v-for="(section, index) in sections" :key="index" class="section" :class="{ 'reverse-section': index % 2 !== 0 }">
        <div class="image-container">
          <img :src="section.imageUrl" :alt="section.title">
        </div>
        <div class="content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
        </div>
      </div>
    </div>
  </my-slot>
</template>

<script setup>
import MySlot from "@/components/slot/index";

const sections = [
  {
    title: 'About us',
    description: 'The Genesian Theatre Company celebrates our 80th year as a company in 2024! For 70 years we have been operating from our home at 420 Kent St, an historic church that has a long tradition as a theatre in the heart of the Sydney CBD. We boast among our alumni numerous household names in Australian theatre and film such as Angela Punch, Bryan Brown, Baz Luhrmann, Coral Lansbury, Judi Farr, John Bell, Peter Carroll, and Nick Enright. We\'re thrilled that some of our more recent cast members such as Tom Tilley, Rowan Witt, Lib Campbell, Aaron Glenane, and Bianca Bradey have gone on to carve out their own space in the industry in the past few years. We are also just as proud of the hundreds of other talented actors, directors, stage managers, set and costume designers, lighting and sound specialists, stage and production staff who have contributed to Sydney\'s unique little theatre. We are particularly proud of all our members who volunteer their time to work Front of House to help you enjoy your visit to the Genesian Theatre.\n',
    imageUrl: 'https://scontent.fmel18-1.fna.fbcdn.net/v/t39.30808-6/294800406_534333681848455_7707606794668520838_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oKVE-7huRIsAb7idlL1&_nc_ht=scontent.fmel18-1.fna&oh=00_AfBn4unS6Gs9fgjb19fupQ7EvIycAYd3hHB7VW6XGobhaA&oe=6626BF2A',
  },
  {
    title: 'Our history',
    description: 'The Genesian Theatre Company came into being from a meeting of members of the Catholic Youth Organisation intent upon forming a full scale dramatic group. This meeting was held on 15th August, 1944. Named for St Genesius, Patron Saint of Actors, The Genesian Theatre Company has developed into a strong theatre company over the years.\n',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1280px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
  },
  {
    title: 'Our new home',
    description: 'The Genesian Theatre Company is thrilled to have found a new home only one bus stop over the Anzac bridge from our current Kent St location!\n',
    imageUrl: 'https://www.genesiantheatre.com.au/images/genesian_bus_map.jpg',
  },
  {
    title: 'Our members',
    description: 'Being a member of the Genesian Theatre Company is like being part of large family of like-minded theatre people.\n',
    imageUrl: 'https://www.genesiantheatre.com.au/images/banner/164.jpg',
  },
];
</script>

<style lang="scss" scoped>
.about-us {
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
  }

  .section {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    min-height: 200px;
    width: 100%;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }

    .image-container {
      flex-shrink: 0;
      width: 150px;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .content {
      flex-grow: 1;
      min-width: 0;
    }
  }
}
</style>
