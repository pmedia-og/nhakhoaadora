
(function(){
  const KEY = "adora_demo_v2";
  const DEFAULTS = {
    settings:{
      brand:"Nha Khoa Adora",
      slogan:"Kiến tạo nụ cười hoàn hảo của bạn",
      phone:"0968 096 868",
      phone2:"0251 88 75 666",
      address:"236 Đồng Khởi, P. Tam Hiệp, Đồng Nai",
      hours:"08:00 – 20:00 · Thứ 2 – Chủ nhật",
      website:"https://nhakhoaadora.com/",
      logo:"https://nhakhoaadora.com/wp-content/uploads/2025/08/ICON-TAG-WEB-02.png",
      zalo:"https://zalo.me/0968096868",
      map:"https://www.google.com/maps/search/?api=1&query=236+Dong+Khoi+Tam+Hiep+Dong+Nai"
    },
    services:[
      {id:"sv1",name:"Niềng răng thẩm mỹ",icon:"🦷",image:"https://nhakhoaadora.com/wp-content/uploads/2025/09/z7001284779872_5b8e6f0f694585194c130dc2001dfda9.jpg",category:"Chỉnh nha",price:"Từ 22.000.000đ",desc:"Giải pháp chỉnh nha cá nhân hóa, theo dõi định kỳ cùng bác sĩ chuyên khoa.",active:true},
      {id:"sv2",name:"Cấy ghép Implant",icon:"⚙️",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/TRONG-RANG-IMPLANT-scaled.jpg",category:"Phục hình",price:"Liên hệ tư vấn",desc:"Phục hồi răng mất với kế hoạch điều trị và đánh giá tình trạng xương hàm.",active:true},
      {id:"sv3",name:"Răng sứ thẩm mỹ",icon:"✨",image:"https://nhakhoaadora.com/wp-content/uploads/2025/09/c2cd6d3e4438f666af294.jpg20250503160616.webp",category:"Thẩm mỹ",price:"Từ 3.500.000đ/răng",desc:"Phục hình thẩm mỹ với kế hoạch thiết kế nụ cười phù hợp khuôn mặt.",active:true},
      {id:"sv4",name:"Tẩy trắng răng",icon:"💎",image:"https://nhakhoaadora.com/wp-content/uploads/2025/09/tay-trang-rang-gia-bao-nhieu-1024x683-1.jpg",category:"Thẩm mỹ",price:"Xem bảng giá",desc:"Cải thiện màu răng và tư vấn chăm sóc duy trì sau điều trị.",active:true},
      {id:"sv5",name:"Nha khoa trẻ em",icon:"🌈",image:"https://nhakhoaadora.com/wp-content/uploads/2025/09/NHA-KHOA-TRE-EM-1-scaled.png",category:"Tổng quát",price:"Liên hệ tư vấn",desc:"Khám, phòng ngừa và chăm sóc răng miệng cho trẻ trong môi trường thân thiện.",active:true},
      {id:"sv6",name:"Khám & vệ sinh răng",icon:"🪥",image:"https://nhakhoaadora.com/wp-content/uploads/2025/09/NHA-KHOA-TONG-QUAT-1-scaled.png",category:"Tổng quát",price:"Từ 250.000đ",desc:"Khám tổng quát, tư vấn và vệ sinh răng miệng định kỳ.",active:true}
    ],
    doctors:[
      {id:"dr1",name:"ThS.BS.CKII Nguyễn Thị Minh Hiền",title:"Thạc sĩ, Bác sĩ CKII",focus:"Điều trị chuyên sâu",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/HINH-BAC-HIEN-NEW-2025_web-01-1-scaled.png",active:true},
      {id:"dr2",name:"BS. Trần Thị Kim Liên",title:"Bác sĩ chuyên khoa",focus:"Nha khoa tổng quát & chỉnh nha",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/BSY-TRAN-THI-KIM-LIEN-scaled.png",active:true},
      {id:"dr3",name:"BS.CKI Nguyễn Phương Hanh",title:"Bác sĩ CKI",focus:"Nha khoa tổng quát & thẩm mỹ",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/BAC-SI-PHUONG-HANH-trang-chu-01.png",active:true},
      {id:"dr4",name:"BS.CKI Vũ Tuân",title:"Bác sĩ CKI",focus:"Nha khoa chuyên sâu",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/BSY-VU-TUAN-scaled.png",active:true},
      {id:"dr5",name:"BS.CKI Võ Hàm Thắng",title:"Bác sĩ CKI",focus:"Tổng quát, phẫu thuật miệng & Implant",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/BSY-VO-HAM-THANG-scaled.png",active:true},
      {id:"dr6",name:"BS. Nguyễn Thị Tuyết Nhung",title:"Bác sĩ chuyên khoa",focus:"Nha khoa tổng quát & chỉnh nha",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/z7001206525865_05449286bf943bfc9d8d9058d5164ca1.jpg",active:true},
      {id:"dr7",name:"BS. Trần Thị Diễm Hà",title:"Bác sĩ chuyên khoa",focus:"Nha khoa tổng quát",image:"https://nhakhoaadora.com/wp-content/uploads/2025/08/BSY-TRAN-THI-DIEM-HA-scaled.png",active:true}
    ],
    news:[
      {id:"nw1",title:"5 dấu hiệu bạn nên đi khám răng sớm",tag:"Kiến thức",excerpt:"Đau buốt, chảy máu nướu hay hơi thở có mùi kéo dài đều là những tín hiệu không nên bỏ qua.",active:true},
      {id:"nw2",title:"Chăm sóc sau khi tẩy trắng răng",tag:"Sau điều trị",excerpt:"Một vài thói quen đơn giản giúp màu răng ổn định và hạn chế ê buốt trong những ngày đầu.",active:true},
      {id:"nw3",title:"Bao lâu nên kiểm tra răng định kỳ?",tag:"Phòng ngừa",excerpt:"Kiểm tra định kỳ giúp phát hiện sớm vấn đề răng miệng và chủ động kế hoạch chăm sóc.",active:true}
    ],
    appointments:[
      {id:"AD26082701",createdAt:"2026-08-27T09:15:00",customer:"Nguyễn Minh Anh",phone:"0901234567",serviceId:"sv1",doctorId:"dr2",date:"2026-08-29",time:"09:30",status:"confirmed",note:"Tư vấn niềng trong suốt"},
      {id:"AD26082702",createdAt:"2026-08-27T10:05:00",customer:"Trần Quốc Huy",phone:"0912345678",serviceId:"sv6",doctorId:"",date:"2026-08-28",time:"15:00",status:"pending",note:"Khám tổng quát"},
      {id:"AD26082607",createdAt:"2026-08-26T16:20:00",customer:"Lê Thảo Vy",phone:"0988123456",serviceId:"sv4",doctorId:"dr4",date:"2026-08-27",time:"17:30",status:"completed",note:""}
    ]
  };

  const clone = x => JSON.parse(JSON.stringify(x));
  function getData(){
    try{
      const saved = JSON.parse(localStorage.getItem(KEY));
      if(!saved) { localStorage.setItem(KEY, JSON.stringify(DEFAULTS)); return clone(DEFAULTS); }
      return saved;
    }catch(e){
      localStorage.setItem(KEY, JSON.stringify(DEFAULTS));
      return clone(DEFAULTS);
    }
  }
  function setData(data){
    localStorage.setItem(KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("adora:data"));
  }
  function resetData(){ setData(clone(DEFAULTS)); }
  function uid(prefix){ return prefix + Date.now().toString(36) + Math.random().toString(36).slice(2,5); }
  function formatDate(str){
    if(!str) return "";
    const d = new Date(str + (str.length===10 ? "T00:00:00":""));
    return d.toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"});
  }
  function statusLabel(s){ return ({pending:"Chờ xác nhận",confirmed:"Đã xác nhận",completed:"Đã hoàn tất",cancelled:"Đã hủy"})[s] || s; }
  function esc(s){ return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c])); }
  function serviceBy(data,id){ return data.services.find(x=>x.id===id) || {}; }
  function doctorBy(data,id){ return data.doctors.find(x=>x.id===id) || {}; }
  function toast(msg){
    let t=document.querySelector(".toast");
    if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t);}
    t.textContent=msg;t.classList.add("show");clearTimeout(t._to);t._to=setTimeout(()=>t.classList.remove("show"),2200);
  }
  window.AdoraDemo={KEY,DEFAULTS,getData,setData,resetData,uid,formatDate,statusLabel,esc,serviceBy,doctorBy,toast};
})();
