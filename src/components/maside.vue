<template>
    <aside class="aside">
        <div class="add-new-element">
            <div class="add-new-element-heading">
                Add new element:
            </div> 
        </div>
    </aside>
</template>
<script>
export default {
    name: "mAside"
}
</script>
<style>
.add-new-element {
    border: 1px solid rgb(233, 233, 233);
    padding: 20px;
    width: 400px;
    height: 600px;
    border-radius: 6px;
    position: fixed;
}
    .add-new-element-heading {
        font-weight: 600;
    }
</style>