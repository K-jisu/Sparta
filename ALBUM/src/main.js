function push() {
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

  let html = `<div class="col">
    <div class="card h-100">
      <img src="${img}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${foodTitle}</h5>
        <p class="card-text">${ratingstar}</p>
        <p id="card-comment">${comment}</p>
        <button class="card-button">주문하기</button>
      </div>
    </div>
  </div>`;
  $("#cards").append(html);
}
