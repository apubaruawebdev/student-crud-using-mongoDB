const student = require('../models/student');

const studentTest = async () => {
    const data = await student.deleteMany();
    // const data =  await student.create([
    //     {
    //         name : "Apu Barua",
    //         email : "api@gmail.com",
    //         phone : "9665457890",
    //         gender : "Male",
    //         location : "Mohakahli",
    //         photo : "kjhkjljl.jpg"
    //     }
    // ])

    // console.log(data);
}

// module exports
module.exports = studentTest;