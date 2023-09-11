<template>
  <div class="rn_wrap">
    <div class="box_heading">
      <h3>News</h3>
      <div class="dropdown">
        <button class="dropdown-toggle" type="button" id="upcomingHolidayDrop" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="ri-more-2-fill"></i>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="upcomingHolidayDrop">
          <li><a class="dropdown-item" href="#">Add Holidays</a></li>
          <li><a class="dropdown-item" href="#">View All</a></li>
        </ul>
      </div>
    </div>
    <div class="rn_con">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="10" :lg="11">
          <figure class="rn_img">
            <img src="@/assets/img/newsfeed.png" alt="" />
            <ul class="lc_count_box">
              <li>
                <i class="ri-thumb-up-line"></i>
                <span>{{ likeCount }}</span>
              </li>
              <li>
                <i class="ri-message-2-line"></i>
                <span>{{ commentCount }}</span>
              </li>
              <li>
                <i class="ri-emotion-line"></i>
                <span>{{ reactionCount }}</span>
              </li>
            </ul>
          </figure>
        </el-col>
        <el-col :xs="24" :sm="24" :md="14" :lg="13">
          <div class="rn_right">
            <div class="nu_box">
              <img src="@/assets/img/avatar1.png" alt="" />
              <div class="nu_con">
                <h3>{{ userName }}</h3>
                <p>{{ userDepartment }}</p>
              </div>
            </div>
            <p class="rn_desc">
              {{ feedDescription }}
            </p>
            <ul class="rn_emoji">
              <li><img src="@/assets/img/emoji/thumb-emo.png" alt="" /></li>
              <li>
                <img src="@/assets/img/emoji/smiling-face-emo.png" alt="" />
              </li>
              <li><img src="@/assets/img/emoji/cry-emo.png" alt="" /></li>
              <li><img src="@/assets/img/emoji/party-emo.png" alt="" /></li>
              <li><img src="@/assets/img/emoji/popper-emo.png" alt="" /></li>
            </ul>
            <div class="rn_comment">
              <input placeholder="Write your comment here..." type="text" />
              <button><i class="ri-send-plane-fill"></i></button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newsTitle = ref("News");
// const newsImage = ref(require('@/assets/img/newsfeed.png'));
const likeCount = ref(50);
const commentCount = ref(12);
const reactionCount = ref(20);
// const userAvatar = ref("@/assets/img/avatar1.png");
const userName = ref("Nicole T. Hinerman");
const userDepartment = ref("Web developer");
const feedDescription =
  ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus recusandae distinctio tempore nihil quas necessitatibus qui, voluptatibus, vero facilis fugit incidunt iure molestias, amet temporibus ipsam sint eos assumenda?
                        `);
</script>

<style scoped lang="scss">
.rn_wrap {
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.05);
  padding: 15px;
  min-height: 365px;

  .rn_con {
    padding: 10px 0;
    padding-top: 0;

    .rn_img {
      width: 100%;
      height: 265px;
      margin: 0;
      position: relative;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 5px;
        overflow: hidden;
      }

      .lc_count_box {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%, 0);
        display: flex;
        align-items: center;
        background-color: var(--white);
        border-radius: 5px;
        box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
        margin: 0;
        padding-inline-start: 0;
        padding: 0px 5px;

        li {
          display: block;
          padding: 10px 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-grey);
          min-width: 65px;
          text-align: center;
          cursor: pointer;

          i {
            display: inline-block;
            margin-right: 5px;
            font-size: 20px;
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-weight: normal;
            vertical-align: text-top;
          }

          &:first-child {
            i {
              font-size: 18px;
            }
          }
        }
      }
    }

    .rn_right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;

      .nu_box {
        img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          object-position: center;
          border-radius: 5px;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
        }

        .nu_con {
          display: inline-block;
          vertical-align: middle;
          width: calc(100% - 60px);
          padding-left: 15px;

          h3 {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0;
            margin-bottom: 3px;
          }

          p {
            color: var(--text-grey);
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            text-transform: capitalize;
          }
        }
      }

      .rn_desc {
        font-size: 14px;
        font-weight: normal;
        line-height: 24px;
        color: var(--text-primary);
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }

      .rn_emoji {
        padding-inline-start: 0;
        margin: 0;
        background-color: var(--grey-bg);
        border-radius: 5px;
        margin-bottom: 10px;

        li {
          display: inline-block;
          padding: 4px 8px;

          img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            object-position: center;
          }
        }
      }

      .rn_comment {
        position: relative;
        width: 100%;

        input {
          display: block;
          width: 100%;
          background-color: transparent;
          border-radius: 5px;
          border: 1px solid #cacaca;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: normal;
          padding: 8px 12px;
          padding-right: 40px;
          border-radius: 5px;
          outline: none;
          transition: all 250ms ease-in-out;

          &:focus {
            border-color: var(--text-primary);
          }
        }

        button {
          background-color: var(--grey-bg);
          color: var(--text-primary);
          border: none;
          position: absolute;
          top: 5px;
          right: 6px;
          width: 30px;
          height: 30px;
          padding: 0;
          border-radius: 5px;
          padding-right: 4px;
          transition: all 250ms ease-in-out;

          i {
            display: block;
            transform: rotate(45deg);
          }

          &:hover {
            background-color: var(--text-primary);
            color: var(--white);
          }
        }
      }
    }
  }
}
</style>
