<template>
<div><el-container>
<el-aside style="min-height:100vh; background-color:#eeeeee; width:230px"><asideIn></asideIn></el-aside>
<el-container>
<el-header style="background-color:#eeeeee;"><headerIn></headerIn></el-header>
<el-main><router-view></router-view></el-main>
</el-container>

    </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
