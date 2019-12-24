<template>
  <el-card>
    <breadcrumb slot="header">
      <template slot="title">文章管理</template>
    </breadcrumb>
    <el-card class="articles">
      <el-form>
        <el-form-item label="文章状态 ：">
            <el-radio-group v-model="radio2">
                <el-radio :label="5">全部</el-radio>
                <el-radio :label="0">已发表</el-radio>
                <el-radio :label="1">草稿</el-radio>
                <el-radio :label="2">未通过</el-radio>
                <el-radio :label="3">已审核</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表 ：">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="时间筛选 ：">
            <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
    </el-date-picker>
        </el-form-item>
      </el-form>
      <el-row class="aboutSearch">
          <div>根据条件共搜索到<span>6666666</span>条相关内容</div>
      </el-row>
      <div class="article-item">
          <div class="left">
              <img src="" alt="">
              <div class="info">
                  <span>fdsbg</span>
                 <el-tag class="tag-info">标签一</el-tag>
                 <span>2019-10-14</span>
              </div>
          </div>
          <div class="right">
              <span><i class="el-icon-edit"></i>修改</span>
              <span><i class="el-icon-delete"></i>删除</span>
          </div>
      </div>
    </el-card>
  </el-card>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.articles {
    .aboutSearch{
        height: 34px;
        font-size: 14px;
        border-bottom: 1px dashed #ccc;
        span {
            color: #f00;
            margin: 0 10px;
        }
    }
    .article-item{
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            img{
                width: 120px;
                height: 120px;
            }
            .info{
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .tag-info{
                    width: 60px;
                    text-align: center;
                }
            }
        }
        .right{
            span {
                font-size: 12px;
                margin-right: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>
