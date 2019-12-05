const express = require('express');
const router = express.Router();
const schedule =require('./service/schedule.js')
// 课程表相关接口
router.get('/schedule/searchAll',schedule.searchAll);
router.post('/schedule/add',schedule.add);
router.get('/schedule/delete',schedule.delete);
router.post('/schedule/editdata',schedule.editdata)

module.exports = router;
