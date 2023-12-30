import schema from "./product.model.js";
import admin from "./admin.model.js";
import customer from "./user.model.js";
import prodcart from "./cart.model.js";
import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;

// -------------------Userlogin-------------------
export async function Userlogin(req, res) {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(username);
    const user = await customer.findOne({ username: username });
    // console.log(user);

    if (user === null) return res.status(404).send("user does not exist");
    const success = await bcrypt.compare(password, user.password);
    // console.log(success);
    if (success !== true)
      return res.status(404).send("username or password not exist");
    const usertoken = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "24h",
    });
    // console.log(usertoken);
    return res.status(200).send({ msg: "successfully logged in", usertoken });
  } catch (error) {
    console.log(error);
  }
}

// -------------------UserRegister-------------------
export async function userRegister(req, res) {
  // console.log(req.body);

  const { username, email, password,address,phno } = req.body;
  if (!(username && email && password && address && phno))
    return res.status(404).send("Fileds are empty");
  bcrypt
    .hash(password, 10)
    .then((hashedPwd) => {
      customer.create({ username, email, password: hashedPwd ,address,phno});
    })
    .then(() => {
      res.status(201).send("Successfully registered");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
}

// -------------------adminLogin-------------------
export async function adminLogin(req, res) {
  try {
    // console.log(req.body);
    const { username, password } = req.body;
    // console.log(username);
    const user = await admin.findOne({ username: username });
    // console.log(user);

    if (user === null) return res.status(404).send("user does not exist");
    const success = await bcrypt.compare(password, user.password);
    // console.log(success);
    if (success !== true)
      return res.status(404).send("username or password not exist");
    const admintoken = await sign({ username }, process.env.JWT_KEY, {
      expiresIn: "10m",
    });
    // console.log(admintoken);
    return res.status(200).send({ msg: "successfully logged in", admintoken });
  } catch (error) {
    // console.log(error);
  }
}

// -------------------adminRegister-------------------
export async function adminRegister(req, res) {
  try {
    // console.log(req.body);
    const { username, email, password } = req.body;
    if (!(username && email && password))
      return res.status(404).send("Fileds are empty");
    bcrypt
      .hash(password, 10)
      .then((hashedPwd) => {
        admin.create({ username, email, password: hashedPwd });
      })
      .then(() => {
        res.status(201).send("Successfully registered");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (error) {
    console.log(error);
  }
}


// -------------------addProduct-------------------
export async function addProduct(req, res) {
  //    console.log(req.body);
  let { product_name, brand, price, quantity, category, forcategory, image } =
    req.body;
  try {
    res.status(201).send(
      schema.create({
        product_name,
        brand,
        price,
        quantity,
        category,
        forcategory,
        image,
      })
    );
    // console.log("data added succesfully");
  } catch (error) {
    res.status(404).send(error);
  }
}


// -------------------displayProduct-------------------
export async function displayProduct(req, res) {
  try {
    schema
      .find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}


// -------------------home-------------------
export async function home(req, res) {
  try {
    // console.log(req.user.username);
    const user = req.user.username;
     console.log("user is",req.user);
    return res.status(200).send({user});
  } catch (error) {
    return res.status(403).send(error);
  }
}


// -------------------individual product-------------------
export async function getProduct(req, res) {
  try {
    
    const {username}=req.user
    const { id } = req.params;
  
    schema
      .findOne({ _id: id })
      .then((data) => {
        // console.log(data);
        res.status(200).send({data,username:username});
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}


// -------------------userAuth-------------------
export async function userAuth(req, res) {
  try {
    // console.log(req.user.username);
    const user = req.user.username;
    return res.status(200).send(user);
  } catch (error) {
    return res.status(403).send(error);
  }
}


// -------------------addToCart-------------------
export async function addToCart(req, res) {

  try {
    const { id } = req.params;
    const {username}=req.user

    const{product_name,brand,price,quantity,category,forcategory,image,user,_id}=req.body
    const pid=_id
    console.log('pid',pid);
    const res=await prodcart.findOne({product_id: id })
    console.log(res);
    if(res==null)
    {
        const cart=await prodcart.create({product_name,brand,price,quantity,category,forcategory,image,user,product_id:pid,username:username})
    }
    else{
          const data = await prodcart.updateOne(
          { product_id: id },
          { $inc: { quantity: quantity } }
        );
    }  
  } catch (error) {
    console.log(error);
  }
}

// -------------------displayCart-------------------

  export async function displayCart(req,res){
    try {
      // console.log('cart user',req.user);
      prodcart.find({username:req.user.username})
        .then((data) => {
          res.status(200).send(data);
          })
        .catch((error) => {
          res.status(404).send(error);
        });
    } catch (error) {
      res.status(404).send(error);
    }
  }


  // -------------------deleteItem in Cart-------------------

export async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    // console.log("haiiiii",id);
    prodcart
      .deleteOne({ _id: id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(404).send(error);
      });
  } catch (error) {
    res.status(404).send(error);
  }
}

  // -------------------place order-------------------
  export async function placeOrder(req,res){
    try {
     const user=req.user.username;
     console.log(user);
      prodcart.deleteMany({username:{$eq:user}})
      .then((data)=>{
        
        res.status(200).send(data)
      })
      .catch((error)=>{
        res.status(404).send(error)
      })
    } catch (error) {
        res.status(404).send(error)
    }
  }

