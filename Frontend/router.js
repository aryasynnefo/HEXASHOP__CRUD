import { Router } from "express";

import * as controller from "./controller.js";
import auth from "./middleware/auth.js";

const router = Router();
router.route("/add").post(controller.addProduct);
router.route("/display").get(controller.displayProduct);
router.route("/register").post(controller.adminRegister);
router.route("/login").post(controller.adminLogin);
router.route("/home").get(auth, controller.home);
router.route("/product/:id").get(auth,controller.getProduct);
router.route("/userlogin").post(controller.Userlogin);
router.route("/userreg").post(controller.userRegister);
router.route("/user").get(auth, controller.userAuth);
router.route("/addtocart/:id").post(auth,controller.addToCart);
router.route("/displaycart").get(auth,controller.displayCart);
router.route("/deleteitem/:id").delete(controller.deleteItem);
router.route("/order").delete(auth,controller.placeOrder)



export default router;
