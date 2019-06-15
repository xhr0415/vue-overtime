<template>
    <div class="addtask">
        <Header>
            <template v-slot:left>
                <i class="iconfont icon-arrow-left" @click="$router.go(-1)"></i>
            </template>
            <template v-slot:center>
                {{$route.params.type==="overtime"?"办公室加班申请":"办公室休假申请"}}
            </template>
        </Header>

         <!-- 内容 -->
        <div class="main">
            <!-- 个人信息 -->
            <div class="personDetails">
                <div class="headimg">
                    <span>
                        <img :src="data.avatar"/>
                    </span>
                </div>
                <div class="contentbox">
                    <div class="content">
                        <div class="left">申请人姓名</div>
                        <div class="right">{{data.nickname}}</div>
                    </div>
                    <div class="content">
                        <div class="left">直接主管</div>
                        <div class="right">秦义超</div>
                    </div>
                </div>
            </div>

            <!-- 申请信息 -->
            <div class="appInfo">
                <p class="appInfo-head">申请信息</p>
                <div class="list">
                    <div class="left">加班日期<i>*</i></div>
                    <div class="right">
                        <el-date-picker v-model="dateVal" placeholder="选择日期"></el-date-picker>
                    </div>
                </div>
                <div class="list">
                    <div class="left">加班类型</div>
                    <div class="right"></div>
                </div>
                <div class="list">
                    <div class="left">加班起始时间<i>*</i></div>
                    <div class="right">
                        <el-time-picker v-model="startTimeVal" placeholder="选择时间"></el-time-picker>
                    </div>
                </div>
                <div class="list">
                    <div class="left">加班截止时间<i>*</i></div>
                    <div class="right">
                        <el-time-picker v-model="endTimeVal" placeholder="选择时间" @change="sumTime"></el-time-picker>
                    </div>
                </div>
                <div class="list">
                    <div class="left">共计时数</div>
                    <div class="right">{{sumTimeVal}}</div>
                </div>
            </div>

            <!-- 加班事由 -->
            <div class="reason">
                <p class="appInfo-head">加班事由</p>
                <div class="reason-content">
                    <textarea style="border:1px solid #ccc" v-model="textareaVal"></textarea>
                </div>
            </div>

            <!-- 附件 -->
            <div class="accessory">
                <p class="appInfo-head"><i class="iconfont icon-renren1"></i>附件</p>
                <div class="accessory-content">
                    <img :src="'http://localhost:3000/'+item" v-for="(item,index) in fileImg" :key="index" />
                    <input type="file" @change="addFiles" />
                </div> 
            </div>
        </div>

        <Footer>
            <template v-slot:left>
                <div class="left" @click="$router.go(-1)">取消</div>
            </template>
            <template v-slot:right>
                <div class="right" @click="clk_submit">提交</div>
            </template>
        </Footer>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
import api from '../api/index'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            dateVal:'',
            startTimeVal:'',
            endTimeVal:'',
            sumTimeVal:'',
            fileImg:[],
            textareaVal:'',
            files:{}
        }
    },
    computed:{
        ...mapState('user',['data']),
    },
    methods:{
        ...mapActions('user',['islogin']),
        //获取共计时数
        sumTime(){
            this.sumTimeVal = (new Date(this.endTimeVal).getTime() - new Date(this.startTimeVal).getTime())/1000/60/60%60;
            this.sumTimeVal = this.sumTimeVal.toFixed(2);
        },
        //上传附件（图片）
        addFiles(e){
            this.files = e.target.files[0];
            let type = this.files.type.match(/\/(\w+)$/i)
            if(type && ['jpg','jpeg','png','gif','pneg'].includes(type[1])){
                if(this.files.size/1024/1024 < 5){
                    //把向ajax发送的数据变成键值对形式的。
                    const formData = new FormData();
                    formData.append('file',this.files)

                    api.commitFile(formData).then(res=>{
                        this.fileImg.push(res.data.url);
                    })
                }
                else{
                    this.$alert('图片太大啦！')
                }
            }
            else{
                this.$alert('格式好像不对啊')
            }
        },
        //点击提交按钮
        clk_submit(){
            api.submit(this.$route.params.type,{
                annex:this.fileImg,
                describe:this.textareaVal,
                endTime:this.endTimeVal,
                startTime:this.startTimeVal,
                type: this.$route.params.type
            }).then(res=>{
                this.$alert(res.data.msg);
                this.$router.go(-1);
            })
        }
    },
    created(){
        this.islogin();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import '../../static/scss/common.scss';
@import '../../static/fonts/iconfont.css';
@import '../../static/scss/details/details.scss';
    .addtask{
        width: 100%;
        height: 100%;

        .main{
            padding-bottom: pxTorem(20px); 
        }
        // pxTorem
    }
</style>