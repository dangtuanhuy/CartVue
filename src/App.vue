<template>
	<div id="app">
		<b-container class="bv-example-row">
			<app-header></app-header>
			<b-row>
				<b-col cols="12">
					<router-view></router-view>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: {
    appHeader: Header,
	}
};
</script>

<style>
/* #app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
} */
body{
  padding: 30px;
}
</style>
