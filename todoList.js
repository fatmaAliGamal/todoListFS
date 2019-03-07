const cmd =process.argv.slice(2)
const fs=require('fs')
if(!fs.existsSync('./ts.json'))
{
  fs.writeFileSync('./ts.json','[]')
}
function read(){
   const arr=fs.readFileSync('./ts.json').toString()
   const myarr=JSON.parse(arr)
   return myarr
}
function run(){
    if(cmd[0]=='add')
    {
        add(cmd[1])
    }else if(cmd[0]=='remove')
    {
        remove(cmd[1])
    }else
    if(cmd[0]=='edit')
    {
        edit(cmd[1],cmd[2])
    }else if(cmd[0]=='list')
    {
        list()
    }else if(cmd[0] == 'checked'){
        checked(cmd[1])
    }else if(cmd[0]== 'unChecked'){
        unChecked(cmd[1])
    }
}
run()
function add(task)
{
    
  const myarr=read();
  let arrLength = myarr.length-1;

  const id= arrLength == 0 ? 1 : arrLength +1; 
  const obj={
      id,
      task:task,
      check:false
  }
  myarr.push(obj)
  const newtask=JSON.stringify(myarr)
  fs.writeFileSync('./ts.json',newtask)

}

function remove(id){
    const myarr=read();
 /*   const result = myarr.filter((_id)=>{
        console.log(myarr[id]);
        
        if(myarr[id] !== _id) return true;
        return false
      });
      */
    myarr.splice(id,1)
    const newtask=JSON.stringify(myarr)
  fs.writeFileSync('./ts.json',newtask)
}
function edit(id,text){ 
    const myarr=read();
    if(typeof text == 'undefined'){
         console.log("undef")
    }else{
        myarr[id]={id:id,task:text,check:false}
        const newtask=JSON.stringify(myarr)
        fs.writeFileSync('./ts.json',newtask)

    }
}

function list()
{
    console.log(read())
} 
//--------------------------------------------
function checked(id)
{ 
    const myarr=read();
    myarr[id].check=true;
    const newtask=JSON.stringify(myarr)
    fs.writeFileSync('./ts.json',newtask)

}
function unChecked(id)
{ 
    const myarr=read();
    myarr[id].check=false;
    const newtask=JSON.stringify(myarr)
    fs.writeFileSync('./ts.json',newtask)

}