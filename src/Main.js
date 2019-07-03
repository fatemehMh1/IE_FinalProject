import './main.css';
import React from 'react';
import BackGround from './picture/img_1.jpg';
import Timer from './picture/timer.png';
function Main() {
    return (
      <div>
        <img id="background" src={BackGround} />
        <div id="sefaresh"> سفارش آنلاین غذا از بهترین رستوان ها و فست فود ها </div>
        <h3 id="showlist">برای دیدن لیست رستوران ها و فست فود هایی که  به شما سرویس می دهند، منطقه ی خود را وارد کنید.</h3>
  
        <form >
          <select name="city">
            <option value="thn">تهران</option>
            <option value="msd">مشهد</option>
            <option value="es">اصفهان</option>
          </select>
          <input type="text" name="location" placeholder=" مثلا نیاوران" />
        </form>
        <i id="arrow" class="fa fa-chevron-down"></i>
        <button>
        <i id="SearchIcon" class="fa fa-search"></i>
        </button>
        <h6>منطقه ی خود را وارد کنید</h6>
        <img id="timer" src={Timer} />
        <h5 id="lastsearch">آخرین جستجو: تهران، شیخ هادی، چهارراه ولیعصر</h5>
        <div id="inset_line"></div>
      </div>
      );
  }
  export default Main;