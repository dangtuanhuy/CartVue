<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<router-link to="/redirect-me" tag="div">
				<b-navbar-brand>Trade Cart</b-navbar-brand>
			</router-link>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<router-link to="/portfolio" tag="div">
						<b-nav-item>Protfolio</b-nav-item>
					</router-link>
					<router-link to="/stocks" tag="div">
						<b-nav-item>Stocks</b-nav-item>
					</router-link>
				</b-navbar-nav>
				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav right>
						<router-link to="/portfolio" tag="div">
							<b-nav-item>End Day</b-nav-item>
						</router-link>
					</b-nav>
					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template slot="button-content">
							<em>Save & Load</em>
						</template>
						<b-dropdown-item href="#">Save Data</b-dropdown-item>
						<b-dropdown-item href="#">Load Data</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>
