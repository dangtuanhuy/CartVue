<template>
	<div class="container">
		<app-header></app-header>
		<div class="row">
			<div class="col-xs-12">
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
	name: "App",
	components: {
		appHeader: Header
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
body {
	padding: 30px;
}
</style>
