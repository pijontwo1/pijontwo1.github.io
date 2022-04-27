const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
const fs = require("fs");
var axios = require("axios");

var RestApi = "1089794853689751";
var RestApiS =
  "1A35d9MlaCiXzMP88vY3iucnO1rxmlaoWeu9ogvyTNvsAlAJRzN93ZxR1ZpolzNhNhrbyWKrKgTlCt5t";

var connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "root",
  database: "ydconnect",
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

async function post(sql, error, req, res, params) {
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log(error);
    } else {
      res.send(rows);
    }
  });
}

// 메인페이지 제품 select
app.get("/ShopList", (req, res) => {
  let sql =
    "SELECT `id`,`title`,`cpu`,`cooler`,`memory`,`mainboard`,`vga`,`hdd`,`ssd`,`odd`,`power`,`os`,FORMAT(`price`,0) AS `price` ,`imgsrc1`,`imgsrc2`,`imgsrc3`" +
    "FROM product WHERE `id` in (1,2,3)";
  let error = "메인페이지 제품 select 오류";
  post(sql, error, req, res);
});

// 온라인 문의 select
app.post("/inquire", (req, res) => {
  let sql =
    "SELECT `id`,`name`,`title`,`phone`,`email`,`content`,`answer_status`," +
    "`answer_content`,`create_datetime` FROM inquire  ORDER BY id DESC limit ?,10";
  let params = req.body.nowPage;
  let error = "문의  select 오류";
  post(sql, error, req, res, params);
});

//문의하기 상세페이지 select
app.post("/inquireList", (req, res) => {
  let sql = "SELECT * FROM `inquire` WHERE `id`= ?;";
  let params = req.body.id;
  let error = "문의하기 상세페이지 select 오류";
  post(sql, error, req, res, params);
});

//문의하기 상세페이지 delete
app.post("/inquireListDelete", (req, res) => {
  let sql = "DELETE FROM `inquire` WHERE `id`=? && `email`=?;";
  let params = [req.body.id, req.body.email];
  let error = "문의하기 상세페이지 delete 오류";
  post(sql, error, req, res, params);
  // let sql =
  //   "ALTER TABLE inquire AUTO_INCREMENT=1; SET @COUNT = 0;UPDATE inquire SET id = @COUNT:=@COUNT+1;";
  // connection.query(sql, function (err, rows, fields) {
  //   if (err) {
  //     console.log("문의하기 상세페이지 delete, alter 오류");
  //   } else {
  //     res.send(rows);
  //   }
  // });
});

// 문의하기 상세페이지 update
app.post("/inquireModify", (req, res) => {
  let sql =
    "UPDATE `inquire` SET `title` = ?, `name` = ?, `phone`=?,`content` = ? WHERE `id` = ?;";
  let id = req.body.id;
  let title = req.body.title;
  let name = req.body.name;
  let phone = req.body.phone;
  let content = req.body.content;
  let params = [title, name, phone, content, id];
  let error = "온라인 문의 글쓰기 insert 오류";
  post(sql, error, req, res, params);
});

// 문의하기 관리자 답변 update
app.post("/inquireAdminAnswer", (req, res) => {
  let sql =
    "UPDATE `inquire` SET `answer_content` = ?, `answer_datetime`= NOW(),`answer_status` = 1 WHERE `id` = ?;";
  let id = req.body.id;
  let content = req.body.content;
  let params = [content, id];
  let error = "온라인 문의 관리자 답변 update 오류";
  post(sql, error, req, res, params);
});

// 문의하기 관리자 답변 delete
app.post("/inquireAdminAnswerDelete", (req, res) => {
  let sql =
    "UPDATE `inquire` SET `answer_content` = NULL, `answer_datetime`= NULL,`answer_status` = 0 WHERE `id` = ?;";
  let params = req.body.id;
  let error = "온라인 문의 관리자 답변 삭제 update 오류";
  post(sql, error, req, res, params);
});

// 문의하기 글쓰기 insert
app.post("/inquireWrite", (req, res) => {
  let sql =
    "INSERT INTO `inquire`(`name`, `title`, `phone`, `email`, `content`) VALUES (?, ?, ?, ?, ?);";
  let title = req.body.title;
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let content = req.body.content;
  let params = [name, title, phone, email, content];
  let error = "온라인 문의 글쓰기 insert 오류";
  post(sql, error, req, res, params);
});
app.post("/inquireWriteUserinfo", (req, res) => {
  let sql = "SELECT * FROM `users` WHERE `email`=?;";
  let params = req.body.email;
  let error = "inquireWrite유저정보 불러오기 오류";
  post(sql, error, req, res, params);
});

