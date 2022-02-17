let photos =[
    "image/gallery/gallery1.jpg",
    "image/gallery/gallery2.jpg",
    "image/gallery/gallery3.jpg",
    "image/gallery/gallery4.jpg",
    "image/gallery/gallery5.jpg",
    "image/gallery/gallery6.jpg",
    "image/gallery/gallery7.jpg",
    "image/gallery/gallery8.jpg",
    "image/gallery/gallery9.jpg",
    "image/gallery/gallery10.jpg",
    "image/gallery/gallery11.jpg",
    "image/gallery/gallery12.jpg",
    "image/gallery/gallery13.jpg",
    "image/gallery/gallery14.jpg",
    "image/gallery/gallery15.jpg",
    "image/gallery/gallery16.jpg"
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
     