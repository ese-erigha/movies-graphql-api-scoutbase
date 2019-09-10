const modelFactory = (model: any)=>({
    findAll: async()=>{
        return await model.findAll();
    },
    findById: async(id: number)=>{
        return await model.findByPk(id);
    }
});
export default modelFactory;