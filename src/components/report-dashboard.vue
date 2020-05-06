<template>
  <div>
    <page-header title="Reports"></page-header>
    <div class="card">
      <div>
        There are no reports
        <router-link to="/profile-info">Profile Info</router-link>.
      </div>
      <div class="report-table">Reports Table Display</div>
      <!-- <div v-else class="dogs">
        <div v-for="dog in dogs" v-bind:key="dog.url" class="dog">
          <img :src="dog.url" alt="dog photo" />
          <div class="rating">Rating: {{ dog.rating }}</div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import { PageHeader } from "@vue-mf/styleguide";

export default {
  components: { PageHeader },
  data: () => ({
    dogs: JSON.parse(localStorage.getItem("dogs")) || []
  })
};
</script>
<style scoped>
.card {
  background-color: white;
  margin: 3.2rem auto 0 auto;
  width: 75%;
  padding: 2.4rem;
}

.report-table {
  display: flex;
  flex-wrap: wrap;
}

.dog {
  margin: 1.6rem;
  max-width: 100rem;
}

.rating {
  display: flex;
  justify-content: center;
}
</style>
