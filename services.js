class ProjectServices {
    async getList(page = 1){
        const recivedData = await fetch(`http://94.158.54.194:9092/api/product?page=${page}&perPage=100`);
        return await recivedData.json();
    }
    async getTypes(){
        const recivedData = await fetch("http://94.158.54.194:9092/api/product/get-product-types");
        return await recivedData.json();
    }
    async sendData(sharedData){
        const response = await fetch("http://94.158.54.194:9092/api/product/",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(sharedData)
        });
        return await response.text();
    }
    async deletData(id){
        const response = await fetch(`http://94.158.54.194:9092/api/product/${id}`,{
            method: "DELETE"
        });
        return await response.text();
    }
    async editData(sharedData){
        const response = await fetch("http://94.158.54.194:9092/api/product/",
        {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(sharedData)
        });
        return await response.text();
    }
}
export default ProjectServices;
