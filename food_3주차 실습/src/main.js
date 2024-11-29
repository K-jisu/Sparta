//Firebase 인스턴스 가져오기 (db 초기화)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgY9B4FVBJkpH-U07dAG2qSbUwv4Qd5FY",
  authDomain: "foodfighter-9faaa.firebaseapp.com",
  projectId: "foodfighter-9faaa",
  storageBucket: "foodfighter-9faaa.firebasestorage.app",
  messagingSenderId: "965468121572",
  appId: "1:965468121572:web:d13dc6da424ad2f9083ff1",
  measurementId: "G-1S6V9X8MFD",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firebase 데이터 추가
$("#addBtn").click(async function () {
  let img = $("#img").val();
  let foodTitle = $("#foodTitle").val();
  let rating = parseInt($("#rating").val(), 10);
  let comment = $("#comment").val();

  let ratingstar = "";
  console.log(rating);
  switch (rating) {
    case 1:
      ratingstar = "⭐";
      break;
    case 2:
      ratingstar = "⭐⭐";
      break;
    case 3:
      ratingstar = "⭐⭐⭐";
      break;
    case 4:
      ratingstar = "⭐⭐⭐⭐";
      break;
    case 5:
      ratingstar = "⭐⭐⭐⭐⭐";
      break;
    default:
      ratingstar = "없음";
  }
  let doc = {
    image: img,
    foodtitle: foodTitle,
    ratingstar: ratingstar,
    comment: comment,
  };
  await addDoc(collection(db, "Food"), doc);
  alert("저장완료");
  window.location.reload();
});

//Firebase 데이터 불러오기
let docs = await getDocs(collection(db, "Food"));
docs.forEach((doc) => {
  let row = doc.data();

  let img = row.iamge;
  let foodTitle = row.foodTitle;
  let rating = row.ratingstar;
  let comment = row.comment;

  let html = `<div class="col">
    <div class="card h-100">
      <img src="${img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${foodTitle}</h5>
        <p class="card-text">${rating}</p>
        <p id="card-comment">${comment}</p>
        <button class="card-button">주문하기</button>
      </div>
    </div>
  </div>`;
  $("#cards").append(html);
});
