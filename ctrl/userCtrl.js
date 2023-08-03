const { json } = require('body-parser');
const User = require('../models/users')
//add user-------------------------------
let addUser = async (req, res) => {
    const user1 = req.body;
    const savedUser = await User.findOne({
        where: { empId: req.body.empId }
    });
    if (savedUser) {
        return res.status(401).send({ error: true, msg: 'User exist' });
    }

    const jane = User.build({ firstName: user1.firstName, lastName: user1.lastName, address: user1.address, empId: user1.empId });
    console.log(jane instanceof User); // true
    console.log(jane.firstName); // "Jane"
    jane.save();
    console.log('Jane was saved to the database!');
    res.status(200).json(jane.toJSON());
}
//get user---------------------------------
let getUser = async (req, res) => {
    const userAll = await User.findAll({});
    console.log(userAll);
    res.status(200).json({ data: userAll });
}
//delete user--------------------------------
let deleteUser = async(req,res)=>{
     const id = req.params.empId;
     const existId = await User.destroy({
        where:{
            empId:req.params.empId
        }
     });
     if(existId){
        return res.status(200).send({ success: true, msg: 'User deleted' });
     }
     return res.status(401).send({ error: true, msg: 'User doesnot exist' });
     
}
//update user-----------------------------------
let updateUser = async(req,res)=>{
    const savedUser = await User.findOne({
        where: { id: req.params.empId }
    });
    if(!savedUser){
      
    }
    const eid = req.params.updatedId;
    console.log(eid,"changid");
    
    const result = await User.update({empId:  eid},
        { where: { id: req.params.empId } }
      )
       return res.status(200).send({ success:true,msg:'updated successfully' });

}

module.exports = {
    addUser,
    getUser,
    deleteUser,
    updateUser
}