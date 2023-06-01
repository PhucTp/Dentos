var textElements = document.getElementById('ladi-vocher__number');
var textss = ['8.800.000', '550k/1 răng'];
var currentIndexx = 0;

function changeText() {
  textElements.textContent = textss[currentIndexx];
  currentIndexx = (currentIndexx + 1) % textss.length;
} 

setInterval(changeText, 2000);

var arr_hinh= [
  "./asset/img/custom/img1.jpg",
  "./asset/img/custom/img3.jpg",
  "./asset/img/custom/img2.png",
];

var index =1; 
function next (){
  index++;
  if(index >= arr_hinh.length){
    index = 0;
  }
  var show = document.getElementById('show'); 
  show.src = arr_hinh[index];
} 
function prev(){
  index--;
  if(index < 0) index = arr_hinh.length -1;
  var show = document.getElementById('show'); 
  show.src = arr_hinh[index];
}

var arr_feedback = [
  "./asset/img/feedback/img1.jpg",
  "./asset/img/feedback/img2.jpg",
  "./asset/img/feedback/img3.jpg",

];
var index =1; 
function hi (){
  index++;
  if(index >= arr_feedback.length){
    index = 0;
  }
  var live = document.getElementById('live'); 
  live.src = arr_feedback[index]; 
} 
function bye(){
  index--;
  if(index < 0) index = arr_feedback.length -1;
  var live = document.getElementById('live'); 
  live.src = arr_feedback[index];
}

// service-content chuyen doi anh
var serviceContent = document.getElementById("service-content");
var images = [
    "./asset/img/service/img1.jpg",
    "./asset/img/service/img3.jpg"
];
var texts = [
    {
        heading: "Máy móc tiên tiến hàng đầu",
        content: "Nha khoa đã nhập khẩu trực tiếp hàng trăm thiết bị: Máy X Quang Conebeam CT 3D, máy Panorex – Cephalometric, công nghệ thiết kế răng sứ CAD/CAM 3D,… Mà ít nha khoa nào có thể vượt qua được"
    },
    {
        heading: "Dịch vụ chất lượng",
        content: "Chúng tôi cam kết mang đến cho bạn dịch vụ nha khoa chất lượng cao với đội ngũ bác sĩ giàu kinh nghiệm và công nghệ hiện đại"
    },
    {
        heading: "Chăm sóc tận tâm",
        content: "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi. Chúng tôi luôn đặt sự tin tưởng và hài lòng của bạn lên hàng đầu"
    }
];

var currentIndex = 0;

function changeContent() {
    serviceContent.innerHTML = `
        <div class="service-picture">
            <img src="${images[currentIndex % images.length]}" alt="" class="service-img">
        </div>
        <div class="service-text">
            <h1 class="service-text__heading">${texts[currentIndex % texts.length].heading}</h1>
            <p class="service-text__content">${texts[currentIndex % texts.length].content}</p>
        </div>
    `;

    currentIndex++;
}

setInterval(changeContent, 2000);



// Lấy các phần tử HTML
var daysElement = document.getElementById("days");
var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");

// Tạo ngày hiện tại và ngày kết thúc (1 ngày sau ngày hiện tại)
var currentDate = new Date();
var endDate = new Date(currentDate.getTime() + 240   * 60 * 60 * 1000); // Thêm 1 ngày (24 giờ)

// Cập nhật countdown mỗi giây
var countdownInterval = setInterval(function() {
    // Lấy thời gian hiện tại
    var currentTime = new Date();

    // Tính toán thời gian còn lại (tính bằng mili giây)
    var timeLeft = endDate - currentTime;

    // Tính toán số ngày, giờ, phút, giây từ thời gian còn lại
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    var minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    var seconds = Math.floor((timeLeft / 1000) % 60);

    // Hiển thị giá trị countdown trong các phần tử HTML
    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    // Kiểm tra nếu countdown đã kết thúc
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
    }
}, 1000);

// Hàm định dạng thời gian
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}


