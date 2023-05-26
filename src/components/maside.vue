<template>
    <aside :class="burgerStatus?'aside active': 'aside'">
        <div class="add-new-element">
            <div class="add-new-element-heading">
                <i class="fi fi-rr-arrow-small-left burger" @click="changeBurgerActivity"></i> 
                Add new element:
            </div> 
            <div class="add-new-element__inputs">
                <input type="text" placeholder="Name" v-model="choosenName">
                <input type="text" placeholder="Price" v-model="choosenPrice">
                <input type="text" placeholder="Address" v-model="choosenAddress">
                <div class="add-new-element-heading type">
                    Choose type:
                </div> 
                <div class="types">
                    <button 
                    v-for="element in types" 
                    :key="element.id" 
                    @click="(e)=>chooseType(element.id,e)"
                    :class="element.id === choosenType?`active-type`:``"
                    >
                    
                    {{ element.name_uz }}
                    
                </button>
                    
                </div>
                <button v-if="!sending" @click="sendData">Add</button>
                <button v-if="sending">Sending query ...</button>
                
            </div>
        </div>
    </aside>
</template>
<script>
import ProjectServices from "../../services"

export default {
    name: "mAside",
    mounted(){
        const services = new ProjectServices();
        services.getTypes().then(e=>{
            this.types = e;
        })
    },
    data(){
        return {
            types: [
            ],
            choosenType: -1,
            choosenName: "",
            choosenAddress: "",
            choosenPrice: undefined,
            sending: false
        }
    },
    methods: {
        chooseType(id, target){
            this.choosenType = id;
        },
        sendData(){
            this.sending = true;
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString();
            const preparedData = {
                name_uz: this.choosenName,
                cost: this.choosenPrice,
                address: this.choosenAddress,
                product_type_id: this.choosenType,
                created_date: formattedDate
            };
            console.log(preparedData);
            const services = new ProjectServices();
            services.sendData(preparedData).then(response=>{
                this.$emit("refreshPage");
                this.sending = false;
            });
        },
        changeBurgerActivity(){
            this.$emit("changeBurgerStatus");

        }
    },props:["burgerStatus"]
}
</script>
<style>
    
    .add-new-element {
    border: 1px solid rgb(233, 233, 233);
    padding: 20px;
    width: 400px;
    border-radius: 6px;
    position: fixed;
}
    .add-new-element-heading {
        font-weight: 600;
    }
    .aside input{
        border: 1px solid rgb(233, 233, 233);
        padding: 10px 20px;
         width: 100%;
        border-radius: 6px;
        margin-top: 20px;
        transition: .3s;
    }
    .aside input:hover{
        border: 1px solid #575757;
    }
    .aside input:focus{
        outline: none;
        border: 1px solid #575757;
    }
    button{
        border: 1px solid rgb(233, 233, 233);
        padding: 10px 20px;
        width: 100%;
        border-radius: 6px;
        margin-top: 20px;
        background-color: white;
        cursor: pointer;
        transition: .3s;
    }
    .aside button:hover{
        background-color: #1f2325;
        color: white;
    }
    .types{
        display: flex;
        flex-wrap: wrap;
        gap: 10px 5px; 
        margin-top: 10px;

    }
    .types button{
        width: auto;
        margin-top: 0;
    }
    .type{
        margin: 20px 0px;

    }
    .active-type{
        background: #1f2325;
        color: white;
        border: 1px solid #1f2325;
    }
    @media (max-width:1700px) {
        .aside{
            position: fixed;
            background-color: white;
            z-index: 3;
            top: 0;
            left: 0;
            height: 100vh;
            padding: 40px 20px;
            border: 1px solid rgb(233, 233, 233);
            display: none;
        }
        .add-new-element{
            background: white;
            border: none;
            position: static;
        }
        .active{
        display: block;
        }
    }
    @media (max-width:442px) {
        .aside{
            width: 100%;

        }
        .add-new-element{
            width: 100%;
        }
    }
    
</style>