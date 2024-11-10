const ulList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${ulList.childElementCount}`);

ulList.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const items = item.querySelectorAll("ul li").length;
  console.log(`Kategori: ${categoryTitle}`);
  console.log(`Öğe sayısı: ${items}`);
});
