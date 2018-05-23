var Student =function(name,id,gender){
    this.name=name;
    this.id=id;
    this.gender=gender;
    this.getInfo(){
        return alert(`姓名：${this.name}编号：${this.id}性别：${this.gender}`);
    }
}