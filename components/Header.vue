<template>
  <div id="header">
    
    <v-navigation-drawer 
      clipped
      fixed
      app
      v-model="drawer"
      class="blue-grey lighten-5"
    >
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Catégories
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile v-for="menu in menus" :key="menu.name" :href="menu.link">
          <v-list-tile-action>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menu.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="activeSearch"
      flat
      app 
      fixed
      class="green accent-3"
    >
      <v-text-field
        hide-details
        single-line
        class="mx-3"
        label="Tapez quelque chose ici"
        append-icon="search"
        prepend-icon="close"
        :append-icon-cb="search"
        :prepend-icon-cb="search"
        autofocus
      >
      </v-text-field>
    </v-toolbar>
    <v-toolbar
        v-else
        flat
        app 
        fixed
        clipped-left
        class="green accent-3"
      >
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title>Trimo</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            flat
            icon
            class="hidden-sm-and-up"
            @click.native="activeSearch = !activeSearch"
          >
            <v-icon>search</v-icon>
          </v-btn>
          <v-spacer class="hidden-sm-and-up"></v-spacer>
          <v-btn 
            flat
            icon
            class="hidden-sm-and-up"
          >
            <v-icon>account_circle</v-icon>
          </v-btn>
          <v-text-field
            name="name"
            placeholder="Votre recherche ici"
            id="id"
            append-icon="search"
            persistent-hint
            class="hidden-sm-and-down"
            @click.native="activeSearch = !activeSearch"
          >
            Search
          </v-text-field>
          <v-btn 
            flat
            class="hidden-sm-and-down"
          >
            Se connecter
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeSearch: false,
        drawer: true,
        menus: [
          { name: 'Accueil', link: '/accueil', icon: 'home' },
          { name: 'Cadeaux', link: '/cadeaux', icon: 'card_giftcard' },
          { name: 'Voyages', link: '/voyages', icon: 'card_travel' },
          { name: 'Shopping', link: '/shopping', icon: 'shop' }
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
</style>
