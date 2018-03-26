<template>
  <div id="header">
    <v-toolbar 
      v-if="activeSearch"
      app 
      fixed
      clipped-left
    >
      <v-text-field
        hide-details
        single-line
        class="mx-3"
        label="Tapez quelque chose"
        append-icon="search"
        prepend-icon="close"
        :append-icon-cb="search"
        :prepend-icon-cb="search"
        autofocus
      >
      </v-text-field>
    </v-toolbar>
    <v-toolbar 
      class="hidden-sm-and-up" 
      v-else
      app 
      fixed
      clipped-left
    >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        >
        </v-toolbar-side-icon>
        <v-btn
          flat
          icon
        >
          <img class="logo-image" src="http://www.creationlogo.org/wp-content/uploads/2017/08/Logo_TV_2015.png" alt="">
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          flat
          icon
          @click.native="activeSearch = !activeSearch"
        >
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn
          flat
          icon
        >
          <v-icon>account_circle</v-icon>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer 
      clipped
      fixed
      app 
      class="hidden-sm-and-up" 
      v-model="drawer"
    >
      <v-list dense>
        <v-list-tile v-for="menu in menus" :key="menu.name" @click="menu.link">
          <v-list-tile-action>
            {{ menu.name }}
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-container class="hidden-xs-only">
      <v-layout row wrap>
        <v-flex sm2>
          <a href="/">
            <v-card flat>
              <v-card-media class="logo" contain height="48px" src="//www2.grouponcdn.com/layout/assets/grpn_logo_white-9cea72595d.svg">
              </v-card-media>
            </v-card>
          </a>
        </v-flex>
        <v-flex sm8>
          <v-text-field
            solo
            single-line
            name="search-input"
            class="search-input"
            placeholder="Votre recherche ici"
            append-icon="search"
            append-icon-cb="() => (e1 = !e1)"
          >
          </v-text-field>
        </v-flex>
        <v-flex sm2>
          <v-btn
            round
          >
            <v-icon left>account_circle</v-icon>
            S'identifier
          </v-btn>
        </v-flex>
      </v-layout>
      <nav class="text-sm-center py-3">
        <v-btn
          flat
          v-for="menu in menus" 
          :key="menu.name"
          class="blue-grey--text darken-3 subheading"
        >
          {{ menu.name }}
        </v-btn>
      </nav>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeSearch: false,
        drawer: false,
        menus: [
          { name: 'Accueil', link: '/' },
          { name: 'Cadeaux', link: '/cadeaux' },
          { name: 'Voyages', link: '/voyages' }
        ]
      }
    },
    methods: {
      search: function (event) {
        this.activeSearch = false
      }
    }
  }
</script>

<style scoped>
nav {
  border-bottom: 1px solid black;
}
.menu-item {
  text-decoration: none;
}
.menu-item:hover {
  border-bottom: 2px solid blue;
  background-color: white;
}
.logo-image {
  width: 30px;
}
.logo {
  background-color: black;
}
</style>
