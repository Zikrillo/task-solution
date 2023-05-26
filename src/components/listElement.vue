<template>
    <div v-if="mode === 'veiw'">
        <div class="container__element">
            <div class="group">
                <div class="containter__element-heading">
                    {{ name_uz }}
                </div>
                <div class="container__element-more">
                    <i class="fi fi-rr-menu-dots"></i>
                    <div class="pop-up">
                        <div class="pop-up__element" @click="swapToEditMode"><i class="fi fi-rr-pencil"
                                style="margin-right: 10px;"></i>Edit</div>
                        <div class="pop-up__element" @click="swapToDeleteMode"><i class="fi fi-rr-trash"
                                style="margin-right: 10px;"></i>Delete</div>

                    </div>
                </div>
            </div>
            <div class="containter__element-address">
                <i class="fi fi-rr-marker"></i>
                <div class="address">
                    {{ address }}
                </div>
            </div>
            <div class="container__element-type">
                <i class="fi fi-rr-chart-simple-horizontal"></i>
                <div>{{ type }}</div>
            </div>
            <div class="container__element-price">
                <div>
                    {{ Math.abs(price).toString().split("").reverse().map((e, index) => (index % 3 == 0) ? e + " " :e).reverse().join("") }} UZS
                </div>
            </div>
        </div>
    </div>
    <div v-if="mode === 'delete'" :class="(mode === 'delete') ? 'delete-mode' : ''">
        <div class="container__element">
            <div>
                <div class="containter__element-heading">
                    Are you sure?
                </div>
                <div class="container__element-description">
                    Data cannot be recovered
                </div>
            </div>
            <button v-if="!sending" class="delete-button" @click="e=>deleteData(id)">Delete</button>
            <button v-if="sending" class="delete-button">Deleting</button>
            
            <button class="cancel-button" @click="swapToVeiwMode">Cancel</button>
        </div>
    </div>
    <div v-if="mode === 'edit'" :class="(mode === 'edit') ? 'edit-mode' : ''">
        <div class="container__element">
            <div class="containter__element-heading">
                Edit data
            </div>
            <input type="text" placeholder="Name" v-model="currentValue">
            <input type="text" placeholder="Price" v-model="currentPrice">
            <input type="text" placeholder="Address" v-model="currentAddress">
            <select name="select" v-model = "currentType" >
                <option v-for="type in currentTypes" :value="type[1]">{{ type[0] }}</option>
            </select>
            <button v-if="!sending" @click="putData">Edit</button>
            <button v-if="sending" @click="">Sending query ...</button>
            <button class="cancel-button" @click="swapToVeiwMode">Cancel</button>
        </div>
    </div>
</template>
<script>
import ProjectServices from "../../services";
export default {
    name: "ListElement",
    props: ["name_uz", "address", "price", "type", "id"],
    mounted(){
        const services = new ProjectServices();
        services.getTypes().then(elem=>{
            elem.forEach(element => {
                this.currentTypes.push([element.name_uz, element.id])
            });
        });
            this.currentValue =  this.name_uz;
            this.currentPrice =  this.price;
            this.currentAddress = this.address;
            this.currentType = this.type;
    },
    data() {
        return {
            mode: "veiw", //edit, delete
            currentValue: "",
            currentPrice: 0,
            currentAddress: "",
            currentType: 0,
            currentTypes: [],
            sending: false
        }
    },
    methods: {
        swapToDeleteMode() {
            this.mode = "delete";
        },
        swapToEditMode() {
            this.mode = "edit";
        },
        swapToVeiwMode() {
            this.mode = "veiw";
        }, 
        deleteData(id){
            this.sending = true;
            const services = new ProjectServices();
            services.deletData(id).then(e=>{
                this.$emit("refreshPage");
                this.sending = false;
            })
        },
        putData(){
            this.sending = true;
            const services = new ProjectServices();
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString();
            const preparedData = {
                id: this.id,
                name_uz: this.currentValue,
                cost: this.currentPrice,
                address: this.currentAddress,
                product_type_id: this.currentType,
                created_date: formattedDate
            };
            services.editData(preparedData).then(e=>{
                this.$emit("refreshPage");
                this.mode = "veiw";
                this.sending = false;
            })
        }

    }
}
</script>
<style>
.delete-mode .container__element {
    grid-column-gap: 10px;
}
.edit-mode .container__element {
    grid-column-gap: 10px;
}
.edit-mode button{
    margin: 0;
}
.edit-mode .containter__element-heading{
    grid-column: 1/3;
}

.container__element input{
    padding: 10px 20px;
}
.delete-button {
    grid-column: 1/2;
}

.cancel-button {
    grid-column: 2/3;
}

.container__element {
    position: relative;
}

.pop-up {
    border: 1px solid rgb(233, 233, 233);
    position: absolute;
    right: 0;
    transform: translateX(-25px);
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    display: none;
}

.pop-up:hover {
    display: block;
}

.pop-up__element {
    padding: 10px 40px;
    transition: .3s;
}

.pop-up__element:hover {
    background-color: black;
    color: white;
}

.container__element-more:hover .pop-up {
    display: block;
}

.container__element button:hover {
    background: black;
    color: white;
}

.container__element-description {
    margin-top: 10px;
}
.container__element input{
        border: 1px solid rgb(233, 233, 233);
        padding: 10px 20px;
         width: 100%;
        border-radius: 6px;
        transition: .3s;
    }
    .container__element input:hover{
        border: 1px solid #575757;
    }
    .container__element input:focus{
        outline: none;
        border: 1px solid #575757;
    }
    .container__element select{
        border: 1px solid rgb(233, 233, 233);
        padding: 10px 20px;
         width: 100%;
        border-radius: 6px;
        transition: .3s;
    }
    .container__element select:hover{
        border: 1px solid #575757;
    }
    .container__element select:focus{
        outline: none;
        border: 1px solid #575757;
    }
    
</style>