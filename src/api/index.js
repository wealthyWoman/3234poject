import http from "@/utils/request";


//先定义一个请求数据的接口
export const getData = () => {
    return http.get('/home/getData')
}