import Mock from "mockjs";
import homeApi from "./mockSeverData/home"


//定义mock请拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)