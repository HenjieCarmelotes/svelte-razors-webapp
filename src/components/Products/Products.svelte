<script>
    import {onMount, onDestroy} from 'svelte';
    import products from '../../stores/defaultProducts';
    import Product from './Product.svelte';
    import Loading from '../Loading.svelte';
    export let title = "";
    //let localProducts = [];
    //let unsubscribe;
    // onMount (() => {
    //     //When page mounts, it automatically subscribes.
    //     unsubscribe = products.subscribe(value => {
    //         console.log("subscribed")
    //         localProducts = value;
    //     })
    // })

    // onDestroy (() => {
    //     unsubscribe();
    //     console.log("unsubscribed")
    // })
</script>

<section class = "section">
    <h2 class="section-title"> {title} </h2>
    <div class="products-center">
        {#each $products as product (product.id)}
            <Product {product}/>
            {:else}
            <Loading/>
        {/each}
    </div>
</section>



