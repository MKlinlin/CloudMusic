import service from "..";
//获取歌单详情页的数据
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
export function getItemList(data){
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${data}`,
    })
}
//获取歌曲的歌词
export function getMusicLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}