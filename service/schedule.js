const db =require('../tool/sql.js')


exports.searchAll=(req,res)=>{
  let cycle= req.query.cycle
  let sql ='select * from classform where cycle=?;'
  data=[cycle]
  db.base(sql,data,(results) => {
    console.log(results);
    
    res.json(results);
})
},
exports.add=(req,res)=>{
},
exports.delete=(req,res)=>{
},
exports.editdata=(req,res)=>{
}
