let album = (artist, title, tracks) => {
    let newAlbum = {
        artist,
        title,
        tracks,
    };
    if (tracks) {
        newAlbum["tracks"] = tracks;
    }
    return newAlbum;
};
console.log("Atif Aslam", "Tere Bin");
console.log("Ali Zafar", "Rockstar", 8);
console.log("Abida Parveen", "Mera Ghazi Alma Wala");
export {};
