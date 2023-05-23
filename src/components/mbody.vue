<template>
    <main>
        <mAside></mAside>
        <div class="container">
            <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div>
            <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div> <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div> <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div>
            <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div>
            <div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div><div class="container__element">
                <div class="group">
                    <div class="containter__element-heading">
                        Aboba
                    </div>
                    <div class="container__element-more">
                        <i class="fi fi-rr-menu-dots"></i>
                    </div>
                </div>
                <div class="containter__element-address">
                    <i class="fi fi-rr-marker"></i>
                    <div class="address">
                        Farghona
                    </div>
                </div>
                <div class="container__element-type">
                    <i class="fi fi-rr-chart-simple-horizontal"></i>
                    <div>wood</div>
                </div>
                <div class="container__element-price">
                    <div>
                        2000 UZS
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
document.oncontextmenu = cmenu; function cmenu() { return false; }
import mAside from './maside.vue';
export default {
    name: "mBody",
    components: {mAside}
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
    border-color: rgba(29, 33, 39, 0.795);
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
.container__element-type i{
    margin-right: 10px;
}
</style>