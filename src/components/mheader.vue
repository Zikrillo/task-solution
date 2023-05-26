<template>
    <header>
        <nav class="header__main-nav">
            <div class="header__main-nav-heading">
                <i class="fi fi-rr-shopping-cart" style="margin-right: 10px; transform:translateY(3px);"></i> <div>
                    Your shop
                </div>
            </div>
            <div class="header__main-nav-search">
                <input type="text" placeholder="Search" v-model="currentValue" @input="sayHi">
                <i class="fi fi-rr-search search" @click="sayHi" style="transform:translateY(2px);"></i>
            </div>
            <div class="burger" @click="changeBurgerActivity">
                <i class="fi fi-rr-menu-burger" ></i>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: "mHeader",
    data(){
        return {
            currentValue: "",
        }
    },
    props: [
        "burgerStatus"
    ],
    methods: {
        sayHi(){
            console.log("hi");
            this.$emit("changeSearchStatus", this.currentValue);
        },
        changeBurgerActivity(){
            this.$emit("changeBurgerStatus");
        }
    }
}
</script>
<style>
    .burger{
        justify-content: end;
        display: none;
    }
    .header__main-nav{
        position: fixed;
        padding: 20px 40px;
        background-color: rgb(255, 255, 255);
        border-bottom: 1px solid rgb(233, 233, 233);
        font-family: Montserrat, sans-serif;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 2;
    }
    .header__main-nav-heading{
        font-weight: 800;
        display: flex;
        align-items: baseline;
        cursor: pointer;
    }
    .header__main-nav-search {
        display: flex;
        align-items: center;
        padding: 5px 20px;
        border: 1px solid rgb(233, 233, 233);
        border-radius: 50px;
        width: min-content;
        justify-self: center;
    }
    .header__main-nav-search input{
        border: none;
        font-family: Montserrat, sans-serif;
    }
    .header__main-nav-search input:focus{
        outline: none;
    }
    .search{
        cursor: pointer;
    }
    @media (max-width:1700px) {
        .burger{
            display: flex;
        }
    }
    @media (max-width:442px) {
        .header__main-nav-search{
            position: fixed;
            bottom: 0px;
            background-color: white;
            width: calc(100vw);
            left: 0;
            border-radius: 0px;
            padding: 10px 20px;
        }
        .header__main-nav-search input{ 
            width: 100%;
        }
        .header__main-nav{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>