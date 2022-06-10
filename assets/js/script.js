let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg" );
  }
});



// function scrollTo(element){
//   window.scroll(
//     {
//       left:0,
//       top:element.offsetTop,
//       bottom:element.offsetTop,
//       behavior: "smooth"
//     }
//   )
// }
// let contact = document.querySelector(".contact");
// let contacts = document.querySelector("#contact");
// contact.addEventListener ("click", () => {
//   scrollTo(contact);
// })
// let pricingScroll = document.querySelector(".pricingScroll");
// let price = document.querySelector("#pricing");
// pricingScroll.addEventListener ("click", () => {
//   scrollTo(pricingScroll);
// })
// let reviewScroll = document.querySelector(".reviewScroll");
// let review = document.querySelector("#reviewScroll");
// reviewScroll.addEventListener("click", () => {
//   scrollTo(reviewScroll);
// })
