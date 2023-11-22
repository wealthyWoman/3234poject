export default {
    state: {
        isCollapse:false   //用于控制左侧菜单展开/折叠
    },
    mutations:{
        //修改菜单展开 收起的方法
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}