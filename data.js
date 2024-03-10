
const data = [
    {
      title: "Bài viết số 1",
      date: "2024-03-09",
      imageUrl: "src/image/react.png"
    },
   
  ];
  
  // Xuất mảng data để có thể sử dụng trong các file JavaScript khác
  export default data;
  data.forEach(item => {
    console.log(item.imageUrl);
});
