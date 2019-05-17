<template>
	<div>
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header">
					<router-link to="/" class="navbar-brand">Card Trade</router-link>
				</div>
				<ul class="nav navbar-nav">
					<li>
						<router-link to="/portfolio">Portfolio</router-link>
					</li>
					<li>
						<router-link to="/stocks">Stock</router-link>
					</li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-calendar"></span>End Day
						</a>
					</li>
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-floppy-disk"></span> Save Data
						</a>
					</li>
					<li>
						<a href="#">
							<span class="glyphicon glyphicon-cd"></span> Load Data
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>
