import http from "@/utils/request";


//先定义一个请求数据的接口
export const getData = () => {
    //会返回一个promise对象
    return http.get('/home/getData')
}