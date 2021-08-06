

module.exports.startChat=(req,res)=>{
    let roomId = req.params.roomId
    return res.render('room',{roomId})
}