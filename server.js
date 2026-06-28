const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.use(express.urlencoded({
extended:true
}));

app.post("/contact",(req,res)=>{

const text =
`Name: ${req.body.name}
Email: ${req.body.email}
Phone: ${req.body.phone}
Message: ${req.body.message}

----------------
`;

fs.appendFileSync(
path.join(
__dirname,
"messages.txt"
),
text
);

res.send(`

<script>

alert(
"Message Sent Successfully ✅"
);

window.location=
"/contact.html";

</script>

`);

});

app.get("/messages",(req,res)=>{

const data =
fs.readFileSync(
path.join(
__dirname,
"messages.txt"
),
"utf8"
);

res.send(
`<pre>${data}</pre>`
);

});

app.post("/login",(req,res)=>{

const user =
req.body.username;

const pass =
req.body.password;

if(
user==="admin"
&&
pass==="1234"
){

res.redirect("/dashboard.html");

}

else{

res.send(`

<script>

alert(
"Invalid Login"
);

window.location=
"/login.html";

</script>

`);

}

});

app.post("/login",(req,res)=>{

const user =
req.body.username;

const pass =
req.body.password;

if(
user==="admin"
&&
pass==="1234"
){

res.redirect(
"/messages"
);

}

else{

res.send(`

<script>

alert(
"Invalid Login"
);

window.location=
"/login.html";

</script>

`);

}

});

app.listen(3000,()=>{

console.log(
"LTLS Server Running"
);

});