<!doctype html>
<html>
<head>
	<title>Indices</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700">
	<link rel="stylesheet" href="/includes/3rd-party/slick-carousel/slick/slick.css">
	<link rel="stylesheet" href="/includes/styles/indices.min.css">
</head>
<body>
	<main role="main" id="cards">
		<section v-for="card in cards" class="card">
			<header v-html="card.header" class="header"></header>
			<div v-if="card.content" v-html="card.content" class="content"></div>
			<ul v-if="card.points" class="points">
				<li v-for="point in card.points" v-html="point" class="point"></li>
			</ul>
		</section>
	</main>
	
	<script src="/includes/3rd-party/vue/dist/vue.js"></script>
	<script src="/includes/3rd-party/jquery/dist/jquery.min.js"></script>
	<script src="/includes/3rd-party/slick-carousel/slick/slick.min.js"></script>
	<script src="/includes/scripts/min/indices.min.js"></script>
</body>
</html>
