<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense  v-for="(group) in menu" v-bind:key="group">
<v-list-group>
        <template v-slot:activator >
          <v-list-item-title>{{group.name}}</v-list-item-title>
        </template>
				<v-list-item link @click="onMenuSelect(e.link)" v-for="(e) in group.items" v-bind:key="e">
					<v-list-item-action>
						<v-icon>{{e.icon}}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>
							{{e.label}}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
</v-list-group>				


			</v-list>
		</v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
		<router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
		menu: [
			{
				name:"Administration",
				items:[
					{icon:"mdi-home",label:"Home",link:"/"},
					{icon:"mdi-face",label:"Business Partner",link:"/"},
					{icon:"mdi-dns",label:"Items",link:"/"},
				]
			},
			{
				name:"Sales - AR",
				items:[
					{icon:"mdi-format-indent-increase ",label:"Sales Order",link:"/SalesOrder"}
				]
			}

		]
	}),
	methods:{
		onMenuSelect : function (evt) {
			this.$router.push({ path: evt});
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
