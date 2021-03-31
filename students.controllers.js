const Student = require('../model/students.models'); 
const Joi = require('joi');
const { json } = require('body-parser');

exports.student_create=(req,res)=>{

    let student = new Student({
        name: req.body.name,   
        regid: req.body.regid,
        class: req.body.class,
        gender: req.body.gender
       
    });
    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send('Student Created Successfully');
    });
}

exports.student_details=(req,res)=>{
    Student.findById(req.params.id, (err,student)=>{
        if(err) return next(err);
        res.send(student);
    });
}

exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body}, (err,student)=>{
        if(err) return next(err);
        res.send('Student Updated');
    })
}

exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id, (err,student)=> {
        if(err) return next(err);
        res.send('Student Deleted');
    });
}


exports.list=(req,res)=>{
Student.find((err,students)=>{
    if(!err){res.render('students',{page:'student list', menuId:'list',students:students})}
    else{console.log('error in retrieving the data:'+JSON.stringify(err,undefined,2))};
})
}