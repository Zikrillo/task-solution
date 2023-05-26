<template>
    <main>
        <mAside @refreshPage="refreshPage" :burgerStatus="burgerStatus" @changeBurgerStatus="changeBurgerStatus"></mAside>
        <div class="container">
            <ListElement v-for="{ id, name_uz, address, product_type_id, cost } in searchFilter" 
                :key="id" 
                :name_uz="name_uz" 
                :address="address" 
                :price="cost" :type="product_type_id" 
                :id="id" 
                @refreshPage="refreshPage"
            />
            <div v-if="list.length === 0">
                <img src="../assets/loader.svg" alt="" class="image-preloader">
            </div>
        </div>
    </main>
</template>
<script>
import mAside from './maside.vue';
import ListElement from './listElement.vue';
import ProjectServices from "../../services"
export default {
    name: "mBody",
    components: { mAside, ListElement },
    mounted() {
        const services = new ProjectServices();
        services.getList().then((e) => {
            services.getTypes().then(arrayOfTypes => {

                const filtered = e.map(current => {
                    current.product_type_id = arrayOfTypes.find((elem) => elem.id === current.product_type_id)?.name_uz;
                    return current;
                });
                this.list = filtered;
                console.log(filtered);
            });
        });
    },
    data() {
        return {
            list: [],
        }
    },
    props: ["searchStatus", "burgerStatus"],
    methods: {
        sayHi(argument) {
            console.log(argument);
        },
        refreshPage() {
            const services = new ProjectServices();
            services.getList().then((e) => {
                services.getTypes().then(arrayOfTypes => {
                    const filtered = e.map(current => {
                        current.product_type_id = arrayOfTypes.find((elem) => elem.id === current.product_type_id)?.name_uz;
                        return current;
                    });
                    this.list = filtered;
                });
            });
        },
        changeBurgerStatus(){
            this.$emit("changeBurgerStatus");
        }
    },
    computed: {
        searchFilter() {
            return this.list.filter(elem => {
                return elem.name_uz.toLowerCase().includes(this.searchStatus.toLowerCase());
            });
        }
    }
}
</script>
<style>

main {
    padding: 20px 40px;
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-column-gap: 20px;
    margin-top: 100px;
}

.image-preloader {
    position: absolute;
    top: calc(50vh - 25px);
    left: calc(50vw - 25px);
}

.container {
    grid-template-columns: 1fr;
    width: 1200px;
    font-family: Montserrat, sans-serif;
    overflow: hidden;
}

.container__element {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    padding: 25px;
    border: 1px solid rgb(233, 233, 233);
    transition: .3s;
    border-radius: 6px;
    margin-bottom: 10px;
}

.container__element:hover {
    cursor: pointer;
    background-color: rgb(248, 248, 248);
    /* color: white; */
}

.containter__element-heading {
    font-weight: 600;
}

.container__element-price {
    text-align: end;
    display: flex;
    justify-content: end;
    grid-column: 2/3;
    font-weight: 600;
    font-size: 20px;
}

.containter__element-address {
    display: flex;
    grid-column: 1/3;
}

.containter__element-address i {
    margin-right: 10px;
}

.group {
    display: flex;
    justify-content: space-between;
    grid-column: 1/-1;
}

.container__element-more {
    justify-self: end;
    padding: 10px;
}

.container__element-type {
    display: flex;
}

.container__element-type i {
    margin-right: 10px;
}
@media (max-width:1700px) {
    main{
        display: block;
    }
    .container__element{
        width: 100%;
    }
    .container{
        width: auto;
    }
    @media (max-width:442px) {
        main{
            margin-bottom: 30px;
        }
    }
}
</style>