//회원가입 insert
app.post("/signup", (req, res) => {
  let sql =
    "INSERT INTO `ydconnect`.`users` (`email`, `password`, `name`, `phone`) VALUES (?,?,?,?);";
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;
  let phone = req.body.phone;
  let params = [email, password, name, phone];
  let error = "회원가입 insert 오류";
  post(sql, error, req, res, params);
});

//회원가입 약관 select
app.get("/signupAgree", function (req, res) {
  let sql = "SELECT * FROM `etc`;";
  let error = "약관 오류";
  post(sql, error, req, res);
});

//아이디 중복체크 select
app.post("/signupCheck", (req, res) => {
  let sql = "SELECT * FROM `users` WHERE `email`=?;";
  let email = req.body.email;
  let params = email;

  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("아이디 중복체크 오류");
    } else {
      res.send(rows);
    }
  });
});

// 로그인 select
app.post("/signin", (req, res) => {
  let sql = "SELECT * FROM `users` WHERE `email`=? && `password`=?;";
  let email = req.body.email;
  let password = req.body.password;
  let params = [email, password];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("로그인 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 아이디찾기 select
app.post("/accountInfoFindId", (req, res) => {
  let sql = "SELECT * FROM `users` WHERE `name`=? && `phone`=?;";
  let name = req.body.name;
  let phone = req.body.phone;
  let params = [name, phone];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("로그인 select 오류" + name + phone);
    } else {
      res.send(rows);
    }
  });
});

// 비밀번호찾기 select
app.post("/accountInfoFindPw", (req, res) => {
  let sql = "SELECT * FROM `users` WHERE `email`=? && `name`=? && `phone`=?;";
  let email = req.body.email;
  let name = req.body.name;
  let phone = req.body.phone;
  let params = [email, name, phone];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("로그인 select 오류" + name + phone);
    } else {
      res.send(rows);
    }
  });
});

// 회원정보 수정 update
app.post("/accountUpdate", (req, res) => {
  let sql = "UPDATE `users` SET `name` = ?, `phone`=? WHERE `email`=?;";
  let email = req.body.email;
  let name = req.body.name;
  let phone = req.body.phone;
  let params = [name, phone, email];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("회원정보 update 오류" + name + phone);
    } else {
      res.send(rows);
    }
  });
});

// 회원탈퇴 delete
app.post("/accountDelete", (req, res) => {
  let sql =
    "DELETE FROM `cart` WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`=?);";
  let params = req.body.email;

  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("카트탈퇴 delete 오류");
    } else {
      let sql =
        "DELETE FROM `order` WHERE `user_id`= (SELECT `id` FROM `users` WHERE `email`=?);";
      connection.query(sql, params, function (err, rows, fields) {
        if (err) {
          console.log("오더탈퇴 delete 오류");
        } else {
          let sql = "DELETE FROM `users` WHERE `email`=?;";
          connection.query(sql, params, function (err, rows, fields) {
            if (err) {
              console.log("탈퇴 delete 오류");
            } else {
              res.send(rows);
            }
          });
        }
      });
    }
  });
});

// 주문 상세페이지 select
app.post("/product", (req, res) => {
  let sql =
    "SELECT `id`,`title`,`cpu`,`cooler`,`memory`,`mainboard`,`vga`,`hdd`,`ssd`,`odd`,`power`,`os`,FORMAT(`price`,0) AS `price` ,`imgsrc1`,`imgsrc2`,`imgsrc3`" +
    "FROM product WHERE `id`=?;";
  let params = req.body.id;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문 상세페이지 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 장바구니 중복체크 select
app.post("/productCheckExist", (req, res) => {
  let sql =
    "SELECT*FROM `cart`" +
    "WHERE `user_id`=" +
    "(SELECT `id` FROM `users` WHERE `email`=?)" +
    "&& `item_id`=?;";
  let email = req.body.email;
  let itemId = req.body.itemId;

  let params = [email, itemId];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문 상세페이지 select 오류");
    } else {
      res.send(rows);
    }
  });
});

//장바구니 insert
app.post("/productAddCart", (req, res) => {
  let sql =
    "INSERT INTO `ydconnect`.`cart`(`user_id`,`item_id`,`item_amount`,`item_price`)" +
    "VALUES( (SELECT `id` FROM `ydconnect`.`users` WHERE `email`=?)," +
    "?,1," +
    "(SELECT `price` FROM `ydconnect`.`product` WHERE id=?));";
  let email = req.body.email;
  let itemId = req.body.itemId;
  let params = [email, itemId, itemId];

  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("장바구니 insert 오류");
    } else {
      res.send(rows);
    }
  });
});

