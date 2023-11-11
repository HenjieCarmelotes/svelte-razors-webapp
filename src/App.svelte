<script>
	//pages
	import Login from './pages/Login.svelte';
	import Home from './pages/Home.svelte';
	import About from './pages/About.svelte';
	import ProductTemplate from './pages/ProductTemplate.svelte';
	import Products from './pages/Products.svelte';
	import Checkout from './pages/Checkout.svelte';



	//Routers
	import {Router, Route, Link} from "svelte-routing";


	//other components.
	import Navbar from './components/NavBar/Navbar.svelte';
	import Sidebar from './components/NavBar/Sidebar.svelte';
	import Cart from './components/Cart/Cart.svelte';

	//import Stores
	import globalStore from './stores/globalStore'


</script>

<Router>
	<Navbar/>
	{#if $globalStore.sidebar}
		<Sidebar/>
	{/if}
	{#if $globalStore.cart}
		<Cart/>
	{/if}
	<Route path="/" component = {Home}/>
	<Route path="/about" component = {About}/>
	<Route path="/products" component = {Products}/>
	<Route path="/products/:id" component = {ProductTemplate}/>
	<Route path="/login" component = {Login}/>
	<Route path="/checkout" component = {Checkout}/>
</Router>



