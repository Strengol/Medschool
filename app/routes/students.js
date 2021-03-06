var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var studentDb = require('../schemas/students');
var db = require('../schemas/schoolClass');
mongoose.Promise     = global.Promise;

router.get('/all',function(req,res){
    studentDb.find({}).deepPopulate('szkola,nr_klasy,hc').exec(function(err,data){
        if(err){
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.get('/ByClass/:_id',function(req,res){
    studentDb.find({'nr_klasy':req.params._id}).deepPopulate('nr_klasy').exec(function(err,list){
        if(err){
            throw err;
        } else {
            res.json(list);
        }
    })
});


router.get('/get/:_id',function(req,res){
    studentDb.findOne({'_id':req.params._id}).deepPopulate('szkola,nr_klasy,hc').exec(function(err,person){
        if(err){
            throw err;
        } else {
            res.json(person);
        }
    });
});

router.post('/getContacts',function(req,res){
    studentDb.findOne({'_id':req.body._id}).deepPopulate('contact').exec(function(err,data){
        if(err){
            res.json({"error":true})
        } else {
            res.json(data.contact)
        }
    })
})

router.post('/removeContact',function(req,res){
    studentDb.findOneAndUpdate({'_id':req.body.person_id},{$pull: {contact: req.body.contact_id}}).exec(function(err,data){
        if(err){
            res.json({"error":true})
        } else {
            res.json(data); 
        }
    })

})

router.post('/add',function(req,res){

    var student = new studentDb({
        _id     : mongoose.Types.ObjectId(),
        imie    : req.body.imie,
        nazwisko: req.body.nazwisko,
        data_ur : req.body.data_ur,
        pesel   : req.body.pesel,
        nr_klasy: req.body.nr_klasy,
        sex     : req.body.sex,
        szkola  : req.body.szkola,
        hc      : req.body.hc
    });

   student.save(function(err,data){
       if(err){
            console.log(err);
       } else {
            res.json(data); 
       }
   });
})

router.post('/edit',function(req,res){

   studentDb.findOneAndUpdate({_id:req.body._id},{$set:{
        imie      : req.body.imie,
        nazwisko  : req.body.nazwisko,
        data_ur   : req.body.data_ur,
        pesel     : req.body.pesel,
        sex       : req.body.sex,
        nr_klasy  : req.body.nr_klasy,
        szkola    : req.body.szkola,
        details   : req.body.details,
        isStudent : req.body.isStudent,
        hc        : req.body.hc

   }},function(error){
       if(!error) res.json({"error":false});
       else res.json({"error":true});
   });

})

router.post('/addContact',function(req,res){

   studentDb.findOneAndUpdate({"_id":req.body.user},{$push:{
        "contact" : req.body.contact,
   }}).exec(function(error){
       if(error) {
           res.json({"error":error});
        } else {
           res.json({"error":false});
        }
   });
})





module.exports = router;
