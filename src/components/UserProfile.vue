<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong> Followers: </strong> {{ followers }}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem";

export default {
  name: "UserProfile",
  components: {
    TwootItem,
  },
  data() {
    return {
      isLoading: false,
      followers: 0,
      user: {
        id: 1,
        username: "mrifkiw_",
        firstName: "M rifki",
        lastName: "widadi",
        email: "rifki.widadi@hidroplant.com",
        isAdmin: true,
        twoots: [
          {
            id: 1,
            content: "Twotter is greet!",
          },
          {
            id: 2,
            content: "Semangat Hidroplant :^*",
          },
        ],
      },
    };
  },
  watch: {
    followers(newFollowersCount, oldFollowersCount) {
      if (oldFollowersCount < newFollowersCount) {
        console.log(`${this.user.username} has gained new followers`);
      }
    },
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(`Favourited Tweet #${id}`);
    },
  },
  mounted() {
    this.followUser();
  },
};
</script>

<style>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
}
.user-profile__user-panel {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #dfe3e8;
}
.user-profile__admin-badge {
  background: rebeccapurple;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  padding: 0px 10px;
  margin-right: auto;
}
h1 {
  margin: 0;
}
.user-profile__twoots-wrapper {
  display: grid;
  grid-gap: 10px;
}
</style>