// 장바구니 select
app.post("/cart", (req, res) => {
  let sql =
    "SELECT `cart`.`cart_id`,`cart`.`user_id`,`cart`.`item_id`,`cart`.`item_amount`,`cart`.`item_price`,`product`.`title`,`product`.`imgsrc1`" +
    "FROM `cart` LEFT JOIN `product` ON `cart`.`item_id` = `product`.`id`" +
    "WHERE `cart`.`user_id`=(SELECT `id` FROM `users` WHERE `email`=?)";
  let params = req.body.email;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("장바구니 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 장바구니 delete
app.post("/cartDelete", (req, res) => {
  let sql = "DELETE FROM `cart` WHERE `cart_id`=?";
  let params = req.body.cartId;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("장바구니 delete 오류");
    } else {
      res.send(rows);
    }
  });
});

// 장바구니 update
app.post("/cartUpdate", (req, res) => {
  let sql =
    "UPDATE `cart` SET `update_datetime` = CURRENT_TIMESTAMP(),`item_amount` = ? WHERE `cart_id` = ?;";
  let cartId = req.body.cartId;
  let itemAmount = req.body.itemAmount;
  let params = [itemAmount, cartId];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("장바구니 update 오류");
    } else {
      res.send(rows);
    }
  });
});

// 주문조회 select

app.post("/orderList", (req, res) => {
  let sql = "SELECT * FROM `order` WHERE `order_number` = ?;";
  let params = req.body.ranNum;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문조회 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 프로필 주문조회 select

app.post("/profileOrderlist", (req, res) => {
  let sql =
    "SELECT `order`.`order_id`,`order`.`order_number`,`order`.`user_id`,`order`.`item_id`,`order`.`item_amount`,`order`.`payment_price`,`order`.`order_status`,`order`.`create_datetime`,`order`.`update_datetime`,`product`.`price`,`product`.`title`,`product`.`imgsrc1`" +
    "FROM `order` LEFT JOIN `product` ON `order`.`item_id` = `product`.`id`" +
    "WHERE `order`.`user_id`=(SELECT `id` FROM `users` WHERE `email`= ? )  ORDER BY `create_datetime` DESC;";

  let params = req.body.email;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("프로필 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 주문취소 select

app.post("/profileRefundSelect", (req, res) => {
  let sql =
    "SELECT * FROM `order` WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`=?) && `order_status`=1 GROUP BY `order_number`;";
  let params = req.body.email;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문취소 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 주문취소 update
app.post("/refundUpdate", (req, res) => {
  let sql =
    "UPDATE `order` SET `refund_reason` = ?, `order_status`=5 WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`=?) && `order_number`=?;";
  let refund_reason = req.body.refund_reason;
  let email = req.body.email;
  let order_number = req.body.order_number;
  let params = [refund_reason, email, order_number];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문취소 update 오류");
    } else {
      res.send(rows);
    }
  });
});

//어드민 제품리스트 select
app.get("/adm", function (req, res) {
  let sql = "SELECT * FROM `product`;";
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("어드민 오류");
    } else {
      res.send(rows);
    }
  });
});

fs.readdir("../public/imgs", (error) => {
  if (error) {
    fs.mkdirSync("../public/imgs");
  }
});

//어드민 제품 리스트 update
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../public/imgs/");
    },
    // filename: function (req, file, cb) {
    //   cb(null, new Date().valueOf() + path.extname(file.originalname));
    // },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

