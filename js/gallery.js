let photos =[
    "image/gallery/gallery1.webp",
    "image/gallery/gallery2.webp",
    "image/gallery/gallery3.webp",
    "image/gallery/gallery4.webp",
    "image/gallery/gallery5.webp",
    "image/gallery/gallery6.webp",
    "image/gallery/gallery7.webp",
    "image/gallery/gallery8.webp",
    "image/gallery/gallery9.webp",
    "image/gallery/gallery10.webp",
    "image/gallery/gallery11.webp",
    "image/gallery/gallery12.webp",
    "image/gallery/gallery13.webp",
    "image/gallery/gallery14.webp",
    "image/gallery/gallery15.webp",
    "image/gallery/gallery16.webp"
    ];
    let thumbnails=document.querySelectorAll(".gallery-img_item");
    let fullPhoto=document.querySelector(".full-foto");
    let addThumbnailClickHandler=function(thumbnail,photo){
    thumbnail.addEventListener("click", function(){
    fullPhoto.src=photo;
    });
    };
    for (let i=0; i<thumbnails.length; i++) {
    addThumbnailClickHandler(thumbnails[i],photos[i]);
    };
     