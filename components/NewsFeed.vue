<template>
    <el-card class="box-card shadow-lg ">
        <div class="top ">
          <!-- top section -->
          <p class="card-title">News</p>
          <span><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
        </div>

        <el-row :gutter="20">
            <el-col :span="11" class="mt-2">
                <img class="w-100" src="@/assets/img/newsfeed.png" alt="">                 
                <el-row>
                    <div class="w-100 d-flex justify-content-center ">
                        <div class="w-50 shadow d-flex justify-content-center news_action mt-n3">
                            <!-- Like -->
                            <div class="d-flex mx-2">
                                <i class="bi bi-hand-thumbs-up"></i>
                                <span>{{likeCount}}</span>
                            </div>
                            <div class="d-flex mx-2">
                                <i class="bi bi-chat-left-dots"></i>
                                <span>{{commentCount}}</span>
                            </div>
                            <div class="d-flex mx-2">
                                <i class="bi bi-emoji-smile"></i>
                                <span>{{reactionCount}}</span>
                            </div>
                            
                        </div>
                    </div>
                    
                </el-row>
                
            </el-col>
            <el-col :span="13">
                <el-row>
                    <div class="d-flex mt-2">
                        <!-- Avatar -->
                        <img class="feed-avatar" src='@/assets/img/avatar1.png' alt="">
                        <div>
                            <!-- Name of user -->
                            <h6 class="h6 mx-2">{{userName}}</h6>
                            <!-- Department of user -->
                            <p class="mx-2">{{userDepartment}}</p>
                        </div>
                    </div>
                </el-row>
                <el-row>
                    <div class="description">
                       <p class="mt-2">                        
                            {{ feedDescription }}
                        </p> 
                    </div>
                    <div class="emo-container py-2 px-2  w-45 rounded ">
                        <div class="rounded d-flex justify-content-around">
                            <img src="@/assets/img/emoji/thumb-emo.png" alt="">
                            <img src="@/assets/img/emoji/smiling-face-emo.png" alt="">
                            <img src="@/assets/img/emoji/cry-emo.png" alt="">
                            <img src="@/assets/img/emoji/party-emo.png" alt="">
                            <img src="@/assets/img/emoji/popper-emo.png" alt="">
                        </div>
                    </div>
                    <div class="input-group mt-3">
                        <input type="text" class="form-control border comment-input" placeholder="Write your comment here..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary " type="button"><i class="bi bi-send-fill "></i></button>
                        </div>
                    </div>

                </el-row>
            </el-col>
        </el-row>


        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <!-- News Feed Image -->
        
                    <div class="d-flex justify-content-center mb-3">
                        
                    </div>
        
                </div>
                <div class="col-lg-7">
                    
                    <div class="row mt-2 h-30">
                        
                    </div>
        
                    
                    
        
        
                </div>
            </div>
        </div>
    
</el-card>
</template>

<script setup>
import { ref } from 'vue';

const newsTitle = ref("News");
// const newsImage = ref(require('@/assets/img/newsfeed.png'));
const likeCount = ref(50);
const commentCount = ref(12);
const reactionCount = ref(20);
// const userAvatar = ref("@/assets/img/avatar1.png");
const userName = ref("Nicole T. Hinerman");
const userDepartment = ref("Web developer");
const feedDescription = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus recusandae distinctio tempore nihil quas necessitatibus qui, voluptatibus, vero facilis fugit incidunt iure molestias, amet temporibus ipsam sint eos assumenda?
                        `);

</script>

<style  scoped lang="scss">
.emo-container {
    background-color: #f4f4f4;
}

.emo-container img {
    transition: transform 0.3s ease; /* Add a smooth transition to the transform property */
}

.emo-container img:hover {
    transform: scale(1.5); /* Scale up the image on hover */
}
.news_action{
    background: #f4f4f4;
    position: relative;
    z-index: 1;
}
.feed-avatar{
    width: 70px;
    height: 70px;
    border-radius: 20px;
}
.box-card {
  height: 385px;
  border-radius: 10px;
  // background-color:rgb(250, 250, 255);
  /* Use auto instead of scroll for a better user experience */
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.card-title {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(71, 68, 68);
  font-weight: 600;
  font-size: 18px;
  margin: 0;
}
.description{
    height: 150px;
}
.comment-input{
    height:42px
}


</style>