app.post(
  "/admin",
  upload.fields([
    { name: "itemImg1" },
    { name: "itemImg2" },
    { name: "itemImg3" },
  ]),
  function (req, res) {
    let sql =
      "UPDATE `product` " +
      "SET `title` = ?, `cpu`=?,`cooler`=?,`memory`=?" +
      ",`mainboard`=?,`vga`=?,`hdd`=?,`ssd`=?" +
      ",`odd`=?,`power`=?,`os`=?,`price`= ?" +
      ",`imgsrc1`= CONCAT('imgs/',?), `imgsrc2`=CONCAT('imgs/',?),`imgsrc3`=CONCAT('imgs/',?)" +
      " WHERE id=?;";

    let title = req.body.itemTitle;
    let cpu = req.body.itemCpu;
    let cooler = req.body.itemCooler;
    let memory = req.body.itemMemory;
    let mainboard = req.body.itemMainboard;
    let vga = req.body.itemVga;
    let hdd = req.body.itemHdd;
    let ssd = req.body.itemSsd;
    let odd = req.body.itemOdd;
    let power = req.body.itemPower;
    let os = req.body.itemOs;
    let price = req.body.itemPrice;
    let img1 = req.body.itemNameImg1;
    let img2 = req.body.itemNameImg2;
    let img3 = req.body.itemNameImg3;
    let id = req.body.itemId;

    let params = [
      title,
      cpu,
      cooler,
      memory,
      mainboard,
      vga,
      hdd,
      ssd,
      odd,
      power,
      os,
      price,
      img1,
      img2,
      img3,
      id,
    ];
    connection.query(sql, params, function (err, rows, fields) {
      if (err) {
        console.log(" 오류");
      } else {
        res.send(rows);
      }
    });
    // console.log(req.body);
    // console.log(req.file);
    // console.log(req.file.filename);
  }
);

app.post("/adminNoImg", function (req, res) {
  let sql =
    "UPDATE `product` " +
    "SET `title` = ?, `cpu`=?,`cooler`=?,`memory`=?" +
    ",`mainboard`=?,`vga`=?,`hdd`=?,`ssd`=?" +
    ",`odd`=?,`power`=?,`os`=?,`price`= ?" +
    " WHERE id=?;";

  let title = req.body.itemTitle;
  let cpu = req.body.itemCpu;
  let cooler = req.body.itemCooler;
  let memory = req.body.itemMemory;
  let mainboard = req.body.itemMainboard;
  let vga = req.body.itemVga;
  let hdd = req.body.itemHdd;
  let ssd = req.body.itemSsd;
  let odd = req.body.itemOdd;
  let power = req.body.itemPower;
  let os = req.body.itemOs;
  let price = req.body.itemPrice;
  let id = req.body.itemId;

  let params = [
    title,
    cpu,
    cooler,
    memory,
    mainboard,
    vga,
    hdd,
    ssd,
    odd,
    power,
    os,
    price,
    id,
  ];
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log(" 오류");
    } else {
      res.send(rows);
      // console.log("ㅎㅇ" + params);
    }
  });
});

//어드민 insert
app.post(
  "/adminInsert",
  upload.fields([
    { name: "itemImg1" },
    { name: "itemImg2" },
    { name: "itemImg3" },
  ]),
  function (req, res) {
    let sql =
      "INSERT INTO `product` (`title`,`cpu`,`cooler`,`memory`,`mainboard`,`vga`,`hdd`,`ssd`,`odd`,`power`,`os`,`price`,`imgsrc1`,`imgsrc2`,`imgsrc3`)" +
      "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";

    let title = req.body.itemTitle;
    let cpu = req.body.itemCpu;
    let cooler = req.body.itemCooler;
    let memory = req.body.itemMemory;
    let mainboard = req.body.itemMainboard;
    let vga = req.body.itemVga;
    let hdd = req.body.itemHdd;
    let ssd = req.body.itemSsd;
    let odd = req.body.itemOdd;
    let power = req.body.itemPower;
    let os = req.body.itemOs;
    let price = req.body.itemPrice;
    let img1 = req.body.itemNameImg1;
    let img2 = req.body.itemNameImg2;
    let img3 = req.body.itemNameImg3;

    let params = [
      title,
      cpu,
      cooler,
      memory,
      mainboard,
      vga,
      hdd,
      ssd,
      odd,
      power,
      os,
      price,
      img1,
      img2,
      img3,
    ];
    connection.query(sql, params, function (err, rows, fields) {
      if (err) {
        console.log(params);
        console.log(" 오류");
      } else {
        res.send(rows);
      }
    });
  }
);

// 어드민 제품리스트 delete
app.post("/adminDelete", (req, res) => {
  let sql = "DELETE FROM `product` WHERE `id`=?;";
  let params = req.body.id;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("장바구니 delete 오류");
    } else {
      res.send(rows);
    }
  });
});

