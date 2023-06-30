const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmnetController,
  userAppointmentsController,
} = require("../controllers/userCtrl");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notifiaction  Doctor || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController);
//Notifiaction  Doctor || POST
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmnetController);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
