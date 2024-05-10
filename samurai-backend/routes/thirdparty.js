const express = require("express");
const router = express.Router();
const Controller = require("../controllers/thirdpartyactivities");
const middleware = require("../middlewars/authentcation")

//get all third party companies
router.get('/allthirdparties', Controller.getAllThirdPartyContractors);
//post [create new third party] 
router.post('/thirdparty', Controller.addThirdPartyContractor);
// get name of the company and sts from manager id
router.post('/getcompanyname/:token', Controller.getCompanyInfoByManagerId);
//post [create new manager user]
router.post('/addnewmanager', Controller.Registration);
//get all third party company name and id
router.get('/allcompany', Controller.getAllThirdPartyCompanyNames);
// add new employee
router.post('/addnewemployee', Controller.createEmployee);
// get employes for specific managers
router.get('/getemployees/:token', Controller.getEmployeesByManager);

// post employee log for a specific manager
router.post('/createemployeelog', Controller.createEmployeeLog);

// get employe log for a specific manager
router.get('/getemployeelogs/:token', Controller.getEmployeeLogsByManagerFromToken);

// get employe log for last seven days with value and day name
router.get('/getemployeelogsforlast/:token', Controller.getTotalWasteAndBillLastSevenDaysSeparatedByDay);

module.exports = router;