//어드민 환불요청리스트 select
app.get("/admRefund", function (req, res) {
  let sql =
    "SELECT * FROM `order` LEFT JOIN `product` ON `order`.`item_id`=`product`.`id` LEFT JOIN `users` ON `order`.`user_id`=`users`.`id` where `order_status`=5;";
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("어드민 환불요청리스트 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 어드민 환불 토큰
app.post("/admGetToken", async (req, res, next) => {
  try {
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        imp_key: RestApi,
        imp_secret: RestApiS,
      },
    });
    const { access_token } = getToken.data.response;
    // console.log(access_token);

    const getCancelData = await axios({
      url: "https://api.iamport.kr/payments/cancel",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: access_token,
      },
      data: {
        reason: req.body.reason,
        imp_uid: req.body.imp_uid,
      },
    });
    const { response } = getCancelData.data;
    const { merchant_uid } = response;
    // console.log(response.amount);

    // console.log("토큰" + access_token);
    // console.log(response);
    // console.log("바디" + req.body.itemPrice);
    res.send(response);
  } catch (error) {
    console.log("캐치-환불실패");
    res.status(400).send(error);
  }
});

// 어드민 환불완료 update
app.post("/admRefundUpdate", (req, res) => {
  let sql = "UPDATE `order` SET `order_status` = 6 WHERE `imp_uid`=?;";
  let params = req.body.imp_uid;
  // console.log(params);
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("환불 update 오류");
    } else {
      res.send(rows);
    }
  });
});

//어드민 주문조회 select
app.get("/admOrderList", function (req, res) {
  let sql =
    "SELECT * FROM `order` LEFT JOIN `product` ON `order`.`item_id`=`product`.`id` LEFT JOIN `users` ON `order`.`user_id`=`users`.`id` where `order_status` IN (1,2,3);";
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("어드민 주문조회 select 오류");
    } else {
      res.send(rows);
    }
  });
});

// 어드민 주문상태변경 + update
app.post("/admOrderStatusPlus", (req, res) => {
  let sql =
    "UPDATE `order` SET `order_status`= if(`order_status`<3, `order_status`+1,`order_status`) WHERE `order_id`=?;";
  let params = req.body.order_id;
  // console.log(params);
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문상태변경 + update 오류");
    } else {
      res.send(rows);
    }
  });
});

// 어드민 주문상태변경 - update
app.post("/admOrderStatusMinus", (req, res) => {
  let sql =
    "UPDATE `order` SET `order_status`= if(`order_status`>1, `order_status`-1,`order_status`)WHERE `order_id`=?;";
  let params = req.body.order_id;
  // console.log(params);
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문상태변경 - update 오류");
    } else {
      res.send(rows);
    }
  });
});

//
app.get("/ttt", function (req, res) {
  let sql = "SELECT*FROM `order` WHERE order_id=109;";
  connection.query(sql, function (err, rows) {
    if (err) {
      console.log("test 오류");
    } else {
      res.send(rows);
    }
  });
});

// 결제 위변조 여부 검증
app.post("/forgeryCheck", async (req, res, next) => {
  try {
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        imp_key: RestApi,
        imp_secret: RestApiS,
      },
    });
    const { access_token } = getToken.data.response;
    const { imp_uid, merchant_uid, totalPrice } = req.body;

    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${imp_uid}`, // imp_uid 전달
      method: "get", // GET method
      headers: { Authorization: access_token }, // 인증 토큰 Authorization header에 추가
    });
    const paymentData = getPaymentData.data.response; // 조회한 결제 정보
    if (paymentData.amount === totalPrice) {
      res.send(paymentData);
    } else {
      res.status(400).send(error);
      console.log("log : 결제 위변조 체크 가격다름");
    }
  } catch (e) {
    res.status(400).send(e);
    console.log("log : 결제오류");
  }
});

// 주문완료 insert

app.post("/paymentInsert", (req, res) => {
  let sql =
    "INSERT INTO `order`(`imp_uid`,`order_number`,`user_id`,`item_id`,`item_amount`,`payment_price`)" +
    "SELECT ?,?,`user_id`,`item_id`,`item_amount`,`item_price` FROM `cart`" +
    "WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`=?)";

  let imp_uid = req.body.imp_uid;
  let orderNum = req.body.order_number;
  let email = req.body.email;
  let params = [imp_uid, orderNum, email];

  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("주문완료 insert 오류");
    } else {
      let sql =
        "DELETE FROM `cart` WHERE `user_id`=(SELECT `id` FROM `users` WHERE `email`=?);";
      let params = req.body.email;

      connection.query(sql, params, function (err, rows, fields) {
        if (err) {
          console.log("주문완료 delete 오류");
        } else {
          res.send(rows);
        }
      });
    }
  });
});

//결제확인
app.post("/paymentProc", (req, res) => {
  let sql = "SELECT * FROM `order` WHERE `order_number`=?;";
  let params = req.body.order_number;
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log("결제확인 오류");
    } else {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
